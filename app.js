// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const STATE = {
  activePath: null,       // 'remi' | 'micah'
  activeTopic: null,
  lessonPhase: 'cards',   // 'cards' | 'quiz' | 'activity' | 'tool' | 'complete'
  cardIndex: 0,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  progress: JSON.parse(localStorage.getItem('mma_progress') || '{"remi":{},"micah":{},"coins":{"remi":0,"micah":0}}'),
};

function saveProgress() {
  localStorage.setItem('mma_progress', JSON.stringify(STATE.progress));
}

function getTopicState(path, topicId) {
  return STATE.progress[path][topicId] || { completed: false, stars: 0, quizScore: 0 };
}

function setTopicComplete(path, topicId, stars, score) {
  STATE.progress[path][topicId] = { completed: true, stars, quizScore: score };
  const coinReward = stars * 10;
  STATE.progress.coins[path] = (STATE.progress.coins[path] || 0) + coinReward;
  saveProgress();
}

function getCompletedCount(path) {
  const topics = COURSE.paths[path].topics;
  return topics.filter(t => getTopicState(path, t).completed).length;
}

function isTopicUnlocked(path, topicId) {
  const topics = COURSE.paths[path].topics;
  const idx = topics.indexOf(topicId);
  if (idx === 0) return true;
  return getTopicState(path, topics[idx - 1]).completed;
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

function goHome() {
  showScreen('home');
  renderHome();
}

function goRoadmap(path) {
  STATE.activePath = path;
  showScreen('roadmap');
  renderRoadmap();
}

function goLesson(path, topicId) {
  if (!isTopicUnlocked(path, topicId)) return;
  STATE.activePath = path;
  STATE.activeTopic = topicId;
  STATE.lessonPhase = 'cards';
  STATE.cardIndex = 0;
  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  STATE.quizAnswered = false;
  showScreen('lesson');
  renderLesson();
}

// ═══════════════════════════════════════
// HOME SCREEN
// ═══════════════════════════════════════
function renderHome() {
  ['remi','micah'].forEach(path => {
    const total = COURSE.paths[path].topics.length;
    const done = getCompletedCount(path);
    const pct = Math.round((done / total) * 100);
    const el = document.getElementById('home-' + path);
    if (!el) return;
    el.querySelector('.path-progress-fill').style.width = pct + '%';
    el.querySelector('.path-progress-label').textContent = done + ' of ' + total + ' topics complete';
    el.querySelector('.path-coins-val').textContent = STATE.progress.coins[path] || 0;
  });
}

// ═══════════════════════════════════════
// ROADMAP SCREEN
// ═══════════════════════════════════════
function renderRoadmap() {
  const path = STATE.activePath;
  const cfg = COURSE.paths[path];
  const topics = cfg.topics;
  const done = getCompletedCount(path);
  const total = topics.length;
  const coins = STATE.progress.coins[path] || 0;

  document.getElementById('roadmap-title').textContent = cfg.emoji + ' ' + cfg.name + "'s Path";
  document.getElementById('roadmap-title').style.color = cfg.color;
  document.getElementById('roadmap-done').textContent = done + '/' + total;
  document.getElementById('roadmap-coins').textContent = '🪙 ' + coins;

  // header bar
  document.getElementById('header-coin-val').textContent = coins;

  const track = document.getElementById('roadmap-track');
  track.innerHTML = '';
  track.style.setProperty('--path-color', cfg.color);

  // update line color
  const trackLine = track.parentElement;

  topics.forEach((topicId, i) => {
    const topic = COURSE.topics[topicId];
    const ts = getTopicState(path, topicId);
    const unlocked = isTopicUnlocked(path, topicId);

    const node = document.createElement('div');
    node.className = 'topic-node' + (unlocked ? '' : ' locked');

    let iconCls = ts.completed ? 'completed' : (unlocked && i === done ? 'in-progress' : 'upcoming');
    const iconContent = ts.completed ? '✅' : (unlocked && i === done ? topic.emoji : '🔒');

    let stars = '';
    for (let s = 0; s < 3; s++) {
      stars += `<span class="star ${s < ts.stars ? 'earned' : ''}">⭐</span>`;
    }

    const pills = ts.completed
      ? `<span class="pill pill-done">✓ Complete</span>`
      : unlocked
        ? `<span class="pill pill-cards">📚 Cards</span><span class="pill pill-quiz">🧩 Quiz</span><span class="pill pill-activity">🎯 Activity</span>`
        : `<span class="pill pill-locked">🔒 Locked</span>`;

    node.innerHTML = `
      <div class="node-icon ${iconCls}" style="${iconCls !== 'completed' && iconCls !== 'in-progress' ? '' : ''}">
        ${iconContent}
      </div>
      <div class="node-content" style="${ts.completed ? 'border-color:' + topic.color : (unlocked && !ts.completed ? 'border-color:' + cfg.color : '')}">
        <div class="node-title" style="color:${topic.color}">${topic.emoji} ${topic.title}</div>
        <div class="node-tagline">${topic.tagline}</div>
        <div class="node-pills">${pills}</div>
        <div class="node-stars">${stars}</div>
      </div>
    `;

    if (unlocked) {
      node.onclick = () => goLesson(path, topicId);
    }

    track.appendChild(node);
  });
}

// ═══════════════════════════════════════
// LESSON SCREEN
// ═══════════════════════════════════════
function renderLesson() {
  const path = STATE.activePath;
  const topic = COURSE.topics[STATE.activeTopic];
  const cfg = COURSE.paths[path];
  const cards = topic.cards;
  const totalSteps = cards.length + topic.quiz.length + 2; // +activity +tool
  const currentStep = STATE.lessonPhase === 'cards' ? STATE.cardIndex
    : STATE.lessonPhase === 'quiz' ? cards.length + STATE.quizIndex
    : STATE.lessonPhase === 'activity' ? totalSteps - 2
    : totalSteps - 1;

  const pct = Math.round((currentStep / totalSteps) * 100);
  document.getElementById('lesson-progress-fill').style.background = topic.color;
  document.getElementById('lesson-progress-fill').style.width = pct + '%';
  document.getElementById('lesson-progress-label').textContent = currentStep + '/' + totalSteps;
  document.getElementById('header-coin-val').textContent = STATE.progress.coins[path] || 0;

  const container = document.getElementById('lesson-main');
  container.innerHTML = '';

  if (STATE.lessonPhase === 'cards') renderCard(container, topic);
  else if (STATE.lessonPhase === 'quiz') renderQuiz(container, topic, cfg);
  else if (STATE.lessonPhase === 'activity') renderActivity(container, topic, cfg);
  else if (STATE.lessonPhase === 'tool') renderTool(container, topic, cfg);
  else if (STATE.lessonPhase === 'complete') renderComplete(container, topic, cfg, path);
}

function renderCard(container, topic) {
  const card = topic.cards[STATE.cardIndex];
  const total = topic.cards.length;
  const typeLabels = { story: '📖 Story', concept: '💡 Key Concept', reallife: '🌍 Real Life', tip: '💡 Smart Tip' };
  const typeCols = { story: '#F59E0B', concept: '#3B82F6', reallife: '#10B981', tip: '#8B5CF6' };

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="lesson-card ${card.type}">
      <span class="card-type-badge ${card.type}">${typeLabels[card.type] || card.type}</span>
      <span class="card-icon">${card.icon}</span>
      <div class="card-title">${card.title}</div>
      <div class="card-body">${card.body}</div>
    </div>
    <div class="card-nav">
      <button class="btn btn-secondary" onclick="prevCard()" ${STATE.cardIndex === 0 ? 'disabled' : ''}>← Back</button>
      <div class="card-dots">
        ${topic.cards.map((_, i) => `<div class="card-dot ${i === STATE.cardIndex ? 'active' : ''}" style="${i === STATE.cardIndex ? 'background:' + topic.color : ''}"></div>`).join('')}
      </div>
      <button class="btn" style="background:${topic.color};color:white;" onclick="nextCard()">
        ${STATE.cardIndex < total - 1 ? 'Next →' : 'Take the Quiz 🧩'}
      </button>
    </div>
  `;
  container.appendChild(div);
}

function prevCard() {
  if (STATE.cardIndex > 0) { STATE.cardIndex--; renderLesson(); }
}

function nextCard() {
  const cards = COURSE.topics[STATE.activeTopic].cards;
  if (STATE.cardIndex < cards.length - 1) {
    STATE.cardIndex++;
    renderLesson();
  } else {
    STATE.lessonPhase = 'quiz';
    STATE.quizIndex = 0;
    renderLesson();
  }
}

function renderQuiz(container, topic, cfg) {
  const q = topic.quiz[STATE.quizIndex];
  const total = topic.quiz.length;

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="quiz-section">
      <span class="quiz-label">🧩 Quiz Time!</span>
      <div class="quiz-counter">Question ${STATE.quizIndex + 1} of ${total}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options" id="quiz-opts">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" onclick="answerQuiz(${i})" data-idx="${i}">
            ${String.fromCharCode(65+i)}. ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explain" id="quiz-explain"></div>
    </div>
    <div id="quiz-next-wrap"></div>
  `;
  container.appendChild(div);
}

function answerQuiz(chosen) {
  if (STATE.quizAnswered) return;
  STATE.quizAnswered = true;

  const topic = COURSE.topics[STATE.activeTopic];
  const q = topic.quiz[STATE.quizIndex];
  const opts = document.querySelectorAll('.quiz-option');
  const explain = document.getElementById('quiz-explain');
  const nextWrap = document.getElementById('quiz-next-wrap');

  opts.forEach(o => o.disabled = true);
  const isCorrect = chosen === q.correct;

  if (isCorrect) {
    opts[chosen].classList.add('correct');
    STATE.quizScore++;
    explain.className = 'quiz-explain correct';
    explain.textContent = '✅ Correct! ' + q.explain;
  } else {
    opts[chosen].classList.add('wrong');
    opts[q.correct].classList.add('correct');
    explain.className = 'quiz-explain wrong';
    explain.textContent = '❌ Not quite. ' + q.explain;
  }

  const isLast = STATE.quizIndex >= topic.quiz.length - 1;
  nextWrap.innerHTML = `
    <button class="btn" style="background:${topic.color};color:white;margin-top:8px" onclick="nextQuiz()">
      ${isLast ? 'See Results 🎯' : 'Next Question →'}
    </button>
  `;
}

function nextQuiz() {
  const topic = COURSE.topics[STATE.activeTopic];
  STATE.quizAnswered = false;
  if (STATE.quizIndex < topic.quiz.length - 1) {
    STATE.quizIndex++;
    renderLesson();
  } else {
    STATE.lessonPhase = 'activity';
    renderLesson();
    showQuizScore(topic);
  }
}

function showQuizScore(topic) {
  const score = STATE.quizScore;
  const total = topic.quiz.length;
  const pct = Math.round((score / total) * 100);
  const msg = pct === 100 ? 'Perfect score! 🌟 You\'re a money genius!' 
    : pct >= 66 ? 'Great job! You\'re getting it! 💪'
    : 'Good try! Review the cards and try again! 📚';

  document.getElementById('quiz-score-emoji').textContent = pct === 100 ? '🏆' : pct >= 66 ? '🌟' : '📚';
  document.getElementById('quiz-score-title').textContent = score + '/' + total + ' correct';
  document.getElementById('quiz-score-body').textContent = msg;
  document.getElementById('quiz-score-overlay').style.display = 'flex';

  setTimeout(() => {
    document.getElementById('quiz-score-overlay').style.display = 'none';
  }, 2500);
}

function renderActivity(container, topic, cfg) {
  const act = topic.activity;
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="activity-section">
      <span class="activity-label">🎯 Real Life Activity</span>
      <div class="activity-title">${act.title}</div>
      <div class="activity-steps">
        ${act.steps.map((s, i) => `
          <div class="activity-step">
            <div class="step-num">${i+1}</div>
            <div class="step-text">${s}</div>
          </div>
        `).join('')}
      </div>
      <div class="activity-challenge">${act.challenge}</div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="STATE.lessonPhase='quiz';STATE.quizIndex=0;STATE.quizAnswered=false;renderLesson()">← Retake Quiz</button>
      <button class="btn" style="background:${topic.color};color:white" onclick="goToTool()">Try the Calculator 🔢</button>
    </div>
  `;
  container.appendChild(div);
}

function goToTool() {
  STATE.lessonPhase = 'tool';
  renderLesson();
}

function renderTool(container, topic, cfg) {
  const div = document.createElement('div');
  div.className = 'tool-section';

  const toolType = topic.tool ? topic.tool.type : null;
  let toolHTML = '';

  if (toolType === 'savings_goal') {
    toolHTML = `
      <div class="tool-title">💰 Savings Goal Calculator</div>
      <div class="tool-row"><label>My goal costs</label><input type="range" min="5" max="200" value="40" step="5" id="t1" oninput="calcTool1()"><span class="val" id="t1v">£40</span></div>
      <div class="tool-row"><label>I save per week</label><input type="range" min="1" max="20" value="5" id="t2" oninput="calcTool1()"><span class="val" id="t2v">£5</span></div>
      <div class="tool-result"><div class="tool-result-big" id="tr1">8 weeks</div><div class="tool-result-label">to reach your goal</div><div class="tool-result-sub" id="tr2">Keep saving!</div></div>
    `;
  } else if (toolType === 'giving_tracker') {
    toolHTML = `
      <div class="tool-title">❤️ Giving Impact Calculator</div>
      <div class="tool-row"><label>Weekly pocket money</label><input type="range" min="1" max="30" value="5" id="g1" oninput="calcTool2()"><span class="val" id="g1v">£5</span></div>
      <div class="tool-row"><label>% you give away</label><input type="range" min="1" max="30" value="10" id="g2" oninput="calcTool2()"><span class="val" id="g2v">10%</span></div>
      <div class="tool-result"><div class="tool-result-big" id="gr1">£26</div><div class="tool-result-label">given per year</div><div class="tool-result-sub" id="gr2">That's the impact you make.</div></div>
    `;
  } else if (toolType === 'value_compare') {
    toolHTML = `
      <div class="tool-title">🛒 Value for Money Checker</div>
      <div class="tool-row"><label>Item price (£)</label><input type="range" min="1" max="100" value="20" id="v1" oninput="calcTool3()"><span class="val" id="v1v">£20</span></div>
      <div class="tool-row"><label>How many times used</label><input type="range" min="1" max="200" value="20" id="v2" oninput="calcTool3()"><span class="val" id="v2v">20×</span></div>
      <div class="tool-result"><div class="tool-result-big" id="vr1">£1.00</div><div class="tool-result-label">cost per use</div><div class="tool-result-sub" id="vr2">Divide price by uses to find real value!</div></div>
    `;
  } else if (toolType === 'profit_calc') {
    toolHTML = `
      <div class="tool-title">💼 Business Profit Calculator</div>
      <div class="tool-row"><label>Price per item (p)</label><input type="range" min="10" max="500" value="150" step="10" id="p1" oninput="calcTool4()"><span class="val" id="p1v">150p</span></div>
      <div class="tool-row"><label>Items sold</label><input type="range" min="1" max="100" value="20" id="p2" oninput="calcTool4()"><span class="val" id="p2v">20</span></div>
      <div class="tool-row"><label>Total costs (£)</label><input type="range" min="1" max="50" value="5" id="p3" oninput="calcTool4()"><span class="val" id="p3v">£5</span></div>
      <div class="tool-result"><div class="tool-result-big" id="pr1">£25.00</div><div class="tool-result-label">Profit</div><div class="tool-result-sub" id="pr2">Revenue: £30.00 — Costs: £5.00</div></div>
    `;
  } else if (toolType === 'compound_calc') {
    toolHTML = `
      <div class="tool-title">📈 Compound Growth Calculator</div>
      <div class="tool-row"><label>Starting amount</label><input type="range" min="10" max="1000" value="100" step="10" id="c1" oninput="calcTool5()"><span class="val" id="c1v">£100</span></div>
      <div class="tool-row"><label>Annual growth (%)</label><input type="range" min="1" max="15" value="7" id="c2" oninput="calcTool5()"><span class="val" id="c2v">7%</span></div>
      <div class="tool-row"><label>Years</label><input type="range" min="1" max="50" value="20" id="c3" oninput="calcTool5()"><span class="val" id="c3v">20 yrs</span></div>
      <div class="tool-result"><div class="tool-result-big" id="cr1">£387</div><div class="tool-result-label">Final value</div><div class="tool-result-sub" id="cr2">You earned £287 in growth!</div></div>
    `;
  } else if (toolType === 'apr_calc') {
    toolHTML = `
      <div class="tool-title">💳 APR Cost Calculator</div>
      <div class="tool-row"><label>Amount borrowed</label><input type="range" min="100" max="10000" value="1000" step="100" id="a1" oninput="calcTool6()"><span class="val" id="a1v">£1,000</span></div>
      <div class="tool-row"><label>APR (%)</label><input type="range" min="1" max="100" value="20" id="a2" oninput="calcTool6()"><span class="val" id="a2v">20%</span></div>
      <div class="tool-result"><div class="tool-result-big" id="ar1">£200</div><div class="tool-result-label">Interest paid in 1 year</div><div class="tool-result-sub" id="ar2">Total repayment: £1,200</div></div>
    `;
  } else if (toolType === 'tax_calc') {
    toolHTML = `
      <div class="tool-title">🏛️ Tax Calculator</div>
      <div class="tool-row"><label>Earnings (£)</label><input type="range" min="100" max="5000" value="1000" step="100" id="tx1" oninput="calcTool7()"><span class="val" id="tx1v">£1,000</span></div>
      <div class="tool-row"><label>Tax rate (%)</label><input type="range" min="5" max="45" value="20" id="tx2" oninput="calcTool7()"><span class="val" id="tx2v">20%</span></div>
      <div class="tool-result"><div class="tool-result-big" id="txr1">£800</div><div class="tool-result-label">You keep</div><div class="tool-result-sub" id="txr2">£200 paid in tax — funds NHS, schools, roads</div></div>
    `;
  } else if (toolType === 'mortgage_calc') {
    toolHTML = `
      <div class="tool-title">🏠 Mortgage Calculator</div>
      <div class="tool-row"><label>House price</label><input type="range" min="100000" max="1000000" value="300000" step="10000" id="m1" oninput="calcTool8()"><span class="val" id="m1v">£300k</span></div>
      <div class="tool-row"><label>Deposit (%)</label><input type="range" min="5" max="50" value="20" id="m2" oninput="calcTool8()"><span class="val" id="m2v">20%</span></div>
      <div class="tool-row"><label>Interest rate (%)</label><input type="range" min="1" max="8" value="4" step="0.5" id="m3" oninput="calcTool8()"><span class="val" id="m3v">4%</span></div>
      <div class="tool-row"><label>Term (years)</label><input type="range" min="10" max="35" value="25" id="m4" oninput="calcTool8()"><span class="val" id="m4v">25 yrs</span></div>
      <div class="tool-result"><div class="tool-result-big" id="mr1">£1,265/mo</div><div class="tool-result-label">Monthly payment</div><div class="tool-result-sub" id="mr2">Total repaid: £379,500</div></div>
    `;
  } else if (toolType === 'credit_simulator') {
    toolHTML = `
      <div class="tool-title">⭐ Credit Score Simulator</div>
      <div class="tool-row"><label>On-time payments (months)</label><input type="range" min="0" max="60" value="24" id="cs1" oninput="calcTool9()"><span class="val" id="cs1v">24</span></div>
      <div class="tool-row"><label>Missed payments</label><input type="range" min="0" max="10" value="0" id="cs2" oninput="calcTool9()"><span class="val" id="cs2v">0</span></div>
      <div class="tool-row"><label>Credit utilisation (%)</label><input type="range" min="0" max="100" value="25" id="cs3" oninput="calcTool9()"><span class="val" id="cs3v">25%</span></div>
      <div class="tool-result"><div class="tool-result-big" id="csr1">820</div><div class="tool-result-label">Estimated credit score</div><div class="tool-result-sub" id="csr2">Good — competitive mortgage rates available</div></div>
    `;
  } else if (toolType === 'pension_calc') {
    toolHTML = `
      <div class="tool-title">🌅 Pension Calculator</div>
      <div class="tool-row"><label>Monthly contribution</label><input type="range" min="20" max="1000" value="200" step="10" id="pe1" oninput="calcTool10()"><span class="val" id="pe1v">£200</span></div>
      <div class="tool-row"><label>Starting age</label><input type="range" min="18" max="55" value="25" id="pe2" oninput="calcTool10()"><span class="val" id="pe2v">25</span></div>
      <div class="tool-row"><label>Annual growth (%)</label><input type="range" min="3" max="10" value="7" id="pe3" oninput="calcTool10()"><span class="val" id="pe3v">7%</span></div>
      <div class="tool-result"><div class="tool-result-big" id="per1">£524k</div><div class="tool-result-label">Pension pot at 65</div><div class="tool-result-sub" id="per2">You contributed £96k — growth added the rest!</div></div>
    `;
  } else if (toolType === 'inflation_calc') {
    toolHTML = `
      <div class="tool-title">🎈 Inflation Calculator</div>
      <div class="tool-row"><label>Amount today</label><input type="range" min="10" max="1000" value="100" step="10" id="inf1" oninput="calcTool11()"><span class="val" id="inf1v">£100</span></div>
      <div class="tool-row"><label>Inflation rate (%)</label><input type="range" min="1" max="10" value="3" id="inf2" oninput="calcTool11()"><span class="val" id="inf2v">3%</span></div>
      <div class="tool-row"><label>Years ahead</label><input type="range" min="1" max="50" value="20" id="inf3" oninput="calcTool11()"><span class="val" id="inf3v">20 yrs</span></div>
      <div class="tool-result"><div class="tool-result-big" id="infr1">£55</div><div class="tool-result-label">Real purchasing power in the future</div><div class="tool-result-sub" id="infr2">Your £100 will only buy £55 worth of today's goods!</div></div>
    `;
  }

  div.innerHTML = toolHTML;
  container.appendChild(div);

  // complete button
  const completeBtn = document.createElement('div');
  completeBtn.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;';
  completeBtn.innerHTML = `
    <button class="btn btn-secondary" onclick="STATE.lessonPhase='activity';renderLesson()">← Activity</button>
    <button class="btn btn-primary" onclick="completeLesson()">✅ Complete Lesson!</button>
  `;
  container.appendChild(completeBtn);

  // init tool values
  const inits = {savings_goal:'calcTool1',giving_tracker:'calcTool2',value_compare:'calcTool3',profit_calc:'calcTool4',compound_calc:'calcTool5',apr_calc:'calcTool6',tax_calc:'calcTool7',mortgage_calc:'calcTool8',credit_simulator:'calcTool9',pension_calc:'calcTool10',inflation_calc:'calcTool11'};
  if (inits[toolType]) window[inits[toolType]] && window[inits[toolType]]();
}

function completeLesson() {
  const score = STATE.quizScore;
  const total = COURSE.topics[STATE.activeTopic].quiz.length;
  const stars = score === total ? 3 : score >= Math.ceil(total/2) ? 2 : 1;
  const alreadyDone = getTopicState(STATE.activePath, STATE.activeTopic).completed;

  if (!alreadyDone) {
    setTopicComplete(STATE.activePath, STATE.activeTopic, stars, score);
  }

  STATE.lessonPhase = 'complete';
  renderLesson();
  launchConfetti();
}

function renderComplete(container, topic, cfg, path) {
  const ts = getTopicState(path, topic.id);
  const coins = ts.stars * 10;
  const totalTopics = COURSE.paths[path].topics.length;
  const doneCount = getCompletedCount(path);
  const allDone = doneCount >= totalTopics;

  let starsHTML = '';
  for (let i = 0; i < 3; i++) starsHTML += i < ts.stars ? '⭐' : '☆';

  const div = document.createElement('div');
  div.innerHTML = `
    <div style="text-align:center;padding:32px 0;">
      <div style="font-size:72px;margin-bottom:12px;">${ts.stars === 3 ? '🏆' : ts.stars === 2 ? '🌟' : '👍'}</div>
      <div style="font-family:'Fredoka One',cursive;font-size:30px;margin-bottom:8px;color:${topic.color}">Lesson Complete!</div>
      <div style="font-size:32px;margin-bottom:16px;">${starsHTML}</div>
      <div style="background:var(--gold-light);border:2px solid var(--gold);border-radius:16px;padding:14px 24px;display:inline-flex;align-items:center;gap:8px;font-size:20px;font-weight:900;color:#92400E;margin-bottom:24px;">
        🪙 +${coins} coins earned!
      </div>
      <div style="font-size:16px;color:var(--text-muted);font-weight:600;margin-bottom:32px;">
        ${doneCount} of ${totalTopics} topics complete on ${cfg.name}'s path
      </div>
      ${allDone ? `
        <div class="certificate">
          <div class="cert-title">🎓 Certificate of Achievement</div>
          <div style="font-size:14px;color:#92400E;font-weight:700;margin:8px 0;">This certifies that</div>
          <div class="cert-name">${cfg.name} Mortoo</div>
          <div class="cert-body">has completed the full Mortoo Money Academy ${cfg.name === 'Remi' ? 'Explorer' : 'Champion'} Path and demonstrated real-world financial literacy skills including saving, giving, entrepreneurship, investing, and more.</div>
          <div class="cert-date">Completed ${new Date().toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'})}</div>
        </div>
      ` : ''}
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="goRoadmap('${path}')">📍 Back to Roadmap</button>
        ${doneCount < totalTopics ? `<button class="btn" style="background:${cfg.color};color:white" onclick="nextTopic()">Next Topic →</button>` : ''}
        <button class="btn btn-secondary" onclick="goHome()">🏠 Home</button>
      </div>
    </div>
  `;
  container.appendChild(div);
}

function nextTopic() {
  const path = STATE.activePath;
  const topics = COURSE.paths[path].topics;
  const idx = topics.indexOf(STATE.activeTopic);
  if (idx < topics.length - 1) {
    goLesson(path, topics[idx + 1]);
  }
}

// ═══════════════════════════════════════
// TOOL CALCULATORS
// ═══════════════════════════════════════
function calcTool1() {
  const goal = +document.getElementById('t1').value;
  const rate = +document.getElementById('t2').value;
  document.getElementById('t1v').textContent = '£' + goal;
  document.getElementById('t2v').textContent = '£' + rate;
  const weeks = Math.ceil(goal / rate);
  document.getElementById('tr1').textContent = weeks + ' weeks';
  const d = new Date(); d.setDate(d.getDate() + weeks * 7);
  document.getElementById('tr2').textContent = 'You\'ll get there by ' + d.toLocaleDateString('en-GB',{month:'short',year:'numeric'}) + '!';
}

function calcTool2() {
  const pm = +document.getElementById('g1').value;
  const pct = +document.getElementById('g2').value;
  document.getElementById('g1v').textContent = '£' + pm;
  document.getElementById('g2v').textContent = pct + '%';
  const annual = Math.round(pm * (pct / 100) * 52);
  document.getElementById('gr1').textContent = '£' + annual;
  const impact = annual >= 100 ? 'That could buy 20 meals for a family in need!' : annual >= 50 ? 'That could buy school supplies for 5 kids!' : 'Every pound makes a difference!';
  document.getElementById('gr2').textContent = impact;
}

function calcTool3() {
  const price = +document.getElementById('v1').value;
  const uses = +document.getElementById('v2').value;
  document.getElementById('v1v').textContent = '£' + price;
  document.getElementById('v2v').textContent = uses + '×';
  const cpu = (price / uses).toFixed(2);
  document.getElementById('vr1').textContent = '£' + cpu + ' per use';
  const verdict = +cpu < 0.5 ? 'Excellent value! 🌟' : +cpu < 1.5 ? 'Good value 👍' : +cpu < 3 ? 'Okay value — think carefully' : 'Poor value — consider alternatives!';
  document.getElementById('vr2').textContent = verdict;
}

function calcTool4() {
  const price = +document.getElementById('p1').value;
  const sold = +document.getElementById('p2').value;
  const cost = +document.getElementById('p3').value;
  document.getElementById('p1v').textContent = price + 'p';
  document.getElementById('p2v').textContent = sold;
  document.getElementById('p3v').textContent = '£' + cost;
  const rev = (price * sold) / 100;
  const profit = rev - cost;
  document.getElementById('pr1').textContent = '£' + profit.toFixed(2);
  document.getElementById('pr2').textContent = 'Revenue: £' + rev.toFixed(2) + ' — Costs: £' + cost;
}

function calcTool5() {
  const start = +document.getElementById('c1').value;
  const rate = +document.getElementById('c2').value / 100;
  const years = +document.getElementById('c3').value;
  document.getElementById('c1v').textContent = '£' + start;
  document.getElementById('c2v').textContent = (+document.getElementById('c2').value) + '%';
  document.getElementById('c3v').textContent = years + ' yrs';
  const result = Math.round(start * Math.pow(1 + rate, years));
  const gain = result - start;
  document.getElementById('cr1').textContent = '£' + result.toLocaleString();
  document.getElementById('cr2').textContent = 'You earned £' + gain.toLocaleString() + ' in growth on £' + start + ' invested!';
}

function calcTool6() {
  const amt = +document.getElementById('a1').value;
  const rate = +document.getElementById('a2').value;
  document.getElementById('a1v').textContent = '£' + amt.toLocaleString();
  document.getElementById('a2v').textContent = rate + '%';
  const interest = Math.round(amt * rate / 100);
  document.getElementById('ar1').textContent = '£' + interest.toLocaleString();
  document.getElementById('ar2').textContent = 'Total repayment: £' + (amt + interest).toLocaleString();
}

function calcTool7() {
  const earn = +document.getElementById('tx1').value;
  const rate = +document.getElementById('tx2').value;
  document.getElementById('tx1v').textContent = '£' + earn.toLocaleString();
  document.getElementById('tx2v').textContent = rate + '%';
  const tax = Math.round(earn * rate / 100);
  document.getElementById('txr1').textContent = '£' + (earn - tax).toLocaleString();
  document.getElementById('txr2').textContent = '£' + tax + ' paid in tax — funds NHS, schools, roads';
}

function calcTool8() {
  const price = +document.getElementById('m1').value;
  const dep = +document.getElementById('m2').value / 100;
  const annualRate = +document.getElementById('m3').value / 100;
  const years = +document.getElementById('m4').value;
  document.getElementById('m1v').textContent = '£' + Math.round(price/1000) + 'k';
  document.getElementById('m2v').textContent = (+document.getElementById('m2').value) + '%';
  document.getElementById('m3v').textContent = (+document.getElementById('m3').value) + '%';
  document.getElementById('m4v').textContent = years + ' yrs';
  const loan = price * (1 - dep);
  const r = annualRate / 12;
  const n = years * 12;
  const monthly = r === 0 ? loan/n : loan * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
  const total = monthly * n;
  document.getElementById('mr1').textContent = '£' + Math.round(monthly).toLocaleString() + '/mo';
  document.getElementById('mr2').textContent = 'Total repaid: £' + Math.round(total).toLocaleString() + ' (£' + Math.round(total-loan).toLocaleString() + ' interest)';
}

function calcTool9() {
  const ontime = +document.getElementById('cs1').value;
  const missed = +document.getElementById('cs2').value;
  const util = +document.getElementById('cs3').value;
  document.getElementById('cs1v').textContent = ontime;
  document.getElementById('cs2v').textContent = missed;
  document.getElementById('cs3v').textContent = util + '%';
  let score = 500 + (ontime * 6) - (missed * 80) - Math.max(0, (util - 30) * 3);
  score = Math.min(999, Math.max(100, Math.round(score)));
  document.getElementById('csr1').textContent = score;
  const label = score >= 881 ? 'Excellent — best mortgage rates!' : score >= 721 ? 'Good — competitive rates available' : score >= 561 ? 'Fair — improving needed' : 'Poor — significant work needed';
  document.getElementById('csr2').textContent = label;
}

function calcTool10() {
  const contrib = +document.getElementById('pe1').value;
  const age = +document.getElementById('pe2').value;
  const growth = +document.getElementById('pe3').value / 100 / 12;
  const months = (65 - age) * 12;
  document.getElementById('pe1v').textContent = '£' + contrib;
  document.getElementById('pe2v').textContent = age;
  document.getElementById('pe3v').textContent = (+document.getElementById('pe3').value) + '%';
  const result = growth === 0 ? contrib*months : contrib * (Math.pow(1+growth,months)-1) / growth;
  const contributed = contrib * months;
  document.getElementById('per1').textContent = '£' + Math.round(result/1000) + 'k';
  document.getElementById('per2').textContent = 'You contributed £' + Math.round(contributed/1000) + 'k — growth added £' + Math.round((result-contributed)/1000) + 'k more!';
}

function calcTool11() {
  const amt = +document.getElementById('inf1').value;
  const rate = +document.getElementById('inf2').value / 100;
  const years = +document.getElementById('inf3').value;
  document.getElementById('inf1v').textContent = '£' + amt;
  document.getElementById('inf2v').textContent = (+document.getElementById('inf2').value) + '%';
  document.getElementById('inf3v').textContent = years + ' yrs';
  const real = Math.round(amt / Math.pow(1 + rate, years));
  document.getElementById('infr1').textContent = '£' + real;
  document.getElementById('infr2').textContent = 'Your £' + amt + ' will only buy £' + real + ' of today\'s goods in ' + years + ' years. Invest to beat this!';
}

// ═══════════════════════════════════════
// CONFETTI
// ═══════════════════════════════════════
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const pieces = [];
  const colors = ['#F59E0B','#10B981','#3B82F6','#EF4444','#8B5CF6','#F4845F','#06B6D4'];
  for (let i = 0; i < 200; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      r: 4 + Math.random() * 8,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.rot += p.rotV;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.c;
      if (p.shape === 'rect') ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r * 1.5);
      else { ctx.beginPath(); ctx.arc(0, 0, p.r/2, 0, Math.PI*2); ctx.fill(); }
      ctx.restore();
    });
    frame++;
    if (frame < 180) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
});
