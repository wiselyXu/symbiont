# Symbiont

A modern web application template built with Next.js 15, React 19, TypeScript, App Router, and React Server Components. Includes mock APIs, internationalization (i18n), and web3 wallet integration.

## Features

- **Next.js 15** with App Router and React Server Components
- **React 19** with latest features
- **TypeScript** for end-to-end type safety
- **Tailwind CSS** for styling with custom design system
- **Internationalization** with `next-intl`
- **Web3 Wallet** integration ready
- **Mock APIs** for development
- **Modern UI Components** using Headless UI and Radix UI
- **State Management** with Zustand
- **Form Handling** with React Hook Form and Zod validation
- **Data Visualization** with Recharts
- **Testing** with Vitest and Playwright
- **Code Quality** with ESLint, Prettier, and Husky

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd symbiont
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm seed` - Run database seed script

## Project Structure

```
symbiont/
├── app/                    # App Router pages and layouts
│   ├── api/               # API routes
│   ├── components/        # React components
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── utils/            # Helper utilities
├── public/                # Static assets
├── scripts/              # Build and seed scripts
└── ...
```

## Key Technologies

- **Next.js 15** - React framework with App Router and RSC
- **React 19** - Latest React version with new features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **next-intl** - Internationalization
- **Recharts** - Data visualization
- **Headless UI** - Unstyled UI components
- **Radix UI** - Primitives for accessible UI

## Development

### Code Style

- ESLint configuration extends `next/core-web-vitals` and `next/typescript`
- Prettier for code formatting
- Husky for git hooks
- TypeScript strict mode enabled

### Testing

- Unit tests with Vitest
- Component tests with Testing Library
- E2E tests with Playwright

### Internationalization

Uses `next-intl` for multi-language support. Locale files are stored in `messages/` directory.

### API Routes

Mock API routes are available under `app/api/`. These can be replaced with real backend APIs.

## Deployment

The project is configured for deployment on Vercel, but can be deployed to any platform that supports Next.js.

## License

MIT