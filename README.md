# PlayStation Portfolio

React + Vite portfolio project with Tailwind CSS v4.

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Tailwind Setup (v4)

This project uses Tailwind v4 with the Vite plugin.

### Required config

- `vite.config.js` includes:

```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- `src/index.css` includes:

```css
@import "tailwindcss";
```

### Important

- Do not run `npx tailwindcss init -p` for this setup.
- Do not use legacy directives like `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` in this project.

## Common Troubleshooting

- If classes are not applying, restart the dev server after config changes:

```bash
npm run dev
```

- If VS Code warns `Unknown at rule @tailwind`, you are likely using old syntax. Use:

```css
@import "tailwindcss";
```