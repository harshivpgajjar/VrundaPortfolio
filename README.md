# Vrunda Inkwell - Writer Portfolio

A full-stack portfolio website showcasing professional writing work across multiple disciplines including copywriting, poetry, scripting, personal essays, and creative strategy.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL (via Drizzle ORM)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **State Management**: TanStack React Query

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (for production)
- Git

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd VrundaInkwell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory (optional for local dev):
   ```env
   PORT=3000
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   NODE_ENV=development
   ```
   
   **Note**: Port 5000 is often used by macOS AirPlay. The default is now 3000.

4. **Run database migrations** (if using PostgreSQL)
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

   This will:
   - Build the React frontend to `dist/public`
   - Bundle the Express server to `dist/index.js`

2. **Start production server**
   ```bash
   npm start
   ```

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel/Netlify (Frontend) + Railway/Render (Backend)

#### Backend Deployment (Railway/Render)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Railway or Render**
   - Go to [Railway](https://railway.app) or [Render](https://render.com)
   - Connect your GitHub repository
   - Set environment variables:
     - `PORT` (usually auto-set by platform)
     - `DATABASE_URL` (get from your PostgreSQL provider)
     - `NODE_ENV=production`
   - Set build command: `npm run build`
   - Set start command: `npm start`

3. **Set up PostgreSQL Database**
   - Use Neon, Supabase, or Railway's built-in PostgreSQL
   - Copy the connection string to `DATABASE_URL`
   - Run migrations: `npm run db:push`

#### Frontend Deployment (Vercel/Netlify)

If deploying frontend separately:
- Build command: `npm run build`
- Output directory: `dist/public`
- Environment variables: Set `VITE_API_URL` to your backend URL

### Option 2: Full-Stack Deployment (Single Server)

For platforms like **Render**, **Railway**, or **DigitalOcean**:

1. **Push to GitHub** (same as above)

2. **Deploy the full application**
   - Connect your repository
   - Set build command: `npm run build`
   - Set start command: `npm start`
   - Set environment variables:
     - `PORT` (platform will provide)
     - `DATABASE_URL` (your PostgreSQL connection string)
     - `NODE_ENV=production`

3. **Configure your domain**
   - In your hosting platform, add your custom domain
   - Update DNS records as instructed by your platform

## 🔗 Connecting Your Domain

### Step 1: Get Your Deployment URL

After deploying, you'll get a URL like:
- Railway: `your-app.railway.app`
- Render: `your-app.onrender.com`
- Vercel: `your-app.vercel.app`

### Step 2: Configure DNS Records

1. **Go to your domain registrar** (GoDaddy, Namecheap, etc.)

2. **Add DNS records** based on your hosting platform:

   **For Railway:**
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `your-app.railway.app`

   **For Render:**
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `your-app.onrender.com`

   **For Vercel:**
   - Follow Vercel's domain setup wizard
   - Add the domain in Vercel dashboard
   - Update DNS as instructed

3. **Wait for DNS propagation** (can take 24-48 hours)

4. **Configure SSL/HTTPS**
   - Most platforms (Railway, Render, Vercel) automatically provide SSL certificates
   - Ensure HTTPS is enabled in your platform settings

### Step 3: Update Platform Settings

1. **Add your domain** in your hosting platform's dashboard
2. **Enable HTTPS/SSL** (usually automatic)
3. **Set up redirects** (e.g., www to non-www or vice versa)

## 📝 Environment Variables

Create a `.env` file for local development:

```env
# Server Configuration
PORT=3000

# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/database

# Node Environment
NODE_ENV=production
```

**Important**: Never commit `.env` files to Git. They are already in `.gitignore`.

## 🗄️ Database Setup

### For Production:

1. **Choose a PostgreSQL provider:**
   - [Neon](https://neon.tech) - Free tier available
   - [Supabase](https://supabase.com) - Free tier available
   - [Railway](https://railway.app) - PostgreSQL addon
   - [Render](https://render.com) - PostgreSQL service

2. **Get connection string** and add to `DATABASE_URL`

3. **Run migrations:**
   ```bash
   npm run db:push
   ```

## 📁 Project Structure

```
VrundaInkwell/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   └── index.html
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── storage.ts       # Data storage layer
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema
├── attached_assets/     # Static assets
└── dist/                # Build output (generated)
```

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 18+
- Delete `node_modules` and `dist`, then `npm install` again
- Check that all environment variables are set

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check database is accessible from your deployment platform
- Ensure database allows connections from your platform's IP

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate is issued
- Ensure domain is added in hosting platform

## 📄 License

MIT

## 👤 Author

Vrunda Mundhra - Writer and Storyteller

---

For questions or issues, please open an issue on GitHub.

