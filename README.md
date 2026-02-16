
# 🚀 GDG on Campus Binus International

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
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

## ⚡ Quick Start

Get up and running in less than 2 minutes.

```bash
# 1. Clone the repository
git clone https://github.com/gdgoc-binus-inter/official-site.git
cd official-site

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the app.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run lint` | Checks code for style violations (Google Style Guide). |
| `npm run preview` | Locally preview the production build. |

---

## ⚖️ Linting & Code Style

We strictly enforce the **[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)** via ESLint. Use `npm run lint` to check your code.

**Key Rules:**
- **Indentation:** 2 spaces (no tabs).
- **Quotes:** Single quotes `'` for strings.
- **Semicolons:** Required at the end of every statement.
- **Exports:** Prefer **Named Exports** (`export function Home()`) over default exports.
- **Trailing Commas:** Required in multi-line objects/arrays.

---

## 🛠 Tech Stack

We use a modular stack optimized for SEO and Developer Experience (DX).

| Component | Tech | Note |
| :--- | :--- | :--- |
| **Core** | **React 19 (Vite)** | Fast HMR and build times. |
| **Language** | **JavaScript (ES Modules)** | Following Google Style Guide. |
| **Styling** | **M3 Variables + Global CSS** | Design tokens defined in `src/styles/variables.css`. |
| **UI System** | **Material Design 3** | Implementation via CSS variables (Colors/Typography). |
| **Routing** | **React Router v7** | Client-side navigation. |

---

## 📂 Project Structure

We adhere to a **Feature-Based** directory structure.

```text
src/
├── assets/              # Global static assets (Brand Logos, Icons)
├── components/          # Shared "dumb" UI (Buttons, Inputs, Cards)
├── features/            # "Smart" Feature Logic (Stateful widgets)
├── hooks/               # Global Custom Hooks (useTheme, useAuth)
├── layouts/             # Page Wrappers (MainLayout, AuthLayout)
├── pages/               # Route Entry Points (Home, About, Contact)
├── styles/              # Global Styles & Tokens
│   ├── variables.css    # <-- M3 Color Tokens & Typography
│   └── global.css       # Resets and global utility classes
└── utils/               # Helper functions
```

---

## 🤝 Contribution Workflow

1. **Check Issues:** Look for items tagged `good first issue` or `help wanted`.
2. **Branching:**
    * `feat/feature-name` (New features)
    * `fix/bug-name` (Bug fixes)
    * `docs/update-readme` (Documentation)
3. **Commit Messages:** Descriptive and clear (e.g., `feat: implement navbar structure`).
4. **Pull Request:**
    * Push your branch and open a PR to `main`.
    * **Self-Review:** Ensure your code passes `npm run lint` before requesting review.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
<strong>Maintained with ❤️ by the GDGOC Binus International Core Team</strong>
</div>
