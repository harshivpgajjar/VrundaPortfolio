# replit.md

## Overview

This is a full-stack web application for a writer's portfolio website. The application showcases a professional writer's work, including copywriting, poetry, scripting, and creative strategy. It features a modern, elegant design with a "dark academia" aesthetic and includes a contact form for potential clients to reach out.

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
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animation**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

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