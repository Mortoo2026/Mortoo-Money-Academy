// ═══════════════ STATE ═══════════════
const STATE={
  path:null,topic:null,phase:'cards',cardIdx:0,
  quizIdx:0,quizScore:0,quizAnswered:false,
  progress:JSON.parse(localStorage.getItem('mma_v2')||'{"remi":{},"micah":{},"coins":{"remi":0,"micah":0}}')
};
function save(){localStorage.setItem('mma_v2',JSON.stringify(STATE.progress));}
function ts(path,id){return STATE.progress[path][id]||{done:false,stars:0,score:0};}
function setDone(path,id,stars,score){
  if(!ts(path,id).done){
    STATE.progress[path][id]={done:true,stars,score};
    STATE.progress.coins[path]=(STATE.progress.coins[path]||0)+(stars*10);
    save();
  }
}
function doneCount(path){return COURSE.paths[path].topics.filter(t=>ts(path,t).done).length;}
function unlocked(path,id){
  const topics=COURSE.paths[path].topics;
  const i=topics.indexOf(id);
  return i===0||ts(path,topics[i-1]).done;
}

// ═══════════════ NAV ═══════════════
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById('screen-'+id);
  if(el){el.classList.add('active');window.scrollTo(0,0);}
}
function goHome(){showScreen('home');renderHome();}
function goRoadmap(path){STATE.path=path;showScreen('roadmap');renderRoadmap();}
function goLesson(path,id){
  if(!unlocked(path,id))return;
  STATE.path=path;STATE.topic=id;STATE.phase='cards';
  STATE.cardIdx=0;STATE.quizIdx=0;STATE.quizScore=0;STATE.quizAnswered=false;
  showScreen('lesson');renderLesson();
}

// ═══════════════ HOME ═══════════════
function renderHome(){
  ['remi','micah'].forEach(p=>{
    const total=COURSE.paths[p].topics.length;
    const done=doneCount(p);
    const pct=Math.round(done/total*100);
    const card=document.getElementById('home-'+p);
    if(!card)return;
    card.querySelector('.path-progress-fill').style.width=pct+'%';
    card.querySelector('.path-progress-label').textContent=done+' of '+total+' topics done';
    card.querySelector('.coins-val').textContent=STATE.progress.coins[p]||0;
  });
}

// ═══════════════ ROADMAP ═══════════════
function renderRoadmap(){
  const p=STATE.path,cfg=COURSE.paths[p];
  const done=doneCount(p),total=cfg.topics.length,coins=STATE.progress.coins[p]||0;
  document.getElementById('rm-title').textContent=cfg.emoji+' '+cfg.name+"'s Path";
  document.getElementById('rm-title').style.color=cfg.color;
  document.getElementById('rm-done').textContent=done+'/'+total;
  document.getElementById('rm-coins').textContent='🪙 '+coins;
  document.getElementById('rm-char').textContent=cfg.emoji;
  document.getElementById('hdr-coins').textContent=coins;
  const track=document.getElementById('rm-track');
  track.innerHTML='';
  cfg.topics.forEach((tid,i)=>{
    const t=COURSE.topics[tid],s=ts(p,tid),isUnlocked=unlocked(p,tid);
    const bubCls=s.done?'done':(isUnlocked&&i===done?'next':'locked-bub');
    const icon=s.done?'✅':(isUnlocked&&i===done?t.emoji:'🔒');
    let stars='';for(let x=0;x<3;x++)stars+=`<span class="star ${x<s.stars?'earned':''}">${x<s.stars?'⭐':'☆'}</span>`;
    const pills=s.done?`<span class="pill pill-done">✅ Complete</span>`:
      isUnlocked?`<span class="pill pill-cards">📚 Cards</span><span class="pill pill-quiz">🧩 Quiz</span><span class="pill pill-activity">🎯 Activity</span>`:
      `<span class="pill pill-locked">🔒 Complete previous topic first</span>`;
    const node=document.createElement('div');
    node.className='topic-node'+(isUnlocked?'':' locked');
    node.innerHTML=`
      <div class="node-bubble ${bubCls}">${icon}</div>
      <div class="node-card" style="${s.done?'border-color:'+t.color+';':isUnlocked&&!s.done?'border-color:rgba(255,255,255,.35);':''}">
        <div class="node-title" style="color:${t.color}">${t.emoji} ${t.title}</div>
        <div class="node-tagline">${t.tagline}</div>
        <div class="node-pills">${pills}</div>
        <div class="node-stars">${stars}</div>
      </div>`;
    if(isUnlocked)node.onclick=()=>goLesson(p,tid);
    track.appendChild(node);
  });
}

// ═══════════════ LESSON ═══════════════
function renderLesson(){
  const p=STATE.path,topic=COURSE.topics[STATE.topic],cfg=COURSE.paths[p];
  const cards=topic.cards,total=cards.length+topic.quiz.length+2;
  const cur=STATE.phase==='cards'?STATE.cardIdx:
    STATE.phase==='quiz'?cards.length+STATE.quizIdx:
    STATE.phase==='activity'?total-2:total-1;
  const pct=Math.round(cur/total*100);
  document.getElementById('lp-fill').style.width=pct+'%';
  document.getElementById('lp-label').textContent=cur+'/'+total;
  document.getElementById('hdr-coins2').textContent=STATE.progress.coins[p]||0;
  const main=document.getElementById('lesson-main');
  main.innerHTML='';
  if(STATE.phase==='cards')buildCards(main,topic,cfg);
  else if(STATE.phase==='quiz')buildQuiz(main,topic,cfg);
  else if(STATE.phase==='activity')buildActivity(main,topic,cfg);
  else if(STATE.phase==='tool')buildTool(main,topic,cfg);
  else buildComplete(main,topic,cfg,p);
}

