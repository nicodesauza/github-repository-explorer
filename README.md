# 🚀 Github Repositories Explorer

A modern web application built with **React**, **Vite**, **TypeScript**, and **shadcn/ui**.  
Designed for performance, accessibility, and an elegant developer experience.

![Preview](./public/preview.webp)

[![Vercel Deployment](https://vercel.com/button)](https://vercel.com/import/project?template=vite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## ✨ Tech Stack

- ⚛️ **React** – Declarative UI library
- ⚡️ **Vite** – Lightning-fast build tool
- 🧠 **TypeScript** – Type-safe development
- 🎨 **shadcn/ui** – Beautiful, accessible UI components powered by Tailwind CSS & Radix UI
- ☁️ **Vercel** – Serverless & zero-config deployment

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
yarn install
```

## 💻 Develpment

```bash
yarn dev
```

## 🏗️ Build

```bash
yarn build
```

## 🚀 Deployment (Vercel)

```bash
🔁 Auto Deploy via GitHub
Push your project to GitHub.

Go to https://vercel.com/import

Select your repository.

Vercel will auto-detect Vite & set:

Framework Preset: Vite

Build Command: yarn build

Output Directory: dist

Click Deploy 🚀
```

## 📁 Project Structure

```bash
src/
├─ components/     # Reusable UI components (including shadcn)
├─ pages/          # Page-level components (if using routing)
├─ hooks/          # Custom React hooks
├─ lib/            # Utilities, API clients, helpers
├─ App.tsx         # Main app wrapper
└─ main.tsx        # Vite entry point
```

## 🧪 Unit Testing

```bash
This project includes unit tests to ensure code reliability and maintainability.

📦 Tech Stack
Jest – JavaScript Testing Framework

React Testing Library – For testing React components

🚀 Running Tests

# Run all unit tests
yarn test

```

## 🧪 Writing a New Test

```bash
Place your test files alongside your components or inside a __tests__ directory, using .test.tsx or .test.ts suffix.

Example: my-component.test.tsx

import { render, screen } from '@testing-library/react';
import MyComponent from './my-component';

test('renders the correct text', () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});

```

## 💅 Using shadcn/ui

This project integrates shadcn/ui for accessible, elegant UI components.
To add a new component:

```bash
npx shadcn-ui@latest add button
```
