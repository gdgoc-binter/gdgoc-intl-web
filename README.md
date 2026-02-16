
# 🚀 GDG on Campus Binus International

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Material Design 3](https://img.shields.io/badge/Design_System-M3-7C4DFF?style=flat-square&logo=materialdesign)](https://m3.material.io/)
[![Google JS Style](https://img.shields.io/badge/Code_Style-Google-4285F4?style=flat-square&logo=google)](https://google.github.io/styleguide/jsguide.html)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> The official web platform for **GDG on Campus (GDGOC) Binus International**. A community-driven project to connect students, showcase projects, and host event resources.

---

## 🚧 Project Status: Architecture & Prototyping

**⚠️ Important Design Note:**
We are currently in the **Architectural Phase**. The final Figma UI is **in progress**.
Until the Figma file is released, all contributors must:
1.  **Use Standard Material Design 3 Components** (do not invent custom UI).
2.  **Strictly follow [GDG Brand Colors](http://goo.gle/on-campus-brand-guide)**.
3.  Focus on **Logic, Project Structure, and SEO** over complex custom styling.

---

## 📚 Essential Resources

**Read these before writing a single line of code.**

| Resource | Description | Action |
| :--- | :--- | :--- |
| **📘 Google JS Style Guide** | **MANDATORY** Code Standards | [**Read Guidelines**](https://google.github.io/styleguide/jsguide.html) |
| **📕 Brand Guidelines** | GDGOC Logo & Color Rules | [**Brand Guide**](http://goo.gle/on-campus-brand-guide) |
| **🛠 M3 Specs** | Component Library Specs | [**m3.material.io**](https://m3.material.io/) |

---

## ⚖️ Mandatory Code Standards

We strictly enforce the **[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)**.
To ensure clean, maintainable code, please internalize these rules before contributing:

### 1. Variables & Data Types
* **Use `const` by default.** Only use `let` if the variable *must* be reassigned.
* **NEVER use `var`.**
* Use single quotes `'` for strings. Use backticks `` ` `` only for template literals.

### 2. Naming Conventions
* **Variables/Functions:** `camelCase` (e.g., `fetchUserData`, `isActive`)
* **Classes/Components:** `PascalCase` (e.g., `EventCard`, `UserProfile`)
* **Constants:** `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`, `API_URL`)
* **Filenames:** `PascalCase` for Components (`NavBar.jsx`), `kebab-case` for utilities (`date-formatter.js`).

### 3. Formatting
* **Semicolons (;)** are **REQUIRED**.
* **2 Spaces** for indentation (No tabs).
* **Trailing commas** are required in multi-line objects/arrays.

---

## 🛠 Tech Stack

We use a modular stack optimized for SEO and Developer Experience (DX).

| Component | Tech | Note |
| :--- | :--- | :--- |
| **Core** | **React (Vite)** | Fast HMR and build times. |
| **Language** | **JavaScript (ES6+)** | Following Google Style Guide. |
| **Styling** | **CSS Modules** | Scoped styling to prevent conflicts. |
| **UI System** | **Material Design 3** | Implementation via tokens (Colors/Typography). |
| **Routing** | **React Router v6** | Client-side navigation. |

---

## 📂 Modular Architecture

We adhere to a **Feature-Based** directory structure. Avoid dumping everything into a generic `components` folder.

```text
src/
├── assets/              # Global static assets (Brand Logos, Icons)
├── components/          # Shared "dumb" UI (Buttons, Inputs, Cards)
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   └── ...
├── features/            # "Smart" Feature Logic
│   ├── events/          # Event lists, registration forms
│   └── showcase/        # Project gallery logic
├── hooks/               # Global Hooks (useTheme, useAuth)
├── layouts/             # Page Wrappers (MainLayout, AuthLayout)
├── pages/               # Route Entry Points (Home, About, Contact)
├── styles/              # Global Design Tokens
│   ├── variables.css    # <-- M3 Color Tokens go here
│   └── global.css       # Resets and typography
└── utils/               # Helper functions

```

---

## 🏃 Getting Started

**1. Clone the Repo**

```bash
git clone [https://github.com/gdgoc-binus-inter/official-site.git](https://github.com/gdgoc-binus-inter/official-site.git)
cd official-site

```

**2. Install Dependencies**

```bash
npm install

```

**3. Run Development Server**

```bash
npm run dev

```

---

## 🤝 Contribution Workflow

1. **Check Issues:** Look for items tagged `good first issue` or `help wanted` in the [Issues Tab](https://www.google.com/search?q=../../issues).
2. **Branching:**
* `feat/feature-name` (New features)
* `fix/bug-name` (Bug fixes)
* `docs/update-readme` (Documentation)


3. **Commit Messages:** Descriptive and clear.
* `feat: implement navbar structure`
* `fix: correct padding on mobile view`


4. **Pull Request:**
* Push your branch and open a PR to `main`.
* **Self-Review:** Ensure your code follows the **Google JS Style Guide** before requesting review.



---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
<strong>Maintained with ❤️ by the GDGOC Binus International Core Team</strong>
</div>


