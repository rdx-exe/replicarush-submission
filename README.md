# Agency.io - Digital Agency Landing Page

A modern, responsive landing page for a digital agency built with Next.js 16, React 19, and Tailwind CSS v4. This project showcases a clean, professional design with smooth animations and a component-based architecture.

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 App Router and React 19
- **Responsive Design**: Fully responsive across all device sizes
- **Component Library**: Pre-built UI components using Radix UI primitives
- **Type Safety**: Full TypeScript support throughout the codebase
- **Styling**: Tailwind CSS v4 with custom animations via `tw-animate-css`
- **Font Optimization**: Google Fonts (Geist, Poppins) with Next.js font optimization

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI, shadcn/ui |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Language | TypeScript 5 |

## 🏗️ Project Structure

```
├── app/
│   ├── components/        # Page-specific components
│   │   ├── cta.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── how-we-work.tsx
│   │   ├── legacy-codebase.tsx
│   │   ├── services.tsx
│   │   ├── tailored-stage.tsx
│   │   └── why-choose-us.tsx
│   ├── fonts.tsx          # Font configuration
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   │   └── button.tsx
│   ├── cta.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── how-we-work.tsx
│   ├── legacy-codebase.tsx
│   ├── tailored-stage.tsx
│   └── why-choose-us.tsx
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind configuration (v4)
└── tsconfig.json          # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd replicarush-submission
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Page Sections

1. **Header** - Fixed navigation with logo, nav links, and CTA button
2. **Hero** - Main banner with headline, description, and action buttons
3. **Legacy Codebase** - Benefits section with feature list and visual
4. **Tailored Stage** - Cards for Startups and Enterprises
5. **How We Work** - 3-step process timeline (Explore, Design, Build)
6. **Why Choose Us** - Comparison table (Agencies vs Freelancers vs Agency.io)
7. **CTA** - Call-to-action section
8. **Footer** - Company info, links, and newsletter signup

## 🎯 Key Components

### UI Components (shadcn/ui)
- `Button` - Customizable button with multiple variants and sizes

### Layout Components
- `Header` - Fixed navigation bar
- `Footer` - Site footer with newsletter

### Section Components
- `Hero` - Landing page hero section
- `LegacyCodebase` - Feature highlights
- `TailoredStage` - Service cards
- `HowWeWork` - Process timeline
- `WhyChooseUs` - Comparison table
- `CTA` - Call-to-action banner

## 🔧 Configuration

### Tailwind CSS v4
This project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin. Custom CSS variables are defined in `app/globals.css` for theming support.

### TypeScript
Strict mode is enabled with path aliases configured:
- `@/*` maps to the project root

## 📄 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a submission project. For any questions or issues, please contact the project maintainer.