// ── CARDS ──
function buildCards(main,topic,cfg){
  const card=topic.cards[STATE.cardIndex||STATE.cardIdx];
  const total=topic.cards.length;
  const labels={story:'📖 Story Time',concept:'💡 Key Concept',reallife:'🌍 Real Life',tip:'⚡ Smart Tip'};
  const d=document.createElement('div');
  d.innerHTML=`
    <div class="lcard ${card.type}">
      <span class="lcard-badge">${labels[card.type]||card.type}</span>
      <span class="lcard-icon">${card.icon}</span>
      <div class="lcard-title">${card.title}</div>
      <div class="lcard-body">${card.body}</div>
    </div>
    <div class="card-nav">
      <button class="btn btn-ghost" onclick="prevCard()" ${STATE.cardIdx===0?'disabled':''}>← Back</button>
      <div class="card-dots">${topic.cards.map((_,i)=>`<div class="card-dot ${i===STATE.cardIdx?'active':''}"></div>`).join('')}</div>
      <button class="btn" style="background:${topic.color};color:${isLight(topic.color)?'#000':'#fff'}" onclick="nextCard()">
        ${STATE.cardIdx<total-1?'Next →':'Quiz Time 🧩'}
      </button>
    </div>`;
  main.appendChild(d);
}
function isLight(hex){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return(r*299+g*587+b*114)/1000>128;}
function prevCard(){if(STATE.cardIdx>0){STATE.cardIdx--;renderLesson();}}
function nextCard(){
  const cards=COURSE.topics[STATE.topic].cards;
  if(STATE.cardIdx<cards.length-1){STATE.cardIdx++;renderLesson();}
  else{STATE.phase='quiz';STATE.quizIdx=0;STATE.quizAnswered=false;renderLesson();}
}

