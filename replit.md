# replit.md

## Overview

This is a full-stack web application for Vrunda Mundhra's writer portfolio website. The application showcases her professional writing work across multiple disciplines including copywriting, poetry, scripting, personal essays, and creative strategy. It features an immersive dark academia aesthetic with atmospheric design elements, advanced animations, and interactive features that create a sophisticated, library-like experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monolithic full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React.js with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage for development)
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Single-node deployment with static file serving

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with extensive custom CSS variables for dark academia theming
- **Animation**: Framer Motion for sophisticated animations, typewriter effects, and interactive elements
- **Form Handling**: React Hook Form with Zod validation
- **Advanced Features**: 
  - Reading progress indicator
  - Cursor trail effects
  - Typewriter text animations
  - Portfolio modal system
  - Theme toggle (dark/light modes)
  - Scroll-to-top functionality

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Data Layer**: Abstracted storage interface (IStorage) with in-memory implementation
- **Validation**: Zod schemas for request validation
- **Development**: Hot reloading with Vite integration

### Database Schema
The application uses Drizzle ORM with PostgreSQL schema definitions:
- **Users table**: Basic user authentication structure (id, username, password)
- **Contacts table**: Contact form submissions (id, name, email, projectType, message, createdAt)

## Data Flow

1. **Frontend to Backend**: API calls through React Query using fetch with JSON payloads
2. **Backend Processing**: Express routes handle requests, validate with Zod, and interact with storage layer
3. **Storage Layer**: Abstracted interface allows switching between in-memory (development) and database (production)
4. **Response Flow**: Structured JSON responses with consistent error handling

## External Dependencies

### Core Framework Dependencies
- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Database**: Drizzle ORM, @neondatabase/serverless (Neon PostgreSQL)
- **UI Components**: Radix UI primitives via shadcn/ui
- **Validation**: Zod for schema validation
- **Forms**: React Hook Form with resolvers
- **Animations**: Framer Motion
- **State Management**: TanStack React Query

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict configuration with path mapping
- **Linting/Formatting**: ESBuild for production builds
- **Database Migrations**: Drizzle Kit

## Deployment Strategy

The application is designed for simple deployment with the following approach:

1. **Build Process**:
   - Frontend: Vite builds React app to `dist/public`
   - Backend: ESBuild bundles Express server to `dist/index.js`

2. **Production Setup**:
   - Single Node.js process serves both API and static files
   - Environment variables for database connection (DATABASE_URL)
   - Static file serving for production builds

3. **Database**:
   - Development: In-memory storage for rapid prototyping
   - Production: PostgreSQL via Neon Database with connection pooling
   - Migrations: Drizzle Kit for schema management

4. **Environment Configuration**:
   - Development: Local development server with HMR
   - Production: Optimized builds with static file serving

The architecture supports easy scaling by separating the storage layer and using environment-based configuration for different deployment targets.

## Recent Changes (January 30, 2025)

### Dark Academia Transformation
- **Complete Color Palette Overhaul**: Implemented authentic dark academia colors including deep charcoal, warm parchment, antique gold, and burnished copper
- **Typography Enhancement**: Added Playfair Display and Crimson Text fonts for elegant serif typography
- **Theme System**: Implemented comprehensive light/dark theme toggle with proper CSS variable management
- **Visual Textures**: Added vintage paper textures, manuscript borders, and parchment effects

### Advanced Interactive Features
- **Reading Progress Bar**: Real-time scroll progress indicator with gradient styling
- **Cursor Trail Effects**: Animated particle trail following mouse movement
- **Typewriter Animations**: Dynamic text typing effects in hero section
- **Portfolio Modal System**: Detailed project view with expanded information, metadata, and external links
- **Scroll-to-Top Button**: Smooth animated scroll functionality
- **Enhanced Navigation**: Theme toggle integration and improved mobile experience

### User Experience Improvements
- **Atmospheric Background**: Library-themed imagery with dark academia overlays
- **Floating Elements**: Subtle animated book and feather icons
- **Glow Effects**: Hover states with golden glow animations
- **Enhanced Forms**: Dark-themed form inputs with proper contrast and accessibility
- **Responsive Design**: Optimized for all device sizes with dark academia consistency

### Technical Enhancements
- **CSS Architecture**: Comprehensive custom utility classes for dark academia elements
- **Animation Library**: Advanced Framer Motion implementations for smooth interactions
- **Component Organization**: Modular approach with dedicated components for each advanced feature
- **Performance Optimization**: Efficient scroll listeners and animation management