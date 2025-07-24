# ProKai Landing Page Application

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), designed as a landing page for ProKai - an AI-powered exam preparation service. The application features a modern, responsive design with purple/pink theming and animated components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for complex animations and interactions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema migrations
- **Connection**: @neondatabase/serverless for Postgres connectivity

## Key Components

### Frontend Components
- **Landing Page**: Main home page with animated sections
- **UI Components**: Comprehensive set of reusable components from shadcn/ui
- **Custom Components**: 
  - AnimatedCounter for number animations
  - FloatingElements for background animations
  - Various UI primitives (buttons, cards, forms, etc.)

### Backend Components
- **Server Setup**: Express server with middleware for JSON parsing and logging
- **Route Registration**: Modular route system (currently minimal)
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Vite Integration**: Development server integration with Vite middleware

### Theming System
- **Color Scheme**: Purple/pink gradient theme with dark background
- **CSS Variables**: Extensive use of CSS custom properties for theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Current State
- **Static Frontend**: Landing page with animated components and mock data
- **Minimal Backend**: Basic Express setup with storage interface
- **No Authentication**: Currently no user authentication system
- **In-Memory Storage**: Temporary storage implementation for development

### Planned Data Flow
- API endpoints for user management and exam data
- Database persistence for user accounts and progress
- Real-time features for interactive learning

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM, Neon Postgres driver
- **Animations**: Framer Motion for complex animations
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Specialized plugins for Replit environment

### External Services
- **Database**: Configured for Neon PostgreSQL service
- **Fonts**: Google Fonts (Inter family)
- **Icons**: Lucide React icon library

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API
- **Hot Reloading**: Vite middleware integration for seamless development
- **Database**: Environment variable configuration for database URL

### Production Build
- **Frontend**: Vite production build to `dist/public`
- **Backend**: esbuild bundle to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Environment**: NODE_ENV-based configuration

### Database Management
- **Schema**: Shared schema definition in `shared/schema.ts`
- **Migrations**: Drizzle migrations in `./migrations` directory
- **Push Command**: `npm run db:push` for schema deployment

### Configuration
- **TypeScript**: Shared configuration across client/server/shared code
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **PostCSS**: Tailwind processing with autoprefixer
- **Component System**: shadcn/ui configuration in `components.json`

## Architecture Notes

The application follows a monorepo structure with clear separation between client, server, and shared code. The current implementation focuses heavily on the frontend experience with a minimal backend that can be expanded. The database layer is properly architected with Drizzle ORM but currently uses in-memory storage for development purposes.

The UI system is built on a solid foundation of design tokens and reusable components, making it easy to maintain consistency and expand functionality. The animation system provides engaging user interactions while maintaining performance.