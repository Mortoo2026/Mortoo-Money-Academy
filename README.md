# 🏦 Mortoo Money Academy

A fun, interactive financial literacy course built for **Remi (age 6)** and **Micah (age 8)**.

## 📚 What's Inside

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
