# 🚀 Github Repositories Explorer

A modern web application built with **React**, **Vite**, **TypeScript**, and **shadcn/ui**.  
Designed for performance, accessibility, and an elegant developer experience.

[![Live](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://github-repository-explorer-riio.vercel.app/)

![Preview](./public/preview.webp)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## ✨ Tech Stack

- ⚛️ **React** – Declarative UI library
- ⚡️ **Vite** – Lightning-fast build tool
- 🧠 **TypeScript** – Type-safe development
- 🎨 **shadcn/ui** – Beautiful, accessible UI components powered by Tailwind CSS & Radix UI
- ☁️ **Vercel** – Serverless & zero-config deployment

## 📦 Installation

```bash
git clone https://github.com/nicodesauza/github-repository-explorer.git
cd github-repository-explorer
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
