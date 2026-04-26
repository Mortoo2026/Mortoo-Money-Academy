[README.md](https://github.com/user-attachments/files/27103482/README.md)
# 🏦 Mortoo Money Academy

A fun, interactive financial literacy course built for **Remi (age 6)** and **Micah (age 8)**.

## 📚 What's Inside
[index.html](https://github.com/user-attachments/files/27103486/index.html)
[style.css](https://github.com/user-attachments/files/27103485/style.css)
[app.js](https://github.com/user-attachments/files/27103484/app.js)
[course.js](https://github.com/user-attachments/files/27103483/course.js)

### Remi's Explorer Path (6 topics)
1. 🏦 Saving Money
2. ❤️ Giving & Generosity
3. 🛒 Spending Wisely
4. 💡 Entrepreneurship
5. 🏛️ Taxes
6. 🎈 Inflation

### Micah's Champion Path (11 topics)
1. 🏦 Saving Money
2. ❤️ Giving & Generosity
3. 🛒 Spending Wisely
4. 💡 Entrepreneurship
5. 📈 Investing & Compound Interest
6. 💳 Interest & APR
7. 🏛️ Taxes
8. 🏠 Mortgages
9. ⭐ Credit Score
10. 🌅 Pension
11. 🎈 Inflation

### Each topic includes:
- 📖 **Story cards** — engaging, real-life stories
- 💡 **Concept cards** — clear explanations
- 🌍 **Real life cards** — connections to Mortoo Homes, FSE acquisition, CustomerGrid, family life
- 🧩 **3-question quiz** — with instant feedback and explanations
- 🎯 **Hands-on activity** — something to do this week
- 🔢 **Interactive calculator** — play with real numbers

### Reward system:
- 🔒 Topics unlock sequentially — complete one to unlock the next
- ⭐ Earn 1–3 stars based on quiz score
- 🪙 Earn coins (10× stars) for each completed topic
- 🎊 Confetti celebration on lesson completion
- 🏆 Certificate of Achievement on full path completion
- 💾 Progress saves automatically in the browser

---

## 🚀 Quick Setup on GitHub Pages

### Step 1: Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create a new repository
1. Click the **+** button → **New repository**
2. Name it: `mortoo-money-academy`
3. Set to **Public**
4. Click **Create repository**

### Step 3: Upload the files
You have two options:

#### Option A — Drag and drop (easiest)
1. Open your new repository on GitHub
2. Click **uploading an existing file**
3. Drag the entire `mortoo-money-academy` folder contents:
   - `index.html`
   - `css/style.css`
   - `js/app.js`
   - `data/course.js`
   - `README.md`
4. Click **Commit changes**

> ⚠️ Important: Upload the FILES, not the folder itself. The folder structure must be maintained (css/, js/, data/ subfolders).

#### Option B — GitHub Desktop (recommended for ongoing edits)
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your new repository
3. Copy all files into the cloned folder
4. Commit and push

### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**

### Step 5: Access your site
After 1–2 minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/mortoo-money-academy/
```

Bookmark this on the boys' tablets! 🎉

---

## 💡 How to Use with the Boys

### Daily/Weekly sessions (20–30 mins each)
1. **Open the site** on a tablet or laptop
2. **Choose a path** — Remi or Micah
3. **Click the next unlocked topic**
4. Read through the cards together (parent and child)
5. Let them answer the quiz independently
6. Do the activity together this week
7. Play with the calculator — let them experiment!

### Tips for Remi (age 6):
- Read the story cards TO her
- Help her with quiz words she doesn't know
- Focus on the 3-jar activity — make it physical with real jars
- Make the lemonade stand real!

### Tips for Micah (age 8):
- Let him read cards independently
- Challenge him: "Can you get 3 stars on the quiz?"
- Tie lessons to real Mortoo Group events — when a deal happens, reference the lesson
- Use the calculators together for real family financial discussions

---

## 🛠️ Customising the Content

All lesson content is in **`data/course.js`**. Each topic has:
- `cards` — array of story/concept/reallife/tip cards
- `quiz` — array of questions with correct answer index and explanation
- `activity` — steps + challenge
- `tool` — which interactive calculator to show

To edit a story, find the topic in `data/course.js` and change the `body` text.
To add a new quiz question, add an object to the `quiz` array.

---

## 📁 File Structure

```
mortoo-money-academy/
├── index.html          ← Main app (all screens)
├── css/
│   └── style.css       ← All styles and animations
├── js/
│   └── app.js          ← All logic, quiz engine, calculators, confetti
├── data/
│   └── course.js       ← All lesson content (edit this!)
└── README.md           ← This file
```

---

## 🌟 Features

- ✅ No server needed — pure HTML/CSS/JS
- ✅ Works offline after first load
- ✅ Mobile-friendly
- ✅ Progress saves in browser (localStorage)
- ✅ Separate paths for each child
- ✅ 11 interactive calculators
- ✅ 33 quiz questions with explanations
- ✅ Confetti on every completion
- ✅ Certificate of Achievement on finishing a path
- ✅ Real-life Mortoo Group family connections throughout

---

Built with ❤️ for the Mortoo family.

const COURSE = {
  meta: {
    title: "Mortoo Money Academy",
    subtitle: "Real money skills for real life"
  },
  paths: {
    remi: {
      name: "Remi",
      age: 6,
      color: "#F4845F",
      emoji: "🌸",
      tagline: "Age 6 · Explorer Path",
      topics: ["saving","giving","spending","entrepreneur","taxes","inflation"]
    },
    micah: {
      name: "Micah",
      age: 8,
      color: "#3B82F6",
      emoji: "🚀",
      tagline: "Age 8 · Champion Path",
      topics: ["saving","giving","spending","entrepreneur","investing","interest","taxes","mortgage","credit","pension","inflation"]
    }
  },
  topics: {
    saving: {
      id: "saving",
      title: "Saving Money",
      emoji: "🏦",
      color: "#10B981",
      bg: "#ECFDF5",
      tagline: "The habit that changes everything",
      cards: [
        {
          type: "story",
          title: "The Lego Mission",
          body: "Remi spotted the most amazing LEGO castle — £28! She only had £3 pocket money per week. Instead of spending it all on sweets, she saved £2 every Saturday. 14 weeks later — she bought it herself. No asking, no waiting. She bought it with HER money. That feeling? That's what saving gives you: freedom.",
          icon: "🧱"
        },
        {
          type: "concept",
          title: "The 3-Jar Rule",
          body: "Every time money comes in — split it into 3 jars:\n\n🟢 SAVE jar: 50% — for goals and the future\n🟡 SPEND jar: 40% — for things you enjoy now\n❤️ GIVE jar: 10% — for helping others\n\nThis is how your dad runs his businesses — money in, money split, money purposeful.",
          icon: "🏺"
        },
        {
          type: "reallife",
          title: "Your Dad Does This Too",
          body: "Mortoo Homes manages 24 properties right now. But your dad started by saving money from early jobs, building up capital before investing. Even billionaires like Warren Buffett started by saving his paper round money aged 13. The habit is the same — only the numbers change.",
          icon: "🏠"
        },
        {
          type: "tip",
          title: "Short Goals vs Long Goals",
          body: "A SHORT goal is something you want in 1–8 weeks — like a book, a game, or a treat.\n\nA LONG goal takes months — like a bike, a trip, or a big toy.\n\nBoth need saving! Write your goals down. Name them. Give them a price. Give them a deadline. Goals without a plan are just wishes.",
          icon: "🎯"
        }
      ],
      quiz: [
        {
          q: "Remi gets £5 pocket money. Using the 3-jar rule, how much goes in the SAVE jar?",
          options: ["£1.00", "£2.50 ✓", "£4.00", "£5.00 — save it all!"],
          correct: 1,
          explain: "50% of £5 is £2.50. That's the save jar. The other £2 goes to spending and 50p to giving."
        },
        {
          q: "Which is a LONG savings goal?",
          options: ["A chocolate bar (50p)", "A magazine (£3)", "A bicycle (£120) ✓", "A sticker pack (£1)"],
          correct: 2,
          explain: "A bike at £120 will take many weeks to save for — that's a long goal. The others are short goals you could reach very quickly."
        },
        {
          q: "Why is saving BEFORE spending the best habit?",
          options: ["It isn't — spend first, save leftovers", "Because you might forget to save later ✓", "Because banks pay you to save early", "It makes no difference"],
          correct: 1,
          explain: "If you wait until after spending to save, there's often nothing left! Save first — even £1 — and then enjoy what remains."
        }
      ],
      activity: {
        title: "Start Your 3-Jar System This Week",
        steps: [
          "Find 3 jars, boxes or envelopes at home",
          "Label them: SAVE 💚, SPEND 💛, GIVE ❤️",
          "Next time you get pocket money — split it straight away",
          "Write your first SAVE goal on a sticky note and stick it to the save jar",
          "Check in every week and watch it grow!"
        ],
        challenge: "Can you keep it going for 4 weeks straight?"
      },
      tool: { type: "savings_goal" }
    },

    giving: {
      id: "giving",
      title: "Giving & Generosity",
      emoji: "❤️",
      color: "#EF4444",
      bg: "#FEF2F2",
      tagline: "The secret that makes you richer",
      cards: [
        {
          type: "story",
          title: "The 10p That Changed a Village",
          body: "In 2022, a school in London held a fundraiser. Every child gave just 50p. 400 children × 50p = £200. That £200 built a clean water tap in a Zimbabwean village used by 300 people every day. One tap. 50p each. Every small act of giving has a ripple you can't even see.",
          icon: "💧"
        },
        {
          type: "concept",
          title: "Why Generous People Thrive",
          body: "Studies show that people who give regularly are:\n\n😊 Happier and less stressed\n🤝 Trusted more by others\n💼 More successful in business\n🌍 More connected to their community\n\nGenerosity is not just nice — it's smart. It builds your reputation. Your dad gives back to communities in Ghana and Zimbabwe through his businesses. That's not charity — that's leadership.",
          icon: "🌟"
        },
        {
          type: "reallife",
          title: "CustomerGrid in Ghana",
          body: "Your dad is building a business in Ghana called CustomerGrid that will create jobs for hundreds of people. He could just take profit. Instead he's choosing to build in Africa — creating opportunity where it's most needed. That's giving through business. You don't have to choose between generous and successful. The best leaders are both.",
          icon: "🌍"
        },
        {
          type: "tip",
          title: "3 Ways to Give",
          body: "💰 MONEY — donate from your give jar to a cause you care about\n\n⏰ TIME — volunteer, help a neighbour, assist a friend without being asked\n\n🛠️ SKILL — teach someone what you know; tutor, share, create for others\n\nAll three count. All three matter. Start with what you have.",
          icon: "🎁"
        }
      ],
      quiz: [
        {
          q: "Micah has £10. He gives £1 away. What percentage did he give?",
          options: ["1%", "5%", "10% ✓", "50%"],
          correct: 2,
          explain: "£1 out of £10 is 10%. That's the classic 'tithe' — giving a tenth. Many generous people start here."
        },
        {
          q: "Which of these counts as GIVING?",
          options: ["Keeping all your pocket money", "Helping a friend with homework for free ✓", "Selling your old toys", "Saving money in a jar"],
          correct: 1,
          explain: "Giving your time and skills is just as valuable as giving money. Helping a friend learn for free is a gift."
        },
        {
          q: "Why does your dad build businesses in Africa?",
          options: ["Only to make money", "Because it's cheaper", "To create jobs and give back to communities ✓", "Because taxes are lower"],
          correct: 2,
          explain: "Great businesses create value AND give back. CustomerGrid and Mortoo Homes are built to succeed AND to make a difference."
        }
      ],
      activity: {
        title: "Choose Your Cause This Month",
        steps: [
          "Look at your GIVE jar — how much is in there?",
          "Think about one thing in the world you want to fix or help",
          "Research a charity or person who works on that cause",
          "Make your first donation — however small",
          "Write down how it made you feel"
        ],
        challenge: "Give something — money, time or skill — every single week for a month."
      },
      tool: { type: "giving_tracker" }
    },

    spending: {
      id: "spending",
      title: "Spending Wisely",
      emoji: "🛒",
      color: "#F59E0B",
      bg: "#FFFBEB",
      tagline: "Get more from every pound",
      cards: [
        {
          type: "story",
          title: "The Trainer Trap",
          body: "Two boys wanted new trainers. Boy A bought the first pair he saw — £65 — because they looked cool in the shop. Boy B spent 20 minutes comparing online, found the same brand in last season's colour for £29, and used a discount code for 10% off. He paid £26.10. They both got great trainers. Boy B had £38.90 left. That's the power of smart spending.",
          icon: "👟"
        },
        {
          type: "concept",
          title: "Needs vs Wants",
          body: "A NEED is something you must have to live and function:\nFood, water, school supplies, shoes, medicine\n\nA WANT is something you'd like but could live without:\nThe latest game, sweets, a new toy, premium brand\n\nBoth are okay! But knowing the difference helps you decide when to spend immediately and when to wait, compare and save.",
          icon: "🤔"
        },
        {
          type: "concept",
          title: "Value for Money",
          body: "Cheap isn't always good value. Expensive isn't always worth it.\n\nValue = Quality ÷ Price\n\nA £5 pair of socks that lasts 2 years is BETTER VALUE than £2 socks that fall apart in 3 months.\n\nAlways ask: 'How long will this last? How often will I use it? Could I get the same thing for less?'",
          icon: "⚖️"
        },
        {
          type: "tip",
          title: "The 3-Day Wait Rule",
          body: "Before buying ANYTHING over £10, wait 3 days.\n\nIf after 3 days you still want it just as much — buy it.\nIf you've forgotten about it — you didn't really need it.\n\nThis one rule saves most people hundreds of pounds a year. It works for adults too. Your dad applies this to every business deal — never rush a purchase.",
          icon: "⏳"
        },
        {
          type: "reallife",
          title: "How Businesses Spend Wisely",
          body: "When your dad buys a company like Frederick Smith Electrical, he doesn't just pay the first price asked — he negotiated from £2.38 million down toward £1.8 million. That's smart spending on a massive scale. The same principle — compare, negotiate, wait, get value — works whether you're buying a game or a company.",
          icon: "💼"
        }
      ],
      quiz: [
        {
          q: "Which is a NEED not a want?",
          options: ["A new games console", "The latest trainers", "School lunch ✓", "A cinema trip"],
          correct: 2,
          explain: "School lunch is something you need to function and learn. The others are wants — nice to have, but not essential."
        },
        {
          q: "Shop A sells a book for £8. Shop B sells the same book for £6. Which is better value?",
          options: ["Shop A — it must be better quality", "Shop B ✓", "They're the same", "Need more information"],
          correct: 1,
          explain: "Same book, lower price = better value. Always compare before you buy!"
        },
        {
          q: "What does the 3-day rule help you avoid?",
          options: ["Saving too much", "Impulse buying things you don't really need ✓", "Forgetting to give", "Paying taxes"],
          correct: 1,
          explain: "Waiting 3 days stops you buying on impulse. Most 'I MUST HAVE IT NOW' feelings fade. If you still want it after 3 days — it's a real want!"
        }
      ],
      activity: {
        title: "The Value Hunter Challenge",
        steps: [
          "Pick something you want to buy this month (under £20)",
          "Find it in at least 3 different places (shops, online, second hand)",
          "Write down the price in each place",
          "Calculate how much you save by choosing the cheapest",
          "Apply the 3-day rule before buying!"
        ],
        challenge: "Find a way to get something you want for at least 20% less than the first price you see."
      },
      tool: { type: "value_compare" }
    },

    entrepreneur: {
      id: "entrepreneur",
      title: "Entrepreneurship",
      emoji: "💡",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      tagline: "Turn your ideas into income",
      cards: [
        {
          type: "story",
          title: "The Mortoo Homes Story",
          body: "Your dad had a simple idea: 'What if landlords never had to worry about empty properties or late rent?' He guaranteed them income every month, managed everything, and took a fee for the service. That idea — now Mortoo Homes — manages 24 properties and is growing toward 300. One idea, one problem solved, one business built. That's entrepreneurship.",
          icon: "🏗️"
        },
        {
          type: "concept",
          title: "The Business Formula",
          body: "Every business in the world follows this formula:\n\n🔍 SPOT a problem people have\n💡 CREATE a solution people will pay for\n📢 REACH the customers who need it\n💰 CHARGE more than it costs you\n\nRevenue (money in) − Costs (money out) = PROFIT\n\nProfit is what you keep. Profit is freedom.",
          icon: "🧮"
        },
        {
          type: "reallife",
          title: "Five Kid Businesses That Made Real Money",
          body: "🍋 Mikaila Ulmer (4 years old) — lemonade with honey. Now a million-dollar brand 'Me & the Bees'.\n\n📚 Hart Main (13) — scented candles. Made $200,000 in his first year.\n\n🎨 Cory Nieves (6) — cookies. 'Mr. Cory's Cookies' now in major US stores.\n\nYou are not too young. You are exactly the right age to start.",
          icon: "🌟"
        },
        {
          type: "tip",
          title: "Your First Business Idea",
          body: "Start with what you already know:\n\n🖼️ Can you draw? Sell artwork or birthday cards\n📚 Good at reading? Tutor younger kids\n🌱 Like nature? Grow and sell herbs or flowers\n🍰 Love baking? Sell to family friends\n🎮 Good at a game? Teach others\n\nThe best business uses your existing skills to solve someone else's problem.",
          icon: "🚀"
        }
      ],
      quiz: [
        {
          q: "Micah sells 8 bookmarks for £2.50 each. Materials cost £5 total. What's his profit?",
          options: ["£20", "£15 ✓", "£5", "£25"],
          correct: 1,
          explain: "Revenue = 8 × £2.50 = £20. Profit = £20 − £5 = £15. Micah made £15 from his skill!"
        },
        {
          q: "What is the MOST important thing a business needs to survive?",
          options: ["A cool logo", "Customers who pay ✓", "An office", "Lots of staff"],
          correct: 1,
          explain: "No customers = no revenue = no business. Everything else (logo, office, staff) comes after you have paying customers."
        },
        {
          q: "Your dad negotiated a company price from £2.38m to £1.8m. What skill did he use?",
          options: ["Saving", "Negotiation ✓", "Giving", "Investing"],
          correct: 1,
          explain: "Negotiation — discussing price to get better value — saved hundreds of thousands of pounds. It's one of the most valuable business skills."
        }
      ],
      activity: {
        title: "Launch Your First Mini-Business",
        steps: [
          "Write down 3 things you're good at or love doing",
          "For each, think: who would pay for this?",
          "Pick the best idea and give it a name",
          "Set a price and figure out your costs",
          "Find your first 3 customers this week!"
        ],
        challenge: "Earn your first £5 from your own idea. Then reinvest it."
      },
      tool: { type: "profit_calc" }
    },

    investing: {
      id: "investing",
      title: "Investing",
      emoji: "📈",
      color: "#059669",
      bg: "#ECFDF5",
      tagline: "Make your money work while you sleep",
      cards: [
        {
          type: "story",
          title: "The Mango Tree Parable",
          body: "You plant a mango seed today. Year 1: a tiny sprout. Year 5: a small tree with 10 mangoes. Year 10: a full tree with 200 mangoes. Year 25: that tree's seeds have grown into 5 more trees. You planted ONE seed.\n\nMoney invested works exactly like this. £100 invested at 7% becomes £200 in 10 years, £400 in 20 years, £800 in 30 years. You did nothing after planting.",
          icon: "🥭"
        },
        {
          type: "concept",
          title: "Compound Interest — The 8th Wonder",
          body: "Einstein called compound interest 'the eighth wonder of the world.'\n\nSimple interest: earn £10 on £100 every year = £10, £10, £10...\n\nCompound interest: earn £10 on £100 in year 1. Then earn interest on £110 in year 2. Then on £121 in year 3.\n\nIt snowballs. The longer you wait, the faster it grows.",
          icon: "☃️"
        },
        {
          type: "reallife",
          title: "Property as Investment",
          body: "Your dad doesn't just manage properties — he understands that property is one of the most powerful investments. A house bought for £200,000 might be worth £350,000 in 15 years. Meanwhile, tenants pay rent which covers the mortgage. You end up with a valuable asset AND income. This is why Mortoo Homes exists — and why understanding investing young changes your life.",
          icon: "🏘️"
        },
        {
          type: "tip",
          title: "Where People Invest",
          body: "📊 STOCKS — buy small pieces of companies like Apple, Nike, or Cadbury. If they grow, your slice grows.\n\n🏠 PROPERTY — buy houses, rent them out, sell at a profit later.\n\n🏦 SAVINGS ACCOUNTS — lower risk, lower return but safer.\n\n💼 BUSINESSES — invest in companies you believe in.\n\nRisk and reward are linked. Higher potential = higher risk.",
          icon: "🗂️"
        }
      ],
      quiz: [
        {
          q: "£200 invested at 10% per year. After year 1 = £220. After year 2 = ?",
          options: ["£240 (£20 interest again)", "£242 (10% of £220) ✓", "£260", "£200"],
          correct: 1,
          explain: "Compound interest means you earn interest on last year's total — £220 × 10% = £22, so £242. Not £240. That extra £2 is compound interest at work!"
        },
        {
          q: "What's the main RISK of investing?",
          options: ["You might earn too much", "The value can go down as well as up ✓", "Banks take your money", "You have to pay extra taxes immediately"],
          correct: 1,
          explain: "Investments can lose value. That's why investing is different from saving. But over long periods, most investments recover and grow."
        },
        {
          q: "Why does starting to invest YOUNG matter so much?",
          options: ["It doesn't — timing doesn't matter", "More time for compound growth to work ✓", "Young people get better interest rates", "It's required by law"],
          correct: 1,
          explain: "Time is your biggest investing advantage. £100 at age 10, growing at 7%, is worth over £1,400 by age 60. The same £100 invested at 40 is only worth £270 at 60."
        }
      ],
      activity: {
        title: "The Doubling Penny Experiment",
        steps: [
          "Get a piece of paper. Write: Day 1 = 1p",
          "Double it each day: 1p, 2p, 4p, 8p, 16p...",
          "Keep going for 30 days — what do you reach?",
          "The answer will SHOCK you (it's over £5 million!)",
          "This is compound growth — now use the calculator to see it with real money"
        ],
        challenge: "Ask a parent to open a Junior ISA or investment account in your name this month."
      },
      tool: { type: "compound_calc" }
    },

    interest: {
      id: "interest",
      title: "Interest & APR",
      emoji: "💳",
      color: "#DC2626",
      bg: "#FEF2F2",
      tagline: "Why borrowing money costs extra",
      cards: [
        {
          type: "story",
          title: "Remi's Debt Lesson",
          body: "Micah lent Remi £10 to buy a craft kit. He said: 'Pay me back £11 next month.' That extra £1 is interest — Micah's reward for lending. Now imagine borrowing £1,000 from a bank at 20% APR. After one year you owe £1,200. Borrow it on a credit card and only pay minimums? It could take 10 years to clear and cost you £3,000 total. The cost of borrowing is REAL.",
          icon: "💸"
        },
        {
          type: "concept",
          title: "What is APR?",
          body: "APR = Annual Percentage Rate\n\nIt's the yearly cost of borrowing money, shown as a percentage.\n\n• Bank loan: 5–8% APR (relatively cheap)\n• Car finance: 10–15% APR\n• Credit card: 20–30% APR\n• Payday loan: 1,000–3,000% APR (DANGER!)\n\nAlways ask: what's the APR? The lower the better when borrowing.",
          icon: "📊"
        },
        {
          type: "tip",
          title: "Good Debt vs Bad Debt",
          body: "GOOD DEBT: Borrowing money to create more money\n✅ Mortgage — to own a home that grows in value\n✅ Business loan — to start something profitable\n\nBAD DEBT: Borrowing money to consume\n❌ Credit card for holidays you can't afford\n❌ Loans for clothes or gadgets\n❌ 'Buy now pay later' for impulse buys\n\nYour dad uses business loans strategically — always with a plan to repay them from the business's profits.",
          icon: "⚖️"
        }
      ],
      quiz: [
        {
          q: "You borrow £500 at 20% APR. How much interest do you pay in 1 year?",
          options: ["£20", "£50", "£100 ✓", "£500"],
          correct: 2,
          explain: "20% of £500 = £100. So you repay £600 total. That's the cost of borrowing."
        },
        {
          q: "Which loan is CHEAPER to borrow?",
          options: ["5% APR ✓", "20% APR", "50% APR", "They all cost the same"],
          correct: 0,
          explain: "Lower APR = less interest paid = cheaper loan. Always choose the lowest APR available."
        },
        {
          q: "Which is an example of GOOD debt?",
          options: ["Credit card for a holiday", "Loan for new trainers", "Mortgage to buy a house ✓", "Buy now pay later for a game"],
          correct: 2,
          explain: "A mortgage is good debt because you're building an asset (a home) that can grow in value over time."
        }
      ],
      activity: {
        title: "The APR Comparison Game",
        steps: [
          "Look up 3 different ways to borrow £1,000 (bank loan, credit card, overdraft)",
          "Find the APR for each",
          "Use the calculator to see how much each costs in 1 year",
          "Write down the difference in cost between cheapest and most expensive",
          "Discuss with your dad: when would you ever borrow, and at what APR maximum?"
        ],
        challenge: "Ask your dad about the interest rates on the FSE acquisition financing. Real numbers!"
      },
      tool: { type: "apr_calc" }
    },

    taxes: {
      id: "taxes",
      title: "Understanding Taxes",
      emoji: "🏛️",
      color: "#0284C7",
      bg: "#F0F9FF",
      tagline: "The money we share to build our world",
      cards: [
        {
          type: "story",
          title: "The Class Pot Experiment",
          body: "30 children each put 10p into a class pot every day. That's £3 per day. In a school year (190 days) = £570. The class uses it to buy books, art supplies, a projector, and repairs a broken shelf. None of them could afford all of that alone. Together, they built something extraordinary.\n\nThat's exactly what taxes do — at a national scale.",
          icon: "🏫"
        },
        {
          type: "concept",
          title: "Types of Tax",
          body: "💼 INCOME TAX — paid on what you earn. UK basic rate = 20%.\n\n🛒 VAT (Value Added Tax) — 20% added to most things you buy. Already in the price.\n\n🏢 CORPORATION TAX — paid by businesses on profit. Mortoo Homes pays this.\n\n🏠 STAMP DUTY — paid when buying property.\n\n🎁 INHERITANCE TAX — paid on large estates left when someone dies.",
          icon: "📋"
        },
        {
          type: "reallife",
          title: "What Your Taxes Build",
          body: "Every time you buy something, 20p in every £1 goes to the government as VAT. That money pays for:\n\n🏥 The NHS (hospitals, doctors, ambulances)\n🚓 Police and fire service\n🛣️ Roads, bridges and public transport\n📚 Schools and libraries\n🌳 Parks and public spaces\n\nYour dad has an accountant (Marcel) whose whole job is making sure every tax is calculated correctly and paid on time.",
          icon: "🌐"
        }
      ],
      quiz: [
        {
          q: "Remi earns £20 from her lemonade stand. Income tax is 20%. How much does she keep?",
          options: ["£20 (no tax for kids)", "£18", "£16 ✓", "£10"],
          correct: 2,
          explain: "20% of £20 = £4 tax. She keeps £20 − £4 = £16. In reality, there's a tax-free allowance — but the principle is the same."
        },
        {
          q: "You buy a toy for £12 including 20% VAT. How much of that is tax?",
          options: ["£2.40", "£2 ✓", "£1.20", "£0.20"],
          correct: 1,
          explain: "If the price including 20% VAT is £12, the original price was £10, and VAT = £2. The seller passes that £2 to the government."
        },
        {
          q: "Why do businesses hire accountants like Marcel?",
          options: ["To count coins", "To make sure taxes are correct and legal strategies are used ✓", "To do the shopping", "Because it's required by law for all businesses"],
          correct: 1,
          explain: "Accountants know all the legal ways to reduce tax bills AND make sure you don't pay too little (illegal) or too much (wasteful)."
        }
      ],
      activity: {
        title: "Tax Detective Mission",
        steps: [
          "Next time you're at a shop — find the VAT on the receipt",
          "Calculate what percentage of the total is tax",
          "Ask your dad: how much corporation tax does Mortoo Homes pay?",
          "Find out: what 3 things near your home were built using tax money?",
          "Write a list of 10 things in your life paid for by taxes"
        ],
        challenge: "Create a 'tax budget' — if YOU controlled £100 of tax money, how would you spend it?"
      },
      tool: { type: "tax_calc" }
    },

    mortgage: {
      id: "mortgage",
      title: "Mortgages",
      emoji: "🏠",
      color: "#0369A1",
      bg: "#F0F9FF",
      tagline: "How people buy homes with long-term loans",
      cards: [
        {
          type: "story",
          title: "The Mortoo Homes Connection",
          body: "Every property Mortoo Homes manages was bought by someone using a mortgage. A landlord might have bought a house for £250,000, put down a £50,000 deposit, and borrowed £200,000. Mortoo collects rent from tenants, pays the landlord a guaranteed income, and the landlord uses some of that to pay their mortgage. Your dad designed this whole system — understanding mortgages is the foundation.",
          icon: "🔑"
        },
        {
          type: "concept",
          title: "How a Mortgage Works",
          body: "Step 1: You find a house (e.g. £300,000)\nStep 2: You save a deposit — usually 10–20% (£30,000–£60,000)\nStep 3: The bank lends you the rest (£240,000–£270,000)\nStep 4: You pay back monthly — part repays the loan, part is interest\nStep 5: After 25 years — the house is YOURS, worth far more\n\nYou're renting from the bank — but at the end, you own the house.",
          icon: "🏗️"
        },
        {
          type: "tip",
          title: "Fixed vs Variable Rate",
          body: "FIXED RATE: Your monthly payment stays the same for 2–5 years. Easier to budget. Good when rates might rise.\n\nVARIABLE RATE: Moves with the Bank of England base rate. Can go up OR down. Riskier but sometimes cheaper.\n\nYour dad thinks carefully about interest rates on every property deal. When rates go up — mortgages get more expensive. That's why the Bank of England's decisions matter to property investors.",
          icon: "📌"
        }
      ],
      quiz: [
        {
          q: "A house costs £200,000. You put down a 10% deposit. How much do you borrow?",
          options: ["£200,000", "£20,000", "£180,000 ✓", "£100,000"],
          correct: 2,
          explain: "10% of £200,000 = £20,000 deposit. You borrow the remaining £180,000 from the bank."
        },
        {
          q: "What happens at the end of a mortgage?",
          options: ["You have to sell the house", "You owe the bank nothing and own the house ✓", "You start again with a new mortgage", "The bank keeps the house"],
          correct: 1,
          explain: "Once all payments are made, the mortgage is cleared. The house is fully yours — no more monthly payments to the bank!"
        },
        {
          q: "Why is a bigger deposit usually better?",
          options: ["It isn't — smaller deposit is smarter", "You borrow less so pay less interest ✓", "Banks give gifts for big deposits", "It reduces your credit score"],
          correct: 1,
          explain: "Bigger deposit = smaller loan = less interest over 25 years. You could save tens of thousands of pounds."
        }
      ],
      activity: {
        title: "Design Your Dream Home Budget",
        steps: [
          "Pick a home you'd like to own one day — find a real listing online",
          "Note the price. Calculate a 10% and 20% deposit",
          "Use the mortgage calculator to see monthly payments",
          "Work out how many years you'd need to save the deposit",
          "Ask your dad: how did the landlords he works with buy their first property?"
        ],
        challenge: "Use the calculator to find: what monthly payment could you afford earning £3,000/month?"
      },
      tool: { type: "mortgage_calc" }
    },

    credit: {
      id: "credit",
      title: "Credit Score",
      emoji: "⭐",
      color: "#7C3AED",
      bg: "#F5F3FF",
      tagline: "Your financial reputation — build it early",
      cards: [
        {
          type: "story",
          title: "The Reputation Report",
          body: "Imagine a new kid at school. No one knows them. Six months later, every teacher reports: 'Always honest, always on time, always keeps promises.' If they ask to borrow equipment, teachers say YES immediately and offer the best equipment.\n\nA credit score is your financial reputation report. Banks check it before lending. Higher score = better rates, bigger loans, more trust. Lower score = rejection, high rates, limited options.",
          icon: "📋"
        },
        {
          type: "concept",
          title: "The Credit Score Scale",
          body: "In the UK (Experian), scores run from 0 to 999:\n\n⭐⭐⭐⭐⭐ 961–999: Excellent — best rates\n⭐⭐⭐⭐ 881–960: Good — competitive rates\n⭐⭐⭐ 721–880: Fair — average rates\n⭐⭐ 561–720: Poor — higher rates\n⭐ 0–560: Very Poor — often rejected\n\nYour score follows you your whole life. Build it carefully, starting from age 18.",
          icon: "📊"
        },
        {
          type: "tip",
          title: "Build a Great Credit Score",
          body: "✅ Register on the electoral roll\n✅ Pay every bill on time — always\n✅ Don't use more than 30% of your credit limit\n✅ Keep old accounts open (history matters)\n✅ Don't apply for lots of credit at once\n\n❌ Miss payments\n❌ Go over your credit limit\n❌ Have multiple rejected applications\n❌ Ignore bills\n\nStart your credit history carefully. First impressions last.",
          icon: "🏆"
        }
      ],
      quiz: [
        {
          q: "Which action MOST improves your credit score?",
          options: ["Applying for 5 credit cards", "Paying every bill on time for 2 years ✓", "Spending to your credit limit monthly", "Closing all old accounts"],
          correct: 1,
          explain: "Consistent, on-time payments over time is the #1 way to build credit. Lenders want evidence you're reliable."
        },
        {
          q: "Why does a better credit score save you money?",
          options: ["Banks give cashback rewards", "You get lower interest rates on loans and mortgages ✓", "You pay less VAT", "Insurance is cheaper"],
          correct: 1,
          explain: "Great credit = low APR on mortgages and loans. Over 25 years, a 1% difference in mortgage rate saves tens of thousands of pounds."
        },
        {
          q: "Micah wants to build credit from age 18. What's his FIRST step?",
          options: ["Get a £10,000 loan", "Register on the electoral roll and open a bank account ✓", "Apply for 3 credit cards at once", "Take out a payday loan"],
          correct: 1,
          explain: "Electoral roll registration and a bank account are the foundation. They establish your identity and address for lenders."
        }
      ],
      activity: {
        title: "The Trust Tracker Journal",
        steps: [
          "Get a notebook — this is your 'Financial Reputation Journal'",
          "Every time you keep a money promise (pay back a loan, save what you said) — green tick ✓",
          "Every miss — red cross ✗",
          "At the end of each month, count your ratio",
          "Your goal: 100% green ticks. That's an excellent credit score in real life."
        ],
        challenge: "Go 30 days without a single broken money promise."
      },
      tool: { type: "credit_simulator" }
    },

    pension: {
      id: "pension",
      title: "Pension",
      emoji: "🌅",
      color: "#D97706",
      bg: "#FFFBEB",
      tagline: "Plant now. Harvest for life.",
      cards: [
        {
          type: "story",
          title: "The Two Brothers",
          body: "Two brothers. Kwame starts investing £200/month at age 20. He stops at age 40 — having invested for 20 years (£48,000 total). Kofi waits until age 40, then invests £200/month until 65 — 25 years (£60,000 total). At 65: Kwame has £682,000. Kofi has £304,000.\n\nKwame invested LESS money but started EARLIER. Time is the most powerful force in personal finance.",
          icon: "⏰"
        },
        {
          type: "concept",
          title: "What is a Pension?",
          body: "A pension is a long-term savings account you can't touch until retirement (~age 57). In exchange for that patience:\n\n🎁 The government adds 25% tax relief (put in £100 → worth £125 instantly)\n🎁 Your employer usually adds contributions too (free money!)\n🎁 It grows tax-free for decades\n\nA good pension can replace your salary for 20–30 years of retirement. The state pension (~£221/week) is not enough alone.",
          icon: "🏦"
        },
        {
          type: "reallife",
          title: "Entrepreneurial Pensions",
          body: "Your dad builds businesses partly as his 'pension' — companies like Mortoo Homes, FSE, and S Squared that generate ongoing income and can be sold for large sums later. This is the entrepreneurial approach to retirement: own assets that pay you. But even entrepreneurs usually have a pension too — as a safety net and for the tax advantages.",
          icon: "🏢"
        }
      ],
      quiz: [
        {
          q: "Why does starting a pension at 20 beat starting at 40?",
          options: ["Government gives more relief to young people", "More years for compound growth ✓", "Inflation doesn't affect young people's savings", "Employers match more when you're young"],
          correct: 1,
          explain: "Time is your greatest asset. 40 years of compound growth massively outperforms 25 years — even with more money invested later."
        },
        {
          q: "You contribute £100 to your pension. The government adds tax relief of 25%. How much is in your pension?",
          options: ["£100", "£120", "£125 ✓", "£150"],
          correct: 2,
          explain: "The government adds 25% — so £100 becomes £125 immediately. That's an instant 25% return before any investment growth!"
        },
        {
          q: "What's the MAIN risk of relying only on the state pension?",
          options: ["It's illegal", "It's only ~£221/week — not enough to live comfortably ✓", "You have to apply every year", "It gets taxed at 50%"],
          correct: 1,
          explain: "The UK state pension is about £11,500/year. That's very limited. A private pension gives you much more comfort and choice in retirement."
        }
      ],
      activity: {
        title: "Design Your Retirement",
        steps: [
          "Imagine your ideal life at age 65 — write it down in detail",
          "Estimate how much that life costs per month",
          "Use the pension calculator to see what monthly contributions get you there",
          "Ask your dad how he thinks about his 'retirement' through his businesses",
          "Decide: what age do YOU want to be financially free by?"
        ],
        challenge: "Ask a parent to open a Junior SIPP (pension) in your name this year."
      },
      tool: { type: "pension_calc" }
    },

    inflation: {
      id: "inflation",
      title: "Inflation",
      emoji: "🎈",
      color: "#DC2626",
      bg: "#FEF2F2",
      tagline: "Why £1 today beats £1 tomorrow",
      cards: [
        {
          type: "story",
          title: "Grandma's Sweet Shop",
          body: "Ask any grandparent: 'What did sweets cost when you were my age?' In 1970 a chocolate bar cost 3p. In 1990 it was 25p. Today it's around £1.20. The chocolate didn't change. The money changed. Every year, most things get 2–5% more expensive. This is inflation — and it's why just keeping money in a jar is quietly losing you money every single year.",
          icon: "🍫"
        },
        {
          type: "concept",
          title: "How Inflation Works",
          body: "When the government prints more money, each note is worth slightly less (more money chasing the same goods).\n\nIf inflation = 3% per year:\n• £100 today → buys £97 worth of stuff next year\n• £100 today → buys £74 worth of stuff in 10 years\n• £100 today → buys only £41 worth of stuff in 30 years\n\nYour money loses purchasing power just by sitting still.",
          icon: "📉"
        },
        {
          type: "reallife",
          title: "Businesses and Inflation",
          body: "Your dad's property business is a natural inflation HEDGE. When inflation rises, house prices and rents usually rise too. That's one reason property is such a popular investment — it tends to hold its real value.\n\nThe Bank of England sets interest rates partly to control inflation. When rates go up, borrowing gets more expensive, people spend less, and inflation slows down. This is why interest rate news affects every mortgage and loan in the country.",
          icon: "📰"
        },
        {
          type: "tip",
          title: "Beat Inflation",
          body: "LOSING to inflation: money in a piggy bank (0% growth vs 3% inflation = −3% real return)\n\nKEEPING UP: savings account at 3% = just breaking even\n\nBEATING inflation: investing in stocks, property, or businesses which historically return 7–10% per year\n\nThe goal isn't just to grow your money — it's to grow it FASTER than inflation. Real return = investment return minus inflation rate.",
          icon: "🏆"
        }
      ],
      quiz: [
        {
          q: "If inflation is 4% and your savings account earns 2%, what is your REAL return?",
          options: ["+2% — you're growing", "+6% — they add together", "−2% — you're losing purchasing power ✓", "0% — they cancel out"],
          correct: 2,
          explain: "Real return = investment return − inflation. 2% − 4% = −2%. Your money FEELS the same but buys less. You need to beat inflation, not just match it."
        },
        {
          q: "A chocolate bar costs £1 today with 5% annual inflation. What will it cost in 10 years?",
          options: ["£1.50", "£1.63 ✓", "£2.00", "£1.05"],
          correct: 1,
          explain: "£1 × 1.05^10 = £1.63. Compound inflation, just like compound interest, builds up over time."
        },
        {
          q: "Why is property often called an 'inflation hedge'?",
          options: ["It never loses value", "Property prices and rents tend to rise with inflation ✓", "You don't pay VAT on houses", "The government protects property prices"],
          correct: 1,
          explain: "As inflation rises, the cost to build and buy homes usually rises too — meaning property values tend to keep pace with or beat inflation over time."
        }
      ],
      activity: {
        title: "The Inflation Time Machine",
        steps: [
          "Ask a grandparent or older relative: what did 5 things cost in their childhood?",
          "Find out what those same 5 things cost today",
          "Calculate the % increase for each",
          "Use the calculator to find the annual inflation rate implied",
          "Compare to the official UK inflation rate — how close were they?"
        ],
        challenge: "Find one investment that has beaten inflation every decade since 1970."
      },
      tool: { type: "inflation_calc" }
    }
  }
};

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

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');

:root {
  --remi: #F4845F;
  --remi-light: #FEF0EB;
  --remi-dark: #C4593A;
  --micah: #3B82F6;
  --micah-light: #EFF6FF;
  --micah-dark: #1D4ED8;
  --gold: #F59E0B;
  --gold-light: #FFFBEB;
  --green: #10B981;
  --green-light: #ECFDF5;
  --bg: #F8F7F4;
  --white: #FFFFFF;
  --text: #1A1A2E;
  --text-muted: #6B7280;
  --border: #E5E7EB;
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-hover: 0 8px 32px rgba(0,0,0,0.14);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Nunito', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── SCREENS ── */
.screen { display: none; min-height: 100vh; }
.screen.active { display: block; }

/* ── HEADER ── */
.app-header {
  background: var(--white);
  border-bottom: 2px solid var(--border);
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-logo {
  font-family: 'Fredoka One', cursive;
  font-size: 22px;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-coins {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--gold-light);
  border: 2px solid var(--gold);
  border-radius: 20px;
  padding: 6px 14px;
  font-weight: 800;
  font-size: 15px;
  color: #92400E;
}
.header-back {
  background: none;
  border: 2px solid var(--border);
  border-radius: 10px;
  padding: 6px 14px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-muted);
  transition: all 0.2s;
}
.header-back:hover { border-color: var(--text); color: var(--text); }

/* ── HOME SCREEN ── */
#screen-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  background: linear-gradient(135deg, #FFF9F0 0%, #F0F4FF 100%);
}
.home-hero {
  text-align: center;
  margin-bottom: 48px;
}
.home-logo {
  font-family: 'Fredoka One', cursive;
  font-size: 48px;
  color: var(--text);
  margin-bottom: 8px;
  animation: fadeInDown 0.6s ease;
}
.home-tagline {
  font-size: 18px;
  color: var(--text-muted);
  font-weight: 600;
  animation: fadeInDown 0.6s ease 0.1s both;
}
.home-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 6px;
  animation: fadeInDown 0.6s ease 0.2s both;
}
.path-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  max-width: 640px;
  animation: fadeInUp 0.6s ease 0.3s both;
}
.path-card {
  background: var(--white);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  border: 3px solid transparent;
  box-shadow: var(--shadow);
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}
.path-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 6px;
}
.path-card.remi::before { background: var(--remi); }
.path-card.micah::before { background: var(--micah); }
.path-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: var(--shadow-hover); }
.path-card.remi:hover { border-color: var(--remi); }
.path-card.micah:hover { border-color: var(--micah); }
.path-emoji { font-size: 56px; display: block; margin-bottom: 12px; }
.path-name {
  font-family: 'Fredoka One', cursive;
  font-size: 28px;
  margin-bottom: 4px;
}
.path-card.remi .path-name { color: var(--remi); }
.path-card.micah .path-name { color: var(--micah); }
.path-tag { font-size: 13px; color: var(--text-muted); font-weight: 600; }
.path-progress-wrap { margin-top: 16px; }
.path-progress-bar {
  background: var(--border);
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
  margin-bottom: 6px;
}
.path-progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.6s ease;
}
.path-card.remi .path-progress-fill { background: var(--remi); }
.path-card.micah .path-progress-fill { background: var(--micah); }
.path-progress-label { font-size: 12px; color: var(--text-muted); font-weight: 600; }
.path-coins {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--gold-light);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 800;
  color: #92400E;
  margin-top: 10px;
}

/* ── ROADMAP SCREEN ── */
#screen-roadmap { background: var(--bg); }
.roadmap-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}
.roadmap-header {
  text-align: center;
  padding: 24px 0 32px;
}
.roadmap-title {
  font-family: 'Fredoka One', cursive;
  font-size: 30px;
  margin-bottom: 6px;
}
.roadmap-summary {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
}
.roadmap-stat {
  background: var(--white);
  border-radius: 12px;
  padding: 10px 18px;
  text-align: center;
  border: 2px solid var(--border);
}
.roadmap-stat-num { font-size: 22px; font-weight: 900; }
.roadmap-stat-lbl { font-size: 11px; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }

/* path track */
.roadmap-track {
  position: relative;
  padding-top: 8px;
}
.roadmap-track::before {
  content: '';
  position: absolute;
  left: 32px;
  top: 0; bottom: 0;
  width: 4px;
  border-radius: 2px;
  background: var(--border);
  z-index: 0;
}
.topic-node {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.topic-node.locked { opacity: 0.5; cursor: not-allowed; }
.node-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  flex-shrink: 0;
  border: 4px solid var(--white);
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  transition: transform 0.2s;
  position: relative;
}
.topic-node:not(.locked) .node-icon:hover { transform: scale(1.1); }
.node-icon.completed { background: var(--green); }
.node-icon.in-progress { background: var(--gold); animation: pulse 2s infinite; }
.node-icon.upcoming { background: var(--white); border: 4px solid var(--border); }
.node-content {
  background: var(--white);
  border-radius: var(--radius);
  padding: 16px 20px;
  flex: 1;
  box-shadow: var(--shadow);
  border: 2px solid transparent;
  transition: all 0.2s;
}
.topic-node:not(.locked) .node-content:hover { box-shadow: var(--shadow-hover); }
.node-title {
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  margin-bottom: 3px;
}
.node-tagline { font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; }
.node-pills { display: flex; gap: 6px; flex-wrap: wrap; }
.pill {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
}
.pill-cards { background: #EFF6FF; color: #1D4ED8; }
.pill-quiz { background: #F5F3FF; color: #6D28D9; }
.pill-activity { background: #ECFDF5; color: #065F46; }
.pill-done { background: var(--green-light); color: #065F46; }
.pill-locked { background: var(--border); color: var(--text-muted); }
.node-stars { display: flex; gap: 3px; margin-top: 8px; }
.star { font-size: 14px; opacity: 0.3; }
.star.earned { opacity: 1; }

@keyframes pulse {
  0%, 100% { box-shadow: 0 2px 12px rgba(245,158,11,0.4); }
  50% { box-shadow: 0 2px 24px rgba(245,158,11,0.8); }
}

/* ── LESSON SCREEN ── */
#screen-lesson {
  background: var(--bg);
  min-height: 100vh;
}
.lesson-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 24px 20px 80px;
}
.lesson-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.lesson-progress-bar {
  flex: 1;
  background: var(--border);
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
}
.lesson-progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.4s ease;
}
.lesson-progress-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  white-space: nowrap;
}

/* ── CARDS ── */
.lesson-card {
  background: var(--white);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
  border-left: 6px solid transparent;
  animation: slideInRight 0.3s ease;
}
.lesson-card.story { border-left-color: #F59E0B; }
.lesson-card.concept { border-left-color: #3B82F6; }
.lesson-card.reallife { border-left-color: #10B981; }
.lesson-card.tip { border-left-color: #8B5CF6; }

.card-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.card-type-badge.story { background: #FFFBEB; color: #92400E; }
.card-type-badge.concept { background: #EFF6FF; color: #1E40AF; }
.card-type-badge.reallife { background: #ECFDF5; color: #065F46; }
.card-type-badge.tip { background: #F5F3FF; color: #5B21B6; }

.card-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 12px;
}
.card-title {
  font-family: 'Fredoka One', cursive;
  font-size: 22px;
  margin-bottom: 12px;
  color: var(--text);
}
.card-body {
  font-size: 15px;
  line-height: 1.75;
  color: #374151;
  white-space: pre-line;
}

/* Card nav */
.card-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
}
.card-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}
.card-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--border);
  transition: all 0.2s;
}
.card-dot.active { width: 24px; border-radius: 4px; }
.btn {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn:hover { transform: scale(1.04); }
.btn:active { transform: scale(0.98); }
.btn-primary { background: var(--green); color: white; }
.btn-secondary { background: var(--white); color: var(--text); border: 2px solid var(--border); }
.btn-remi { background: var(--remi); color: white; }
.btn-micah { background: var(--micah); color: white; }
.btn-gold { background: var(--gold); color: #1A1A2E; }
.btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

/* ── QUIZ ── */
.quiz-section {
  background: var(--white);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
}
.quiz-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 20px;
  background: #F5F3FF;
  color: #5B21B6;
  margin-bottom: 14px;
}
.quiz-counter {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 700;
  margin-bottom: 12px;
}
.quiz-question {
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 1.3;
}
.quiz-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.quiz-option {
  padding: 14px 18px;
  border-radius: 14px;
  border: 2.5px solid var(--border);
  background: var(--white);
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
  color: var(--text);
}
.quiz-option:hover:not(:disabled) { border-color: var(--text); background: #FAFAFA; transform: translateX(4px); }
.quiz-option.correct { background: #ECFDF5; border-color: var(--green); color: #065F46; }
.quiz-option.wrong { background: #FEF2F2; border-color: #EF4444; color: #991B1B; }
.quiz-option:disabled { cursor: default; transform: none; }
.quiz-explain {
  padding: 14px 18px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  display: none;
  animation: fadeIn 0.3s ease;
}
.quiz-explain.correct { background: #ECFDF5; color: #065F46; display: block; }
.quiz-explain.wrong { background: #FEF2F2; color: #991B1B; display: block; }
.quiz-score {
  text-align: center;
  padding: 20px;
  background: var(--gold-light);
  border-radius: 16px;
  border: 2px solid var(--gold);
}
.quiz-score-emoji { font-size: 40px; display: block; margin-bottom: 8px; }
.quiz-score-title { font-family: 'Fredoka One', cursive; font-size: 22px; margin-bottom: 4px; }
.quiz-score-body { font-size: 14px; color: var(--text-muted); font-weight: 600; }

/* ── ACTIVITY ── */
.activity-section {
  background: linear-gradient(135deg, #ECFDF5, #D1FAE5);
  border-radius: 24px;
  padding: 28px;
  margin-bottom: 20px;
  border: 2px solid #A7F3D0;
}
.activity-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 20px;
  background: white;
  color: #065F46;
  margin-bottom: 14px;
}
.activity-title {
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  margin-bottom: 16px;
}
.activity-steps { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.activity-step { display: flex; gap: 12px; align-items: flex-start; }
.step-num {
  min-width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--green);
  color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px;
  font-weight: 800;
  flex-shrink: 0;
}
.step-text { font-size: 14px; font-weight: 600; color: #1F2937; line-height: 1.5; padding-top: 4px; }
.activity-challenge {
  background: white;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 700;
  color: #065F46;
}
.activity-challenge::before { content: '🏆 Challenge: '; }

/* ── INTERACTIVE TOOLS ── */
.tool-section {
  background: var(--white);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
}
.tool-title {
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  margin-bottom: 20px;
}
.tool-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.tool-row label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  min-width: 160px;
}
.tool-row input[type=range] { flex: 1; accent-color: var(--green); }
.tool-row .val {
  font-size: 14px;
  font-weight: 800;
  min-width: 72px;
  text-align: right;
  color: var(--text);
}
.tool-result {
  background: linear-gradient(135deg, #ECFDF5, #D1FAE5);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  border: 2px solid #A7F3D0;
  margin-top: 16px;
}
.tool-result-big {
  font-family: 'Fredoka One', cursive;
  font-size: 36px;
  color: var(--green);
  margin-bottom: 4px;
}
.tool-result-label { font-size: 14px; color: var(--text-muted); font-weight: 700; margin-bottom: 6px; }
.tool-result-sub { font-size: 13px; color: var(--text-muted); font-weight: 600; }

/* ── REWARD / COMPLETION ── */
.reward-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  display: none;
}
.reward-overlay.show { display: flex; }
.reward-card {
  background: var(--white);
  border-radius: 28px;
  padding: 40px 32px;
  text-align: center;
  max-width: 380px;
  width: 90%;
  box-shadow: 0 24px 80px rgba(0,0,0,0.3);
  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.reward-emoji { font-size: 64px; display: block; margin-bottom: 12px; }
.reward-title {
  font-family: 'Fredoka One', cursive;
  font-size: 28px;
  margin-bottom: 8px;
}
.reward-body { font-size: 15px; color: var(--text-muted); font-weight: 600; line-height: 1.6; margin-bottom: 20px; }
.reward-coins {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--gold-light);
  border: 2px solid var(--gold);
  border-radius: 16px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 900;
  color: #92400E;
  margin-bottom: 20px;
}
.reward-stars { display: flex; gap: 6px; justify-content: center; margin-bottom: 24px; font-size: 28px; }

/* ── CONFETTI ── */
#confetti-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 998;
}

/* ── ANIMATIONS ── */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
@keyframes popIn { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }

/* ── RESPONSIVE ── */
@media (max-width: 520px) {
  .path-grid { grid-template-columns: 1fr; }
  .path-card { padding: 24px; }
  .home-logo { font-size: 36px; }
  .lesson-container, .roadmap-container { padding: 16px 14px 80px; }
  .tool-row label { min-width: 120px; font-size: 12px; }
}

/* ── CERTIFICATE ── */
.certificate {
  background: linear-gradient(135deg, #FFFBEB, #FEF3C7);
  border: 4px solid var(--gold);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  margin: 20px 0;
}
.cert-title {
  font-family: 'Fredoka One', cursive;
  font-size: 26px;
  color: #92400E;
  margin-bottom: 6px;
}
.cert-name { font-size: 32px; font-weight: 900; margin: 12px 0; }
.cert-body { font-size: 14px; color: #78350F; font-weight: 600; line-height: 1.6; }
.cert-date { font-size: 13px; color: var(--text-muted); margin-top: 12px; font-weight: 700; }

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mortoo Money Academy</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏦</text></svg>">
</head>
<body>

<!-- ═══════════ CONFETTI CANVAS ═══════════ -->
<canvas id="confetti-canvas" style="display:none;"></canvas>

<!-- ═══════════ QUIZ SCORE OVERLAY ═══════════ -->
<div id="quiz-score-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;z-index:500;">
  <div class="quiz-score">
    <span class="quiz-score-emoji" id="quiz-score-emoji">🌟</span>
    <div class="quiz-score-title" id="quiz-score-title">3/3 correct</div>
    <div class="quiz-score-body" id="quiz-score-body">Amazing work!</div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCREEN 1: HOME
═══════════════════════════════════════════ -->
<div class="screen active" id="screen-home">
  <div id="screen-home">
    <div class="home-hero">
      <div class="home-logo">🏦 Mortoo Money Academy</div>
      <div class="home-tagline">Real money skills for real life</div>
      <div class="home-subtitle">Choose your learning path below</div>
    </div>

    <div class="path-grid">
      <!-- Remi -->
      <div class="path-card remi" id="home-remi" onclick="goRoadmap('remi')">
        <span class="path-emoji">🌸</span>
        <div class="path-name">Remi</div>
        <div class="path-tag">Age 6 · Explorer Path</div>
        <div style="font-size:12px;color:var(--text-muted);font-weight:600;margin-top:6px;">6 topics</div>
        <div class="path-progress-wrap">
          <div class="path-progress-bar">
            <div class="path-progress-fill" style="width:0%"></div>
          </div>
          <div class="path-progress-label">0 of 6 topics complete</div>
        </div>
        <div class="path-coins">🪙 <span class="path-coins-val">0</span> coins</div>
      </div>

      <!-- Micah -->
      <div class="path-card micah" id="home-micah" onclick="goRoadmap('micah')">
        <span class="path-emoji">🚀</span>
        <div class="path-name">Micah</div>
        <div class="path-tag">Age 8 · Champion Path</div>
        <div style="font-size:12px;color:var(--text-muted);font-weight:600;margin-top:6px;">11 topics</div>
        <div class="path-progress-wrap">
          <div class="path-progress-bar">
            <div class="path-progress-fill" style="width:0%"></div>
          </div>
          <div class="path-progress-label">0 of 11 topics complete</div>
        </div>
        <div class="path-coins">🪙 <span class="path-coins-val">0</span> coins</div>
      </div>
    </div>

    <!-- What you'll learn -->
    <div style="max-width:640px;margin-top:40px;padding:0 4px;">
      <div style="font-family:'Fredoka One',cursive;font-size:20px;margin-bottom:16px;text-align:center;">What you'll learn 📚</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;">
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">💰 Saving</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">❤️ Giving</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">🛒 Smart Spending</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">💡 Entrepreneurship</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">📈 Investing</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">💳 APR & Interest</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">🏛️ Taxes</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">🏠 Mortgages</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">⭐ Credit Score</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">🌅 Pension</div>
        <div style="background:white;border-radius:12px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);">🎈 Inflation</div>
      </div>
    </div>

    <div style="margin-top:32px;text-align:center;font-size:13px;color:var(--text-muted);font-weight:600;">
      🔒 Progress saves automatically · 🪙 Earn coins by completing lessons · 🏆 Collect stars for quiz scores
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCREEN 2: ROADMAP
═══════════════════════════════════════════ -->
<div class="screen" id="screen-roadmap">
  <div class="app-header">
    <button class="header-back" onclick="goHome()">← Home</button>
    <div class="header-logo">🏦 Money Academy</div>
    <div class="header-coins">🪙 <span id="header-coin-val">0</span></div>
  </div>
  <div class="roadmap-container">
    <div class="roadmap-header">
      <div class="roadmap-title" id="roadmap-title">Loading...</div>
      <div class="roadmap-summary">
        <div class="roadmap-stat">
          <div class="roadmap-stat-num" id="roadmap-done">0/0</div>
          <div class="roadmap-stat-lbl">Topics Done</div>
        </div>
        <div class="roadmap-stat">
          <div class="roadmap-stat-num" id="roadmap-coins">🪙 0</div>
          <div class="roadmap-stat-lbl">Coins Earned</div>
        </div>
      </div>
    </div>
    <div class="roadmap-track" id="roadmap-track"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCREEN 3: LESSON
═══════════════════════════════════════════ -->
<div class="screen" id="screen-lesson">
  <div class="app-header">
    <button class="header-back" onclick="goRoadmap(STATE.activePath)">← Back</button>
    <div class="header-logo">🏦 Money Academy</div>
    <div class="header-coins">🪙 <span id="header-coin-val">0</span></div>
  </div>
  <div class="lesson-container">
    <div class="lesson-progress">
      <div class="lesson-progress-bar">
        <div class="lesson-progress-fill" id="lesson-progress-fill" style="width:0%"></div>
      </div>
      <div class="lesson-progress-label" id="lesson-progress-label">0/0</div>
    </div>
    <div id="lesson-main"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCRIPTS
═══════════════════════════════════════════ -->
<script src="data/course.js"></script>
<script src="js/app.js"></script>
</body>
</html>
