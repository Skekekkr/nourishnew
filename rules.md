# Nourish Prototype: Simplified Project Rules & Best Practices

## Purpose

Provide clear, concise guidelines to maintain a clean, consistent, and efficient workflow for the Nourish Flow Prototype.

## 1. User Flows (Primary Journeys)

* **Order Flow:** Home → “Order now” → View meal kits → Select plan → Checkout
* **Dietician Booking:** “Find a dietician” → Fill name & email form → Submit
* **AI Recipe:** “AI recipe” → (Optional login) → Input condition → View recipe

## 2. File Structure

```
/               ← Root
  index.html     ← Page markup only
  styles.css     ← All styling (no preprocessors)
  script.js      ← Minimal interactivity
/assets/        ← Images & icons
/docs/          ← Supporting docs (e.g., instructions.md)
```

## 3. Naming & Organization

* **Files/Folders:** lowercase and hyphens (e.g., `styles.css`, `assets/`).
* **HTML IDs:** section names (e.g., `#order`, `#ai-recipe`).
* **CSS Classes:** simple, semantic (e.g., `.nav`, `.btn`, `.card`).
* **JS Functions/Vars:** camelCase and descriptive (e.g., `getRecipe()`).

## 4. HTML Guidelines

* Use **semantic** tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
* Keep markup **flat**: one wrapper per section, minimal nesting.
* Include essential `<meta>` tags (`charset`, `viewport`).

## 5. CSS Best Practices

* **Global reset:** `* { margin:0; padding:0; box-sizing:border-box; }`
* **Base styles:** define font-family and line-height on `body`.
* **Layout:** use simple Flexbox or CSS Grid for sections.
* **Naming:** single-word classes; avoid over-specific selectors.
* **Comments:** group by feature (e.g., `/* Hero */`, `/* Forms */`).

## 6. JavaScript Best Practices

* Keep `script.js` under **20 lines**.
* Use **one** main function (e.g., `handleRecipeRequest`).
* Directly query and cache DOM elements once.
* Validate input before processing and display clear feedback.

## 7. Version Control Workflow

* **Branches:**

  * `main` — production-ready code
  * `dev` — ongoing development
  * `feature/<name>` — individual features
* **Commits:** short, imperative messages (`feat: add order section`).
* **PRs:** require at least one review before merge.

## 8. Cursor Integration

* Store these rules as **`.cursor/rules/project-rules.mdc`**.
* Use `instructions.md` in `/docs/` for detailed project specs.
* Exclude large or irrelevant files via **`.cursorignore`**.
* Invoke rules manually with `@project-rules` if needed.

## 9. Testing & Deployment

* Use Cursor’s **live preview** for real-time feedback.
* On merge to `main`, deploy automatically via Vercel or Netlify.
* No build steps required; prototype is static.

---

*Keep it simple, keep it consistent, and iterate quickly.*