// ── QUIZ ──
function buildQuiz(main,topic,cfg){
  const q=topic.quiz[STATE.quizIdx];
  const d=document.createElement('div');
  d.innerHTML=`
    <div class="quiz-box">
      <span class="quiz-badge">🧩 Quiz Time!</span>
      <div class="quiz-counter">Question ${STATE.quizIdx+1} of ${topic.quiz.length}</div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts" id="qopts">
        ${q.options.map((o,i)=>`<button class="quiz-opt" id="qo${i}" onclick="answerQ(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}
      </div>
      <div class="quiz-explain" id="qexp"></div>
    </div>
    <div id="qnext"></div>`;
  main.appendChild(d);
}
function answerQ(chosen){
  if(STATE.quizAnswered)return;
  STATE.quizAnswered=true;
  const q=COURSE.topics[STATE.topic].quiz[STATE.quizIdx];
  const opts=document.querySelectorAll('.quiz-opt');
  opts.forEach(o=>o.disabled=true);
  const correct=chosen===q.correct;
  if(correct){opts[chosen].classList.add('correct');STATE.quizScore++;}
  else{opts[chosen].classList.add('wrong');opts[q.correct].classList.add('correct');}
  const exp=document.getElementById('qexp');
  exp.className='quiz-explain '+(correct?'correct':'wrong');
  exp.textContent=(correct?'✅ Correct! ':'❌ Not quite. ')+q.explain;
  const isLast=STATE.quizIdx>=COURSE.topics[STATE.topic].quiz.length-1;
  document.getElementById('qnext').innerHTML=
    `<button class="btn btn-green" style="margin-top:10px" onclick="nextQ()">${isLast?'See Results 🎯':'Next Question →'}</button>`;
}
function nextQ(){
  const topic=COURSE.topics[STATE.topic];
  STATE.quizAnswered=false;
  if(STATE.quizIdx<topic.quiz.length-1){STATE.quizIdx++;renderLesson();}
  else{
    STATE.phase='activity';renderLesson();
    // show score popup
    const score=STATE.quizScore,total=topic.quiz.length,pct=Math.round(score/total*100);
    document.getElementById('sp-emoji').textContent=pct===100?'🏆':pct>=67?'🌟':'📚';
    document.getElementById('sp-title').textContent=score+'/'+total+' correct!';
    document.getElementById('sp-body').textContent=pct===100?'Perfect score — you\'re a money genius!':pct>=67?'Great work! You really know your stuff!':'Good try! Review the cards and you\'ll nail it next time.';
    const ov=document.getElementById('score-popup-overlay');
    ov.classList.add('show');
    setTimeout(()=>ov.classList.remove('show'),2800);
  }
}

// ── ACTIVITY ──
function buildActivity(main,topic,cfg){
  const act=topic.activity;
  const d=document.createElement('div');
  d.innerHTML=`
    <div class="activity-box">
      <span class="activity-badge">🎯 Real Life Activity</span>
      <div class="activity-title">${act.title}</div>
      <div class="activity-steps">
        ${act.steps.map((s,i)=>`<div class="step-row"><div class="step-num">${i+1}</div><div class="step-txt">${s}</div></div>`).join('')}
      </div>
      <div class="activity-challenge">🏆 Challenge: ${act.challenge}</div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-ghost" onclick="STATE.phase='quiz';STATE.quizIdx=0;STATE.quizAnswered=false;renderLesson()">← Redo Quiz</button>
      <button class="btn btn-green" onclick="STATE.phase='tool';renderLesson()">Try the Calculator 🔢</button>
    </div>`;
  // Japan special for investing topic in Micah path
  if(STATE.topic==='investing'&&STATE.path==='micah'){
    const japanDiv=document.createElement('div');
    japanDiv.innerHTML=buildJapanSection();
    main.appendChild(d);
    main.appendChild(japanDiv);
    return;
  }
  main.appendChild(d);
}

function buildJapanSection(){
  return `
    <div class="japan-box" style="margin-top:16px;">
      <div class="japan-header">
        <span class="japan-flag">🇯🇵</span>
        <div class="japan-title">Micah's Japan Adventure Fund 🚀</div>
      </div>
      <p style="font-size:14px;color:rgba(255,255,255,.8);font-weight:700;margin-bottom:14px;">
        Japan is one of the most amazing places on Earth — and it's totally achievable if you save and invest! Here's what a 10-day family trip to Japan actually costs:
      </p>
      <div class="japan-costs">
        <div class="japan-cost-card"><span class="japan-cost-icon">✈️</span><div class="japan-cost-name">Flights (return, per person)</div><div class="japan-cost-val">~£700–£900</div></div>
        <div class="japan-cost-card"><span class="japan-cost-icon">🏨</span><div class="japan-cost-name">Hotel (10 nights, family room)</div><div class="japan-cost-val">~£1,200–£1,800</div></div>
        <div class="japan-cost-card"><span class="japan-cost-icon">🍣</span><div class="japan-cost-name">Food (per person, 10 days)</div><div class="japan-cost-val">~£300–£500</div></div>
        <div class="japan-cost-card"><span class="japan-cost-icon">🚄</span><div class="japan-cost-name">Bullet train pass (7 days)</div><div class="japan-cost-val">~£260 per person</div></div>
        <div class="japan-cost-card"><span class="japan-cost-icon">🎡</span><div class="japan-cost-name">Activities & theme parks</div><div class="japan-cost-val">~£400 total</div></div>
        <div class="japan-cost-card"><span class="japan-cost-icon">🛍️</span><div class="japan-cost-name">Shopping & souvenirs</div><div class="japan-cost-val">~£200–£400</div></div>
      </div>
      <div style="background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.3);border-radius:12px;padding:12px 16px;margin-bottom:14px;">
        <div style="font-size:13px;font-weight:900;color:var(--yellow);margin-bottom:4px;">🧮 Total for a family of 4: approximately £8,000–£11,000</div>
        <div style="font-size:13px;color:rgba(255,255,255,.75);font-weight:700;">For Micah's share: save around £1,500–£2,000</div>
      </div>
      <div style="font-family:'Fredoka One',cursive;font-size:17px;color:var(--yellow);margin-bottom:12px;">💡 Micah's Japan Savings Plan</div>
      <div class="tool-row"><label>Micah saves per month</label><input type="range" min="5" max="100" value="30" id="jp1" oninput="calcJapan()"><span class="tool-val" id="jp1v">£30</span></div>
      <div class="tool-row"><label>Growth rate (%)</label><input type="range" min="0" max="10" value="5" id="jp2" oninput="calcJapan()"><span class="tool-val" id="jp2v">5%</span></div>
      <div class="tool-result">
        <div class="tool-result-big" id="jp-result">£389</div>
        <div class="tool-result-label" id="jp-label">saved in 12 months</div>
        <div class="tool-result-sub" id="jp-sub">Keep going — Japan is closer than you think! 🗻</div>
      </div>
    </div>`;
}

function calcJapan(){
  const mo=+document.getElementById('jp1').value;
  const rate=+document.getElementById('jp2').value/100/12;
  document.getElementById('jp1v').textContent='£'+mo;
  document.getElementById('jp2v').textContent=(+document.getElementById('jp2').value)+'%';
  // Find months to reach £2000
  let bal=0,months=0;
  while(bal<2000&&months<240){bal=bal*(1+rate)+mo;months++;}
  const yrs=Math.floor(months/12),mos=months%12;
  const timeStr=yrs>0?(yrs+'yr '+(mos>0?mos+'mo':'')):mos+'mo';
  // What they'd have in 12 months
  let bal12=0;
  for(let i=0;i<12;i++)bal12=bal12*(1+(+document.getElementById('jp2').value/100/12))+mo;
  document.getElementById('jp-result').textContent='£'+Math.round(bal12).toLocaleString();
  document.getElementById('jp-label').textContent='saved in 12 months with '+document.getElementById('jp2').value+'% growth';
  document.getElementById('jp-sub').textContent=months<240?'You\'ll have enough for your share in '+timeStr+'! 🗻✈️ Japan, here you come!':'Increase your monthly saving to reach Japan sooner!';
}

// ── TOOL ──
function buildTool(main,topic,cfg){
  const d=document.createElement('div');
  d.className='tool-box';
  const t=topic.tool?topic.tool.type:null;
  let html='';
  if(t==='savings_goal'){html=`
    <div class="tool-title">🎯 My Personal Savings Goal</div>
    <div class="goal-label-row"><label>What am I saving for?</label><input type="text" id="goal-name" placeholder="e.g. LEGO castle, new book, trip..." oninput="calcSave()"></div>
    <div class="tool-row"><label>It costs</label><input type="range" min="5" max="300" value="40" step="5" id="s1" oninput="calcSave()"><span class="tool-val" id="s1v">£40</span></div>
    <div class="tool-row"><label>I save per week</label><input type="range" min="1" max="25" value="5" id="s2" oninput="calcSave()"><span class="tool-val" id="s2v">£5</span></div>
    <div class="tool-result"><div class="tool-result-big" id="sr1">8 weeks</div><div class="tool-result-label" id="sr-goal">to reach my goal</div><div class="tool-result-sub" id="sr2">Keep saving! 💪</div></div>`;
  }else if(t==='giving_tracker'){html=`
    <div class="tool-title">❤️ My Giving Impact</div>
    <div class="tool-row"><label>Weekly pocket money</label><input type="range" min="1" max="30" value="5" id="g1" oninput="calcGiving()"><span class="tool-val" id="g1v">£5</span></div>
    <div class="tool-row"><label>% I give</label><input type="range" min="1" max="30" value="10" id="g2" oninput="calcGiving()"><span class="tool-val" id="g2v">10%</span></div>
    <div class="tool-result"><div class="tool-result-big" id="gr1">£26</div><div class="tool-result-label">given per year</div><div class="tool-result-sub" id="gr2">That's powerful! 🌍</div></div>`;
  }else if(t==='value_compare'){html=`
    <div class="tool-title">⚖️ Value for Money Checker</div>
    <div class="tool-row"><label>Item price (£)</label><input type="range" min="1" max="150" value="20" id="v1" oninput="calcValue()"><span class="tool-val" id="v1v">£20</span></div>
    <div class="tool-row"><label>Times I'll use it</label><input type="range" min="1" max="200" value="20" id="v2" oninput="calcValue()"><span class="tool-val" id="v2v">20×</span></div>
    <div class="tool-result"><div class="tool-result-big" id="vr1">£1.00</div><div class="tool-result-label">cost per use</div><div class="tool-result-sub" id="vr2">Is that good value?</div></div>`;
  }else if(t==='profit_calc'){html=`
    <div class="tool-title">💼 Business Profit Calculator</div>
    <div class="tool-row"><label>Price per item (p)</label><input type="range" min="10" max="500" value="150" step="10" id="p1" oninput="calcProfit()"><span class="tool-val" id="p1v">150p</span></div>
    <div class="tool-row"><label>Items sold</label><input type="range" min="1" max="100" value="20" id="p2" oninput="calcProfit()"><span class="tool-val" id="p2v">20</span></div>
    <div class="tool-row"><label>Total costs (£)</label><input type="range" min="1" max="50" value="5" id="p3" oninput="calcProfit()"><span class="tool-val" id="p3v">£5</span></div>
    <div class="tool-result"><div class="tool-result-big" id="ppr1">£25.00</div><div class="tool-result-label">Profit</div><div class="tool-result-sub" id="ppr2">Revenue: £30 — Costs: £5</div></div>`;
  }else if(t==='sp500_calc'){html=buildSP500Tool();
  }else if(t==='compound_calc'){html=`
    <div class="tool-title">📈 Compound Growth Calculator</div>
    <div class="tool-row"><label>Starting amount</label><input type="range" min="10" max="1000" value="100" step="10" id="c1" oninput="calcCompound()"><span class="tool-val" id="c1v">£100</span></div>
    <div class="tool-row"><label>Annual growth (%)</label><input type="range" min="1" max="15" value="7" id="c2" oninput="calcCompound()"><span class="tool-val" id="c2v">7%</span></div>
    <div class="tool-row"><label>Years</label><input type="range" min="1" max="50" value="20" id="c3" oninput="calcCompound()"><span class="tool-val" id="c3v">20 yrs</span></div>
    <div class="tool-result"><div class="tool-result-big" id="ccr1">£387</div><div class="tool-result-label">Final value</div><div class="tool-result-sub" id="ccr2">You earned £287 in growth!</div></div>`;
  }else if(t==='apr_calc'){html=`
    <div class="tool-title">💳 APR Cost Calculator</div>
    <div class="tool-row"><label>Amount borrowed</label><input type="range" min="100" max="10000" value="1000" step="100" id="a1" oninput="calcAPR()"><span class="tool-val" id="a1v">£1,000</span></div>
    <div class="tool-row"><label>APR (%)</label><input type="range" min="1" max="100" value="20" id="a2" oninput="calcAPR()"><span class="tool-val" id="a2v">20%</span></div>
    <div class="tool-result"><div class="tool-result-big" id="apr1">£200</div><div class="tool-result-label">Interest in 1 year</div><div class="tool-result-sub" id="apr2">Total repayment: £1,200</div></div>`;
  }else if(t==='tax_calc'){html=`
    <div class="tool-title">🏛️ Tax Calculator</div>
    <div class="tool-row"><label>Earnings (£)</label><input type="range" min="100" max="5000" value="1000" step="100" id="t1" oninput="calcTax()"><span class="tool-val" id="t1v">£1,000</span></div>
    <div class="tool-row"><label>Tax rate (%)</label><input type="range" min="5" max="45" value="20" id="t2" oninput="calcTax()"><span class="tool-val" id="t2v">20%</span></div>
    <div class="tool-result"><div class="tool-result-big" id="txr1">£800</div><div class="tool-result-label">You keep</div><div class="tool-result-sub" id="txr2">£200 funds NHS, schools, roads</div></div>`;
  }else if(t==='mortgage_calc'){html=`
    <div class="tool-title">🏠 Mortgage Calculator</div>
    <div class="tool-row"><label>House price</label><input type="range" min="100000" max="1000000" value="300000" step="10000" id="m1" oninput="calcMortgage()"><span class="tool-val" id="m1v">£300k</span></div>
    <div class="tool-row"><label>Deposit (%)</label><input type="range" min="5" max="50" value="20" id="m2" oninput="calcMortgage()"><span class="tool-val" id="m2v">20%</span></div>
    <div class="tool-row"><label>Interest rate (%)</label><input type="range" min="1" max="8" value="4" step="0.5" id="m3" oninput="calcMortgage()"><span class="tool-val" id="m3v">4%</span></div>
    <div class="tool-row"><label>Term (years)</label><input type="range" min="10" max="35" value="25" id="m4" oninput="calcMortgage()"><span class="tool-val" id="m4v">25 yrs</span></div>
    <div class="tool-result"><div class="tool-result-big" id="mgr1">£1,265/mo</div><div class="tool-result-label">Monthly payment</div><div class="tool-result-sub" id="mgr2">Total repaid: £379,500</div></div>`;
  }else if(t==='credit_simulator'){html=`
    <div class="tool-title">⭐ Credit Score Simulator</div>
    <div class="tool-row"><label>On-time payments (months)</label><input type="range" min="0" max="60" value="24" id="cs1" oninput="calcCredit()"><span class="tool-val" id="cs1v">24</span></div>
    <div class="tool-row"><label>Missed payments</label><input type="range" min="0" max="10" value="0" id="cs2" oninput="calcCredit()"><span class="tool-val" id="cs2v">0</span></div>
    <div class="tool-row"><label>Credit usage (%)</label><input type="range" min="0" max="100" value="25" id="cs3" oninput="calcCredit()"><span class="tool-val" id="cs3v">25%</span></div>
    <div class="tool-result"><div class="tool-result-big" id="csr1">820</div><div class="tool-result-label">Estimated score</div><div class="tool-result-sub" id="csr2">Good — competitive rates available</div></div>`;
  }else if(t==='pension_calc'){html=`
    <div class="tool-title">🌅 Pension Calculator</div>
    <div class="tool-row"><label>Monthly saving</label><input type="range" min="20" max="1000" value="200" step="10" id="pe1" oninput="calcPension()"><span class="tool-val" id="pe1v">£200</span></div>
    <div class="tool-row"><label>Starting age</label><input type="range" min="18" max="55" value="25" id="pe2" oninput="calcPension()"><span class="tool-val" id="pe2v">25</span></div>
    <div class="tool-row"><label>Annual growth (%)</label><input type="range" min="3" max="10" value="7" id="pe3" oninput="calcPension()"><span class="tool-val" id="pe3v">7%</span></div>
    <div class="tool-result"><div class="tool-result-big" id="per1">£524k</div><div class="tool-result-label">Pension pot at 65</div><div class="tool-result-sub" id="per2">You invested £96k — growth did the rest!</div></div>`;
  }else if(t==='inflation_calc'){html=`
    <div class="tool-title">🎈 Inflation Calculator</div>
    <div class="tool-row"><label>Amount today</label><input type="range" min="10" max="1000" value="100" step="10" id="inf1" oninput="calcInflation()"><span class="tool-val" id="inf1v">£100</span></div>
    <div class="tool-row"><label>Inflation rate (%)</label><input type="range" min="1" max="10" value="3" id="inf2" oninput="calcInflation()"><span class="tool-val" id="inf2v">3%</span></div>
    <div class="tool-row"><label>Years ahead</label><input type="range" min="1" max="50" value="20" id="inf3" oninput="calcInflation()"><span class="tool-val" id="inf3v">20 yrs</span></div>
    <div class="tool-result"><div class="tool-result-big" id="infr1">£55</div><div class="tool-result-label">Real purchasing power</div><div class="tool-result-sub" id="infr2">Your £100 buys only £55 of today's goods!</div></div>`;
  }
  d.innerHTML=html;
  main.appendChild(d);
  // complete button
  const btns=document.createElement('div');
  btns.style.cssText='display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;';
  btns.innerHTML=`<button class="btn btn-ghost" onclick="STATE.phase='activity';renderLesson()">← Activity</button>
    <button class="btn btn-green" onclick="completeLesson()">✅ Complete Lesson!</button>`;
  main.appendChild(btns);
  // init
  const inits={savings_goal:'calcSave',giving_tracker:'calcGiving',value_compare:'calcValue',profit_calc:'calcProfit',sp500_calc:'calcSP500',compound_calc:'calcCompound',apr_calc:'calcAPR',tax_calc:'calcTax',mortgage_calc:'calcMortgage',credit_simulator:'calcCredit',pension_calc:'calcPension',inflation_calc:'calcInflation'};
  if(inits[t]&&window[inits[t]])window[inits[t]]();
}

