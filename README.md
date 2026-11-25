# Guess The Word

A browser word game built with plain **HTML, CSS and JavaScript**. Guess the hidden 5-letter word in 6 tries. Each letter is colored to tell you how close you are.

## How to play

1. A random word is chosen from the built-in list.
2. Type one letter per box; focus moves to the next box automatically.
3. Press **Check Word** (or use the keyboard) to submit the row.
4. Read the colors:

| Color | Meaning |
| --- | --- |
| Green | Letter is right and in the right place |
| Yellow | Letter is right but in the wrong place |
| Gray | Letter is not in the word |

5. You have **6 tries** and **3 hints**. Press **Hint** to fill in the first wrong or empty letter of the current row.

Words in the list: `Ahmed`, `Brain`, `Cloud`, `Fruit`, `Story`.

## Features

- Generated game board (6 rows by 5 letters), auto-uppercase input and auto-advance between boxes.
- Keyboard navigation between boxes (typing advances, keydown moves between boxes).
- Per-letter feedback colors with an on-screen color key.
- Hint counter (3 hints).
- Responsive layout with Google Fonts (Poppins, Cairo).

## Tech stack

HTML5, CSS3, vanilla JavaScript (no dependencies).

## Project structure

```
Play-Guss-Word/
├── index.html   # Page layout and color key
├── css.css      # Styling
└── java.js      # Game logic
```

## Run it

No build step. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/ahmed19104/Play-Guss-Word.git
cd Play-Guss-Word
# open index.html
```

## Ideas for next steps

- Larger word list or a word API.
- Win and lose messages with a restart button.
- Score and streak tracking.

## Author

**Ahmed Yaser** - [@ahmed19104](https://github.com/ahmed19104)
