# Franklin Osede – Professional Personal Portfolio

Modern and dynamic web portfolio built with Next.js 15, React 18, and TypeScript. Features an elegant design with smooth animations, multimedia content integration, and an optimized user experience.

**Next.js** **TypeScript** **React** **TailwindCSS** **Framer Motion** **Three.js**

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [Performance](#performance)
- [Documentation](#documentation)
- [License](#license)

---

## Overview

This personal portfolio is a modern web application designed to showcase professional skills, projects, and educational content. The application is built with cutting-edge technologies and optimized for performance, SEO, and user experience.

### Key Highlights

- **Modern Design**: Elegant interface with dark theme and custom gradients
- **Smooth Animations**: Fluid transitions with Framer Motion and parallax effects
- **Multimedia Content**: YouTube video integration for educational content
- **Responsive Design**: Fully adaptable design for all devices
- **SEO Optimization**: Meta tags and structure optimized for search engines
- **Performance**: Fast loading with Next.js 15 and image optimizations
- **TypeScript**: Type-safe code for greater robustness and maintainability
- **Automatic Deployment**: CI/CD with Vercel for frictionless deployments

---

## Key Features

### Portfolio Sections

1. **Hero Section**
   - Text animation with TypeAnimation
   - Parallax effect with background image
   - Social media links (GitHub, LinkedIn, Email)
   - Technology badges (Blockchain, Full-Stack, DevOps, Cloud, Security)
   - Animated scroll button

2. **Know Me Section**
   - Embedded YouTube presentation video
   - Smooth transitions between sections
   - Centered and responsive design

3. **Knowledge Blocks**
   - Expandable blocks with educational content
   - Embedded YouTube videos organized by categories:
     - Coding Katas
     - DevOps
     - Databases
     - Design Architecture
     - Java & Spring Boot
     - DeFi & Blockchain
   - Interactive interface with animations

4. **About Me Section**
   - Professional description
   - Specialty cards with icons:
     - Blockchain (Web3, Smart Contracts, Security)
     - Software Development (Front-End, Back-End, TDD, Databases)
     - Cloud Architecture (AWS, GCP, Azure)
     - DevOps (CI/CD, Terraform, Docker, Kubernetes)
   - Hover effects and animations

5. **Blog Section**
   - Links to articles published on Medium
   - Interactive cards with hover effects
   - Responsive grid design

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                      │
│              (CDN Global + Edge Functions)                  │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│              Next.js 15 Application                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   App Router │  │   Components │  │   Styling    │      │
│  │   (RSC)      │  │   (React)    │  │ (TailwindCSS)│      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
└─────────┼─────────────────┼─────────────────┼─────────────┘
          │                 │                 │
    ┌─────┴─────┬───────────┴───────────┬─────┴─────┐
    │           │                       │           │
┌───▼───┐ ┌────▼────┐ ┌──────────────┐ ┌─────────▼──┐
│Framer │ │ Three.js│ │  YouTube API │ │  External  │
│Motion │ │  3D     │ │  (Embeds)    │ │  Links     │
└───────┘ └─────────┘ └──────────────┘ └────────────┘
```

### Design Patterns

- **Server Components**: Use of React Server Components for better performance
- **Client Components**: Interactive components marked with `'use client'`
- **Component Composition**: Modular and reusable architecture
- **Progressive Enhancement**: Basic functionality without JavaScript
- **Lazy Loading**: On-demand loading of heavy components

---

## Technology Stack

### Frontend

- **Next.js 15.1.5**: React framework with App Router and Server Components
- **React 18.2.0**: UI library with modern hooks
- **TypeScript 5**: Static typing for greater safety
- **TailwindCSS 3.4.17**: Utility-first CSS framework
- **Framer Motion 11.18.1**: Animation library
- **React Parallax 3.5.1**: Parallax effects
- **React Type Animation 3.2.0**: Text animations
- **Lucide React 0.473.0**: Modern and lightweight icons

### 3D and Graphics

- **Three.js 0.172.0**: 3D library
- **@react-three/fiber 8.17.12**: React renderer for Three.js
- **@react-three/drei 9.121.2**: Helpers and abstractions for Three.js

### Development Tools

- **ESLint 9**: Linter for code quality
- **PostCSS 8.5.1**: CSS processor
- **Autoprefixer 10.4.20**: Cross-browser compatibility

### TailwindCSS Plugins

- **@tailwindcss/forms**: Form styles
- **@tailwindcss/typography**: Typography styles
- **@tailwindcss/aspect-ratio**: Aspect ratio utilities

### Deployment

- **Vercel**: Hosting platform and CI/CD
- **GitHub Actions**: Automation (optional)

---

## Project Structure

```
Portfolio-Nextjs/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Main page
│   │   ├── globals.css           # Global styles
│   │   ├── error.tsx             # Error page
│   │   └── not-found.tsx         # 404 page
│   │
│   ├── components/                # React components
│   │   ├── HeroSection.tsx       # Hero section with parallax
│   │   ├── KnowMeSection.tsx     # Presentation section
│   │   ├── KnowledgeBlocks.tsx   # Knowledge blocks
│   │   ├── AboutMeSection.tsx    # About me section
│   │   ├── BlogSection.tsx       # Blog section
│   │   └── ClientOnly.tsx        # Wrapper for client components
│   │
│   └── types/                    # TypeScript definitions
│       ├── react-parallax.d.ts   # Types for react-parallax
│       └── tailwind-plugins.d.ts # Types for Tailwind plugins
│
├── public/                        # Static files
│   └── favicon.png               # Site favicon
│
├── .github/                       # GitHub configuration (optional)
│   └── workflows/                # GitHub Actions workflows
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── postcss.config.js             # PostCSS configuration
├── vercel.json                   # Vercel configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

---

## Installation

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: To clone the repository

### Installation Steps

1. **Clone the repository**

```bash
git clone git@github.com:Franklin-Osede/Portfolio-Nextjs.git
cd Portfolio-Nextjs
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** (if needed)

```bash
# Create .env.local file if you need environment variables
touch .env.local
```

4. **Start development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:3000
```

---

## Development

### Available Scripts

```bash
# Development with Turbopack (faster)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linter
npm run lint
```

### Local Development

The project uses **Turbopack** for fast development. Changes are automatically reflected with Hot Module Replacement (HMR).

### Component Structure

Components are organized by sections:

- **HeroSection**: Main section with animations
- **KnowMeSection**: Presentation video
- **KnowledgeBlocks**: Expandable educational content
- **AboutMeSection**: Professional information
- **BlogSection**: Article links

### Style Customization

Main colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  darkBlue: '#050a30',
  navyBlue: '#000c66',
  turquoiseBlue: '#00b4d8',
  skyBlue: '#90e0ef',
  accentGlow: '#00509d',
}
```

### Animations

Animations use **Framer Motion** with custom configurations:

- **Entry**: `initial`, `animate`, `transition`
- **Scroll**: `whileInView`, `viewport`
- **Hover**: `whileHover`, `whileTap`

---

## Deployment

### Deploy to Vercel

The project is configured to automatically deploy on Vercel.

#### Option 1: From Terminal

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

#### Option 2: From Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import repository: `Franklin-Osede/Portfolio-Nextjs`
5. Vercel will automatically detect Next.js
6. Configure custom domain if needed
7. Click "Deploy"

### Domain Configuration

If you already have the domain `www.franklin-osede-prieto.com` configured in Vercel, it will automatically deploy.

### Automatic Deployment

Every push to the `main` branch will automatically deploy to production thanks to Vercel integration.

### Vercel Configuration

The `vercel.json` file contains the configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

---

## Customization

### Modify Content

1. **Personal Information**
   - Edit `src/app/layout.tsx` to change metadata
   - Modify `src/components/HeroSection.tsx` to change name and titles

2. **Social Media**
   - Update links in `HeroSection.tsx`:
   ```typescript
   { icon: Github, href: 'your-github-url' },
   { icon: Linkedin, href: 'your-linkedin-url' },
   { icon: Mail, href: 'mailto:your-email' },
   ```

3. **Educational Videos**
   - Edit `src/components/KnowledgeBlocks.tsx` to add/modify blocks
   - Update `blocks` and `visibleBlocks` arrays

4. **Blog Articles**
   - Modify `src/components/BlogSection.tsx` to add new posts

5. **Colors and Theme**
   - Customize `tailwind.config.ts` to change color palette
   - Adjust `src/app/globals.css` to modify global styles

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add in `src/app/page.tsx`
3. Configure animations with Framer Motion

---

## Performance

### Implemented Optimizations

- **Next.js 15**: App Router with Server Components for better performance
- **Code Splitting**: Automatic code loading by route
- **Image Optimization**: Automatic image optimization with Next.js Image
- **Font Optimization**: Google fonts optimized with `next/font`
- **Lazy Loading**: Components loaded on demand
- **Static Generation**: Static pages when possible

### Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Lighthouse Score

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## Documentation

### Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Development Guides

- **Add a new section**: See [Customization](#customization) section
- **Modify animations**: Consult Framer Motion documentation
- **Change colors**: Edit `tailwind.config.ts`

---

## Testing

### Testing Strategy

The project is prepared to add tests:

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Next.js Testing
- **E2E Tests**: Playwright or Cypress

### Run Tests (when implemented)

```bash
# Unit tests
npm run test

# Tests in watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

---

## Roadmap

### Completed

- Portfolio with modern design
- YouTube video integration
- Animations with Framer Motion
- Parallax effects
- Responsive design
- Vercel deployment
- SEO optimization
- Complete TypeScript

### In Progress

- Test implementation
- Image optimization
- Analytics integration

### Planned

- Light/dark mode toggle
- Internationalization (i18n)
- Blog with MDX
- Project portfolio with filters
- Functional contact form
- Headless CMS integration

---

## Contributing

This is a personal project. For suggestions or improvements, please:

1. Open an Issue on GitHub
2. Describe the improvement or problem
3. Wait for feedback before creating a PR

---

## License

This project is for personal use. All rights reserved.

---

## Contact

**Franklin Osede**

- **GitHub**: [@Franklin-Osede](https://github.com/Franklin-Osede)
- **LinkedIn**: [Franklin Osede](https://www.linkedin.com/in/franklinosede)
- **Email**: franklin.op@hotmail.com
- **Portfolio**: [www.franklin-osede-prieto.com](https://www.franklin-osede-prieto.com)

---

## Acknowledgments

- Next.js team for the excellent framework
- Vercel for the hosting platform
- The open source community for the incredible libraries used

---

**Developed by Franklin Osede**