// ── CALCULATORS ──
function calcSave(){
  const goal=+document.getElementById('s1').value,rate=+document.getElementById('s2').value;
  document.getElementById('s1v').textContent='£'+goal;
  document.getElementById('s2v').textContent='£'+rate;
  const weeks=Math.ceil(goal/rate);
  document.getElementById('sr1').textContent=weeks+' weeks';
  const name=document.getElementById('goal-name')&&document.getElementById('goal-name').value;
  document.getElementById('sr-goal').textContent='to reach your goal'+(name?' ('+name+')':'');
  const d=new Date();d.setDate(d.getDate()+weeks*7);
  document.getElementById('sr2').textContent='You\'ll get there by '+d.toLocaleDateString('en-GB',{month:'long',year:'numeric'})+'! 🎉';
}
function calcGiving(){
  const pm=+document.getElementById('g1').value,pct=+document.getElementById('g2').value;
  document.getElementById('g1v').textContent='£'+pm;
  document.getElementById('g2v').textContent=pct+'%';
  const annual=Math.round(pm*(pct/100)*52);
  document.getElementById('gr1').textContent='£'+annual;
  document.getElementById('gr2').textContent=annual>=100?'That could buy school supplies for a whole class! 📚':annual>=50?'That could feed a family for a month! 🍽️':'Every penny creates a ripple! 🌊';
}
function calcValue(){
  const price=+document.getElementById('v1').value,uses=+document.getElementById('v2').value;
  document.getElementById('v1v').textContent='£'+price;
  document.getElementById('v2v').textContent=uses+'×';
  const cpu=(price/uses).toFixed(2);
  document.getElementById('vr1').textContent='£'+cpu+' per use';
  document.getElementById('vr2').textContent=+cpu<0.5?'🌟 Excellent value!':+cpu<1.5?'👍 Good value':+cpu<3?'🤔 Think carefully':'❌ Poor value — look for alternatives';
}
function calcProfit(){
  const price=+document.getElementById('p1').value,sold=+document.getElementById('p2').value,cost=+document.getElementById('p3').value;
  document.getElementById('p1v').textContent=price+'p';
  document.getElementById('p2v').textContent=sold;
  document.getElementById('p3v').textContent='£'+cost;
  const rev=(price*sold)/100,profit=rev-cost;
  document.getElementById('ppr1').textContent='£'+profit.toFixed(2);
  document.getElementById('ppr2').textContent='Revenue: £'+rev.toFixed(2)+' — Costs: £'+cost;
}
function calcCompound(){
  const start=+document.getElementById('c1').value,rate=+document.getElementById('c2').value/100,years=+document.getElementById('c3').value;
  document.getElementById('c1v').textContent='£'+start;
  document.getElementById('c2v').textContent=(+document.getElementById('c2').value)+'%';
  document.getElementById('c3v').textContent=years+' yrs';
  const result=Math.round(start*Math.pow(1+rate,years));
  document.getElementById('ccr1').textContent='£'+result.toLocaleString();
  document.getElementById('ccr2').textContent='You earned £'+(result-start).toLocaleString()+' in growth on £'+start+'!';
}
function calcAPR(){
  const amt=+document.getElementById('a1').value,rate=+document.getElementById('a2').value;
  document.getElementById('a1v').textContent='£'+amt.toLocaleString();
  document.getElementById('a2v').textContent=rate+'%';
  const interest=Math.round(amt*rate/100);
  document.getElementById('apr1').textContent='£'+interest.toLocaleString();
  document.getElementById('apr2').textContent='Total repayment: £'+(amt+interest).toLocaleString();
}
function calcTax(){
  const earn=+document.getElementById('t1').value,rate=+document.getElementById('t2').value;
  document.getElementById('t1v').textContent='£'+earn.toLocaleString();
  document.getElementById('t2v').textContent=rate+'%';
  const tax=Math.round(earn*rate/100);
  document.getElementById('txr1').textContent='£'+(earn-tax).toLocaleString();
  document.getElementById('txr2').textContent='£'+tax+' funds NHS, schools, roads';
}
function calcMortgage(){
  const price=+document.getElementById('m1').value,dep=+document.getElementById('m2').value/100;
  const ar=+document.getElementById('m3').value/100,years=+document.getElementById('m4').value;
  document.getElementById('m1v').textContent='£'+Math.round(price/1000)+'k';
  document.getElementById('m2v').textContent=(+document.getElementById('m2').value)+'%';
  document.getElementById('m3v').textContent=(+document.getElementById('m3').value)+'%';
  document.getElementById('m4v').textContent=years+' yrs';
  const loan=price*(1-dep),r=ar/12,n=years*12;
  const mo=r===0?loan/n:loan*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  const total=mo*n;
  document.getElementById('mgr1').textContent='£'+Math.round(mo).toLocaleString()+'/mo';
  document.getElementById('mgr2').textContent='Total repaid: £'+Math.round(total).toLocaleString()+' (£'+Math.round(total-loan).toLocaleString()+' interest)';
}
function calcCredit(){
  const on=+document.getElementById('cs1').value,miss=+document.getElementById('cs2').value,util=+document.getElementById('cs3').value;
  document.getElementById('cs1v').textContent=on;document.getElementById('cs2v').textContent=miss;document.getElementById('cs3v').textContent=util+'%';
  let score=500+(on*6)-(miss*80)-Math.max(0,(util-30)*3);
  score=Math.min(999,Math.max(100,Math.round(score)));
  document.getElementById('csr1').textContent=score;
  document.getElementById('csr2').textContent=score>=881?'⭐⭐⭐⭐⭐ Excellent — best rates!':score>=721?'⭐⭐⭐⭐ Good — competitive rates':score>=561?'⭐⭐⭐ Fair — needs improvement':'⭐⭐ Poor — significant work needed';
}
function calcPension(){
  const contrib=+document.getElementById('pe1').value,age=+document.getElementById('pe2').value,growth=+document.getElementById('pe3').value/100/12;
  const months=(65-age)*12;
  document.getElementById('pe1v').textContent='£'+contrib;
  document.getElementById('pe2v').textContent=age;
  document.getElementById('pe3v').textContent=(+document.getElementById('pe3').value)+'%';
  const result=growth===0?contrib*months:contrib*(Math.pow(1+growth,months)-1)/growth;
  const contributed=contrib*months;
  document.getElementById('per1').textContent='£'+Math.round(result/1000)+'k';
  document.getElementById('per2').textContent='You invested £'+Math.round(contributed/1000)+'k — growth added £'+Math.round((result-contributed)/1000)+'k!';
}
function calcInflation(){
  const amt=+document.getElementById('inf1').value,rate=+document.getElementById('inf2').value/100,years=+document.getElementById('inf3').value;
  document.getElementById('inf1v').textContent='£'+amt;
  document.getElementById('inf2v').textContent=(+document.getElementById('inf2').value)+'%';
  document.getElementById('inf3v').textContent=years+' yrs';
  const real=Math.round(amt/Math.pow(1+rate,years));
  document.getElementById('infr1').textContent='£'+real;
  document.getElementById('infr2').textContent='Your £'+amt+' buys only £'+real+' of today\'s goods in '+years+' years!';
}

