# Bridgit-AI Copilot Instructions

## Project Overview

**Bridgit-AI** is a Next.js 16 application that provides AI-powered search widgets for websites. The project is a marketing landing page showcasing embeddable search components that can be integrated into any website with a single script tag. The application demonstrates various search widget styles and provides information about the Bridgit-AI service.

### Tech Stack Summary
- **Framework**: Next.js 16.0.7 with Turbopack
- **Language**: TypeScript 5.x
- **UI Framework**: React 19.2.0 with shadcn/ui components
- **Styling**: Tailwind CSS 4.x with custom design system
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Repository Structure

### Root Configuration Files
- `package.json` - Dependencies and scripts (type: module)
- `tsconfig.json` - TypeScript configuration with strict mode
- `next.config.mjs` - Next.js config (ignores build errors, unoptimized images)
- `components.json` - shadcn/ui configuration (New York style, RSC enabled)
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `eslint.config.js` - ESLint flat config (currently problematic)
- `pnpm-lock.yaml` - Locked dependency versions

### Core Application Structure
```
app/
├── globals.css          # Global styles with CSS variables and dark mode
├── layout.tsx          # Root layout with fonts, metadata, analytics
├── loading.tsx         # Loading UI
└── page.tsx           # Main home page component

components/
├── ui/                # shadcn/ui component library (50+ components)
├── hero.tsx           # Main hero section with CTA
├── navigation.tsx     # Header with logo and navigation
├── search-showcase.tsx # Key component - displays search widget styles
├── features.tsx       # Features section
├── how-it-works.tsx   # Process explanation
├── use-cases.tsx      # Use case examples
├── pricing.tsx        # Pricing information
├── faq.tsx           # FAQ section
├── footer.tsx         # Footer component
└── theme-provider.tsx # Dark mode support

lib/
└── utils.ts          # Utilities (cn function for className merging)

hooks/
├── use-mobile.ts     # Mobile detection hook
└── use-toast.ts      # Toast notifications

public/
└── images/          # Static assets and images

styles/
└── globals.css      # Alternative global styles location
```

## Build & Development Commands

### Essential Commands (Validated Working)

1. **Install Dependencies** ⚠️ ALWAYS run this first
   ```bash
   pnpm install
   ```
   - Uses pnpm for faster installs
   - May show warnings about ignored build scripts (safe to ignore)
   - Installs 200+ packages including all shadcn/ui components

2. **Development Server** ✅ Works perfectly
   ```bash
   pnpm run dev
   ```
   - Starts on http://localhost:3000
   - Uses Turbopack for fast rebuilds
   - Hot reload enabled

3. **Production Build** ✅ Works perfectly
   ```bash
   pnpm run build
   ```
   - Creates optimized production build
   - Skips TypeScript validation (configured in next.config.mjs)
   - Build time: ~6 seconds
   - Generates static pages

4. **Production Start** ✅ Available
   ```bash
   pnpm run start
   ```
   - Serves production build (requires build first)

### Commands with Issues

5. **Linting** ❌ Currently broken
   ```bash
   pnpm run lint
   ```
   **Issue**: ESLint 9 flat config has circular dependency problems with next/core-web-vitals
   **Workaround**: Manually review code or temporarily disable linting
   **Fix needed**: Proper ESLint 9 compatible configuration

## Architecture & Key Components

### Design System
- **shadcn/ui**: Comprehensive component library with 50+ components
- **New York style**: Clean, modern design variant
- **CSS Variables**: Custom properties for theming
- **Dark Mode**: Full support with theme switching
- **Tailwind CSS 4.x**: Latest version with new features

### Critical Components for Search Functionality

1. **SearchShowcase** (`components/search-showcase.tsx`)
   - **MOST IMPORTANT COMPONENT** for the application
   - Contains 9 different search widget styles:
     - Floating Bubble, Glassmorphism, Gradient Border
     - Neumorphic, Command Palette, Bubble Tags
     - Compact Bar, Minimal Underline, Icon Toggle
   - Each style is a separate React component
   - Interactive preview functionality
   - Focus on this component for search-related changes

2. **Hero** (`components/hero.tsx`)
   - Main value proposition and CTA
   - Script tag copy functionality
   - Primary conversion point

3. **Navigation** (`components/navigation.tsx`)
   - Fixed header with logo and navigation
   - Mobile responsive with hamburger menu

### Development Guidelines

#### Component Patterns
- All components use "use client" for client-side features
- Consistent TypeScript with proper type annotations
- shadcn/ui components imported from `@/components/ui/`
- Utility classes managed through `cn()` function
- Responsive design with mobile-first approach

#### Styling Standards
- Tailwind utility classes preferred
- Dark mode using CSS variables
- Consistent spacing and color schemes
- Glass morphism and gradient effects for modern look

## Environment Setup Requirements

### Prerequisites
- **Node.js**: Compatible with Next.js 16 (Node 18.17.0 or later)
- **pnpm**: Package manager (install with `npm install -g pnpm`)

### Validated Setup Process
1. Clone repository
2. Run `pnpm install` (required before any other command)
3. Run `pnpm run dev` for development
4. Access http://localhost:3000

## Validation & Testing

### Manual Testing Checklist
- [ ] All search widget styles render correctly
- [ ] Navigation works on desktop and mobile
- [ ] Dark mode toggle functions properly
- [ ] Copy functionality works in hero section
- [ ] Responsive design works across screen sizes
- [ ] Build process completes without errors

### No Automated Tests
- Project currently has no test suite
- No Jest, Vitest, or other testing frameworks configured
- Manual testing required for validation

## Common Pitfalls & Solutions

### Build Issues
1. **Module type errors**: Package.json is set to "type": "module"
2. **ESLint failures**: Skip linting temporarily due to config issues
3. **Type errors**: TypeScript build errors are ignored in production

### Development Workflow
1. **Always install dependencies first**: `pnpm install` before any development
2. **Use Turbopack**: Development server uses Turbopack for speed
3. **Check console**: Browser console for React warnings/errors

### Component Development
1. **Use existing shadcn/ui components**: Don't recreate basic UI elements
2. **Follow the search showcase pattern**: When adding new search widgets
3. **Maintain responsive design**: Test on multiple screen sizes
4. **Preserve dark mode support**: Ensure new components work in both themes

## Key Files for Agent Reference

### Priority 1 - Search Functionality
- `components/search-showcase.tsx` - Core search widget demonstrations
- `components/hero.tsx` - Main conversion component

### Priority 2 - Layout & Navigation  
- `app/layout.tsx` - App-wide configuration
- `components/navigation.tsx` - Header and navigation
- `app/page.tsx` - Main page structure

### Priority 3 - Styling & Configuration
- `app/globals.css` - Design system variables
- `components.json` - shadcn/ui configuration
- `lib/utils.ts` - Utility functions

## Windows Development Notes

- Uses PowerShell as default shell
- File paths use backslashes
- pnpm works correctly on Windows
- Next.js Turbopack compatible with Windows

---

**Instructions Summary**: Focus development on search widget functionality using existing shadcn/ui components. Always install dependencies first, avoid linting until config is fixed, and prioritize the SearchShowcase component for search-related features. The application successfully builds and runs but requires manual testing due to lack of automated test suite.