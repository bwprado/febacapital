# Feba Capital - Liva Real Estate Website

A modern, responsive website for Liva real estate company built with Next.js 15 and React 19. The website showcases real estate ventures, provides contact functionality, and features a clean, professional design optimized for both desktop and mobile devices.

## 🏗️ Project Overview

This is a corporate website for Liva, a real estate development company. The site features:

- **Hero Section**: Company introduction with compelling messaging
- **Image Slider**: Showcases real estate projects with interactive navigation
- **Ventures Grid**: Displays available properties with filtering capabilities
- **Contact Form**: Lead generation with consultant integration
- **Responsive Design**: Optimized for all device sizes

## 🚀 Technologies Used

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **CSS Modules** - Scoped styling approach
- **Custom CSS Variables** - Consistent design system
- **Urbane Font Family** - Custom typography
- **Responsive Design** - Mobile-first approach

### Development Tools
- **Biome** - Fast linter and formatter
- **pnpm** - Efficient package manager
- **ESLint/TypeScript** - Code quality and type checking

### Additional Libraries
- **usehooks-ts** - TypeScript-friendly React hooks
- **Next.js Image Optimization** - Automatic image optimization

## 📁 Project Structure

```
febacapital/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── mock/              # Mock data files
│   └── services/          # Data fetching functions
├── components/            # Reusable UI components
│   ├── avatar/           # Avatar component
│   ├── button/           # Button variants
│   ├── contact/          # Contact form
│   ├── filters/          # Filter functionality
│   ├── footer/           # Site footer
│   ├── header/           # Navigation header
│   ├── hero/             # Hero section
│   ├── icons/            # SVG icon components
│   ├── input/            # Form inputs
│   ├── menu/             # Navigation menu
│   ├── slider/           # Image carousel
│   ├── socials/          # Social media buttons
│   ├── ventures/         # Property listings
│   └── whatsapp-button/  # WhatsApp integration
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── fonts/           # Custom font files
│   └── images/          # Image assets
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: #1aa584 (Green)
- **Primary Light**: #76c9b5
- **Background**: #ffffff
- **Foreground**: #000000
- **Typography**: Custom Urbane font family

### Component Architecture
- **Atomic Design**: Components organized by complexity
- **CSS Modules**: Scoped styling for maintainability
- **TypeScript Interfaces**: Strong typing for all props
- **Responsive Breakpoints**: Mobile-first design approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd febacapital
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 📱 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 1024px
- Flexible grid layouts
- Touch-friendly interactions

### Performance
- Next.js Image Optimization
- CSS Modules for efficient styling
- TypeScript for compile-time error checking
- Optimized font loading

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

## 🔧 Code Organization

### Strengths
- **Modular Architecture**: Well-organized component structure
- **Type Safety**: Comprehensive TypeScript usage
- **Consistent Styling**: CSS Modules with design system
- **Clean Separation**: Services, components, and utilities properly separated
- **Modern React**: Uses latest React 19 features and Next.js 15

### Areas for Improvement
- **State Management**: Consider adding global state management for complex interactions
- **Error Handling**: Implement error boundaries and loading states
- **Testing**: Add unit and integration tests
- **SEO**: Implement proper meta tags and structured data
- **Performance**: Add lazy loading for images and components

## 📄 License

This project is private and proprietary to Feba Capital.

## 🤝 Contributing

This is a private project. For any questions or issues, please contact the development team.