// ── COMPLETE ──
function completeLesson(){
  const score=STATE.quizScore,total=COURSE.topics[STATE.topic].quiz.length;
  const stars=score===total?3:score>=Math.ceil(total/2)?2:1;
  setDone(STATE.path,STATE.topic,stars,score);
  STATE.phase='complete';renderLesson();launchConfetti();
}
function buildComplete(main,topic,cfg,path){
  const s=ts(path,topic.id);
  const coins=s.stars*10;
  const totalT=COURSE.paths[path].topics.length,doneC=doneCount(path);
  const allDone=doneC>=totalT;
  let starsHTML='';for(let i=0;i<3;i++)starsHTML+=i<s.stars?'⭐':'☆';
  const d=document.createElement('div');
  d.innerHTML=`
    <div class="complete-box">
      <span class="complete-emoji">${s.stars===3?'🏆':s.stars===2?'🌟':'🎉'}</span>
      <div class="complete-title" style="color:${topic.color}">Lesson Complete!</div>
      <div class="complete-stars">${starsHTML}</div>
      <div class="complete-coins">🪙 +${coins} coins!</div>
      <div class="complete-progress">${doneC} of ${totalT} topics done on ${cfg.name}'s path</div>
      ${allDone?`
        <div class="certificate">
          <div class="cert-title">🎓 Certificate of Achievement</div>
          <div style="font-size:13px;color:rgba(255,215,0,.8);font-weight:700;margin:6px 0">This certifies that</div>
          <div class="cert-name">${cfg.name} Mortoo</div>
          <div class="cert-body">has completed the full Mortoo Money Academy ${cfg.name==='Remi'?'Explorer':'Champion'} Path and demonstrated outstanding real-world financial literacy skills.</div>
          <div class="cert-date">Completed ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</div>
        </div>`:''}
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-ghost" onclick="goRoadmap('${path}')">📍 Roadmap</button>
        ${doneC<totalT?`<button class="btn" style="background:${cfg.color};color:white" onclick="nextTopic()">Next Topic →</button>`:''}
        <button class="btn btn-ghost" onclick="goHome()">🏠 Home</button>
      </div>
    </div>`;
  main.appendChild(d);
}
function nextTopic(){
  const topics=COURSE.paths[STATE.path].topics,idx=topics.indexOf(STATE.topic);
  if(idx<topics.length-1)goLesson(STATE.path,topics[idx+1]);
}


