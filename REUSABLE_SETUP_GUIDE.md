# React + TypeScript + Tailwind CSS v4 (Vite)

A start-to-finish setup with ESLint flat config, Prettier, Husky, lint-staged, and a minimal app.

## 0) Prereqs

- Node 20+ and npm 10+

## 1) Create project

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
git init
npm install
```

## 2) Install dev tools + Tailwind v4 (Vite plugin)

```bash
npm install -D \
  eslint @eslint/js globals typescript-eslint \
  eslint-plugin-react-hooks eslint-plugin-react-refresh \
  eslint-plugin-prettier eslint-config-prettier \
  prettier husky lint-staged \
  tailwindcss @tailwindcss/vite
```

## 3) Vite + Tailwind config

```bash
cat > vite.config.ts <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
EOF

cat > src/index.css <<'EOF'
@import "tailwindcss";
EOF
```

## 4) ESLint flat config

```bash
cat > eslint.config.js <<'EOF'
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
])
EOF
```

## 5) Prettier config

```bash
cat > .prettierrc.json <<'EOF'
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
EOF
```

## 6) lint-staged config (writes to package.json)

```bash
node -e "const fs=require('fs');const p='package.json';const pkg=JSON.parse(fs.readFileSync(p,'utf8'));pkg['lint-staged']={'*.{js,jsx,ts,tsx,json,css,md}':['eslint --fix','prettier --write']};fs.writeFileSync(p,JSON.stringify(pkg,null,2)+'\n');"
```

## 7) Husky pre-commit hook

```bash
npx husky init
cat > .husky/pre-commit <<'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
EOF
```

## 8) Minimal app files

```bash
cat > README.md <<'EOF'
# my-app

Minimal React + TypeScript + Vite setup.
EOF

cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

cat > src/App.tsx <<'EOF'
export default function App() {
  return <main />
}
EOF

cat > src/App.css <<'EOF'
EOF
```

## 9) .gitignore

```bash
cat > .gitignore <<'EOF'
# Node/Vite
node_modules
dist
dist-ssr

# Logs
logs
*.log
npm-debug.log*

# Env
.env
.env.*
!.env.example

# OS
.DS_Store

# Editor
.vscode/*
!.vscode/extensions.json
.idea
EOF
```

## 10) Run

```bash
npm run dev
```
