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