// ── S&P 500 COMPOUND INTEREST SIMULATOR ──
function buildSP500Tool(){
  return `
    <div class="tool-title">📈 S&P 500 Compound Interest Machine</div>
    <div style="background:rgba(5,150,105,.15);border:1px solid rgba(5,150,105,.4);border-radius:14px;padding:12px 16px;margin-bottom:16px;font-size:13px;font-weight:700;color:rgba(255,255,255,.85);line-height:1.6;">
      The S&P 500 has grown at roughly <span style="color:#06D6A0;font-weight:900;">10% per year</span> on average since 1957 — through wars, crashes and pandemics. It always recovered. Drag the sliders and watch your future wealth grow! 🚀
    </div>
    <div class="tool-row"><label>My age now</label><input type="range" min="6" max="25" value="8" id="sp-age" oninput="calcSP500()"><span class="tool-val" id="sp-age-v">8</span></div>
    <div class="tool-row"><label>Monthly investment (£)</label><input type="range" min="5" max="500" value="50" step="5" id="sp-mo" oninput="calcSP500()"><span class="tool-val" id="sp-mo-v">£50</span></div>
    <div class="tool-row"><label>Annual growth (%)</label><input type="range" min="5" max="12" value="10" step="0.5" id="sp-rate" oninput="calcSP500()"><span class="tool-val" id="sp-rate-v">10%</span></div>

    <div id="sp-milestone-row" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:14px 0;"></div>

    <div style="background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.35);border-radius:14px;padding:16px;margin-bottom:14px;">
      <div style="font-family:'Fredoka One',cursive;font-size:15px;color:var(--yellow);margin-bottom:10px;">📊 Your growth year by year</div>
      <canvas id="sp-chart" height="140" style="width:100%;display:block;border-radius:8px;"></canvas>
    </div>

    <div id="sp-wow" style="background:linear-gradient(135deg,rgba(6,214,160,.2),rgba(0,180,216,.15));border:1px solid rgba(6,214,160,.4);border-radius:14px;padding:16px;text-align:center;">
      <div style="font-size:13px;color:rgba(255,255,255,.7);font-weight:700;margin-bottom:4px;">Total invested (your money)</div>
      <div style="font-size:22px;font-weight:900;color:rgba(255,255,255,.9);margin-bottom:8px;" id="sp-invested">£4,800</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);font-weight:700;margin-bottom:4px;">Growth added by S&P 500</div>
      <div style="font-size:22px;font-weight:900;color:#06D6A0;margin-bottom:8px;" id="sp-growth">£21,200</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);font-weight:700;margin-bottom:4px;">Total portfolio value at 65</div>
      <div style="font-family:'Fredoka One',cursive;font-size:38px;color:var(--yellow);text-shadow:0 0 20px rgba(255,215,0,.5);" id="sp-total">£26,000</div>
    </div>`;
}

