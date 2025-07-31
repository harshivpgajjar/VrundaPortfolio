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

## Recent Changes (January 31, 2025)

### Complete Design Transformation to Minimal Experimental Style
- **Template Redesign**: Complete transformation from dark academia to minimal experimental design inspired by eloyb.design
- **Typography Overhaul**: Switched to monospace fonts with ASCII-style vertical text layouts
- **Color Scheme**: Changed from midnight academia to clean black/white minimal aesthetic
- **Layout Structure**: Implemented ultra-minimal design with lots of white space and experimental typography
- **Personal Information Integration**: Added Vrunda Mundhra's professional details, contact information, and mission statement

### New Component Architecture
- **MinimalHero**: Clean hero section with vertical ASCII-style text treatment and personal bio
- **MinimalNavigation**: Simple fixed navigation with monospace typography
- **MinimalWork**: Work categories displayed in grid format with project listings
- **MinimalAbout**: Structured about section with expertise and approach details
- **MinimalContact**: Clean contact section with email interaction and copy functionality

### Content Integration
- **Professional Title**: "Writer and Storyteller"
- **Contact Email**: vrunda.mundhra23@gmail.com
- **Mission Statement**: Comprehensive bio highlighting Mass Media background and storytelling expertise
- **Work Categories**: Organized into Copywriting, Storytelling, Scriptwriting, and Creative Strategy
- **Expertise Areas**: Writing, Digital Media, Strategic Communication focus

### User Experience Features
- **Smooth Scrolling**: Navigation between sections with smooth scroll behavior
- **Interactive Elements**: Hover effects on work items and buttons
- **Email Functionality**: Direct mailto links and copy-to-clipboard functionality
- **Responsive Design**: Mobile-optimized minimal layout
- **Clean Animations**: Subtle fade-in animations using Framer Motion

### Blog System Implementation (January 31, 2025)
- **Complete Blog Architecture**: Full-stack blog system with markdown support and content management
- **Database Schema**: BlogPost entity with title, slug, content, tags, publish status, and timestamps
- **Markdown Rendering**: ReactMarkdown with GitHub Flavored Markdown and syntax highlighting
- **Sample Content**: Pre-populated with professional writing samples about storytelling, copywriting, and personal essays
- **Blog Navigation**: Integrated blog section in main navigation and dedicated blog pages
- **SEO-Friendly URLs**: Slug-based routing for individual blog posts (/blog/post-slug)
- **Reading Experience**: Optimized typography and layout for long-form content consumption
- **Content Organization**: Tag-based categorization and reading time estimates

### Homepage Transformation with Grunge Aesthetic (January 31, 2025)
- **Dramatic Hero Section**: Full-screen vintage TV monitors background image with immersive visual impact
- **Typography Update**: "The World Through My Lens" displayed in elegant font style - removed "Tainted" for cleaner messaging
- **Advanced Text Effects**: Multiple shadow layers, skewing, rotation, and animations for professional aesthetic
- **Interactive Stickers**: Animated sparkle ✨ and disco ball 🪩 stickers with rotating animations and color-changing effects
- **Responsive Text Sizing**: Optimized text sizes for better visibility and readability
- **Enhanced Visual Effects**: Drop shadows, contrast filters, and webkit text stroke for professional aesthetic
- **Mobile Optimization**: Responsive positioning for stickers and text across all device sizes

### Work Section Expansion (January 31, 2025)
- **Comprehensive Categories**: Complete reorganization with 9 distinct work categories
- **Professional Projects**: SHORT FILM, YOUTUBE SCRIPTS FOR KOTAK 811, PRESS RELEASE ARTICLES with publication logos
- **Creative Work**: POETRY, STORYTELLING, SCRIPTWRITING with Google Drive integration
- **Academic Projects**: MAGAZINE (InDesign college project), RADIO PROJECT (15-min college show)
- **Writing Portfolio**: BLOGS AND ARTICLES folder with comprehensive content collection
- **Interactive Elements**: Video thumbnails, document icons, folder displays, and external link integration
- **Navigation Updates**: Removed BLOG tab, consolidated content under work categories