function calcSP500(){
  const age=+document.getElementById('sp-age').value;
  const mo=+document.getElementById('sp-mo').value;
  const annRate=+document.getElementById('sp-rate').value/100;
  const moRate=annRate/12;
  document.getElementById('sp-age-v').textContent=age;
  document.getElementById('sp-mo-v').textContent='£'+mo;
  document.getElementById('sp-rate-v').textContent=(+document.getElementById('sp-rate').value)+'%';

  // Build year-by-year data from now to 65
  const endAge=65;
  const years=endAge-age;
  const yearlyData=[];
  let bal=0;
  for(let y=1;y<=years;y++){
    for(let m=0;m<12;m++) bal=bal*(1+moRate)+mo;
    yearlyData.push({age:age+y,bal:Math.round(bal)});
  }
  const totalInvested=mo*12*years;
  const finalBal=yearlyData[yearlyData.length-1].bal;
  const totalGrowth=finalBal-totalInvested;

  // Milestones
  const milestones=[
    {age:18,label:'Age 18'},
    {age:25,label:'Age 25'},
    {age:35,label:'Age 35'},
    {age:45,label:'Age 45'},
    {age:55,label:'Age 55'},
    {age:65,label:'Age 65 🌅'}
  ].filter(m=>m.age>age);

  const msRow=document.getElementById('sp-milestone-row');
  if(msRow){
    msRow.innerHTML=milestones.map(ms=>{
      const entry=yearlyData.find(d=>d.age===ms.age)||yearlyData[yearlyData.length-1];
      const val=entry.bal>=1000000?'£'+Math.round(entry.bal/100000)/10+'M':entry.bal>=1000?'£'+Math.round(entry.bal/1000)+'k':'£'+entry.bal.toLocaleString();
      const isHalf=entry.bal>=500000;
      return `<div style="background:${isHalf?'rgba(255,215,0,.18)':'rgba(255,255,255,.07)'};border:1px solid ${isHalf?'rgba(255,215,0,.4)':'rgba(255,255,255,.12)'};border-radius:12px;padding:10px 8px;text-align:center;">
        <div style="font-size:11px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:4px;">${ms.label}</div>
        <div style="font-size:${entry.bal>=1000000?'16':'18'}px;font-weight:900;color:${isHalf?'var(--yellow)':'#06D6A0'}">${val}</div>
      </div>`;
    }).join('');
  }

  // Update totals
  const fmtBig=v=>v>=1000000?'£'+Math.round(v/100000)/10+'M':'£'+Math.round(v/1000)+'k';
  const inv=document.getElementById('sp-invested');
  const gr=document.getElementById('sp-growth');
  const tot=document.getElementById('sp-total');
  if(inv)inv.textContent='£'+Math.round(totalInvested).toLocaleString();
  if(gr)gr.textContent='+£'+Math.round(totalGrowth).toLocaleString();
  if(tot)tot.textContent=fmtBig(finalBal);

  // Draw chart
  const canvas=document.getElementById('sp-chart');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=canvas.offsetWidth||600;canvas.width=W;const H=140;canvas.height=H;
  ctx.clearRect(0,0,W,H);
  const maxVal=finalBal;
  const pts=yearlyData.filter((_,i)=>i%Math.max(1,Math.floor(yearlyData.length/40))===0);
  if(pts[pts.length-1]!==yearlyData[yearlyData.length-1])pts.push(yearlyData[yearlyData.length-1]);

  // invested line data
  const invPts=pts.map((p,i)=>{
    const idx=yearlyData.indexOf(p);
    return mo*12*(idx+1);
  });

  const pad=8;
  function xPos(i){return pad+(i/(pts.length-1))*(W-pad*2);}
  function yPos(v){return H-pad-(v/maxVal)*(H-pad*2);}

  // Fill area under growth curve
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(6,214,160,0.45)');
  grad.addColorStop(1,'rgba(6,214,160,0.02)');
  ctx.beginPath();
  ctx.moveTo(xPos(0),H-pad);
  pts.forEach((p,i)=>ctx.lineTo(xPos(i),yPos(p.bal)));
  ctx.lineTo(xPos(pts.length-1),H-pad);
  ctx.closePath();
  ctx.fillStyle=grad;ctx.fill();

  // Invested fill
  const grad2=ctx.createLinearGradient(0,0,0,H);
  grad2.addColorStop(0,'rgba(255,215,0,0.25)');
  grad2.addColorStop(1,'rgba(255,215,0,0.03)');
  ctx.beginPath();
  ctx.moveTo(xPos(0),H-pad);
  invPts.forEach((v,i)=>ctx.lineTo(xPos(i),yPos(v)));
  ctx.lineTo(xPos(invPts.length-1),H-pad);
  ctx.closePath();
  ctx.fillStyle=grad2;ctx.fill();

  // Growth line
  ctx.beginPath();
  pts.forEach((p,i)=>{i===0?ctx.moveTo(xPos(i),yPos(p.bal)):ctx.lineTo(xPos(i),yPos(p.bal));});
  ctx.strokeStyle='#06D6A0';ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.stroke();

  // Invested line
  ctx.beginPath();
  invPts.forEach((v,i)=>{i===0?ctx.moveTo(xPos(i),yPos(v)):ctx.lineTo(xPos(i),yPos(v));});
  ctx.strokeStyle='rgba(255,215,0,0.7)';ctx.lineWidth=1.5;ctx.setLineDash([4,3]);ctx.stroke();
  ctx.setLineDash([]);

  // £500k line
  if(maxVal>500000){
    const y500=yPos(500000);
    ctx.beginPath();ctx.moveTo(pad,y500);ctx.lineTo(W-pad,y500);
    ctx.strokeStyle='rgba(255,100,100,0.5)';ctx.lineWidth=1;ctx.setLineDash([3,4]);ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='rgba(255,100,100,0.8)';ctx.font='bold 10px Nunito,sans-serif';ctx.textAlign='left';
    ctx.fillText('£500k',pad+2,y500-3);
  }

  // Age labels at bottom
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='10px Nunito,sans-serif';ctx.textAlign='center';
  const labelAges=[18,25,35,45,55,65].filter(a=>a>age&&a<=endAge);
  labelAges.forEach(la=>{
    const idx=pts.findIndex(p=>p.age>=la);
    if(idx>=0){ctx.fillText(''+la,xPos(idx),H-1);}
  });

  // Legend
  ctx.textAlign='left';ctx.font='bold 10px Nunito,sans-serif';
  ctx.fillStyle='#06D6A0';ctx.fillRect(W-90,8,10,10);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fillText('Portfolio',W-76,17);
  ctx.fillStyle='rgba(255,215,0,.7)';ctx.fillRect(W-90,24,10,10);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fillText('Invested',W-76,33);
}

// ── CONFETTI ──
function launchConfetti(){
  const canvas=document.getElementById('confetti-canvas');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.display='block';
  const pieces=[];
  const colors=['#FFD700','#06D6A0','#4361EE','#FF006E','#8338EC','#FF6B35','#00B4D8','#FFE566'];
  for(let i=0;i<220;i++){
    pieces.push({x:Math.random()*canvas.width,y:-20-Math.random()*200,r:4+Math.random()*8,
      c:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:2+Math.random()*4,
      rot:Math.random()*360,rotV:(Math.random()-.5)*8,shape:Math.random()>.5?'rect':'circle'});
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=0.05;p.rot+=p.rotV;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.c;
      if(p.shape==='rect')ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.5);
      else{ctx.beginPath();ctx.arc(0,0,p.r/2,0,Math.PI*2);ctx.fill();}
      ctx.restore();});
    frame++;
    if(frame<200)requestAnimationFrame(draw);
    else{ctx.clearRect(0,0,canvas.width,canvas.height);canvas.style.display='none';}
  }
  draw();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded',()=>{renderHome();});
