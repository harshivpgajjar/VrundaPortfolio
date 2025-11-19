# Step-by-Step Deployment Guide

## Part 1: Prepare and Commit Your Code

### Step 1: Stage All Changes
```bash
git add .
```

### Step 2: Commit Your Changes
```bash
git commit -m "Remove Replit dependencies, fix port configuration, and prepare for production deployment"
```

---

## Part 2: Create GitHub Repository

### Step 1: Go to GitHub
1. Open your browser and go to: **https://github.com**
2. Sign in to your account (or create one if you don't have it)

### Step 2: Create New Repository
1. Click the **"+"** icon in the top right corner
2. Select **"New repository"**

### Step 3: Repository Settings
Fill in the details:
- **Repository name**: `VrundaInkwell` (or your preferred name)
- **Description**: "Writer Portfolio Website - Full-stack portfolio showcasing professional writing work"
- **Visibility**: 
  - Choose **Public** (if you want it visible)
  - Or **Private** (if you want it private)
- **DO NOT** check:
  - ❌ Add a README file (we already have one)
  - ❌ Add .gitignore (we already have one)
  - ❌ Choose a license (you can add later if needed)

4. Click **"Create repository"**

### Step 4: Copy Repository URL
After creating, GitHub will show you a page with setup instructions. **Copy the repository URL** - it will look like:
- `https://github.com/YOUR_USERNAME/VrundaInkwell.git`

---

## Part 3: Push Code to GitHub

### Step 1: Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/VrundaInkwell.git
```
*(Replace YOUR_USERNAME with your actual GitHub username)*

### Step 2: Verify Remote
```bash
git remote -v
```
You should see your repository URL listed.

### Step 3: Push to GitHub
```bash
git push -u origin main
```

**If you get authentication errors:**
- You may need to use a Personal Access Token instead of password
- Or set up SSH keys
- GitHub will provide instructions if authentication fails

---

## Part 4: Deploy to Hosting Platform

Choose one of these platforms (I recommend **Railway** for easiest setup):

### Option A: Railway (Recommended - Easiest)

#### Step 1: Sign Up
1. Go to: **https://railway.app**
2. Click **"Start a New Project"**
3. Sign up with GitHub (easiest option)

#### Step 2: Deploy from GitHub
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your `VrundaInkwell` repository
4. Railway will automatically detect it's a Node.js project

#### Step 3: Configure Environment Variables
1. Go to your project settings
2. Click **"Variables"** tab
3. Add these variables:
   - `NODE_ENV` = `production`
   - `PORT` = (Railway will auto-set this, but you can add `3000` as default)
   - `DATABASE_URL` = (Leave empty for now if using in-memory storage, or add PostgreSQL URL if you set up a database)

#### Step 4: Deploy
1. Railway will automatically:
   - Run `npm install`
   - Run `npm run build`
   - Run `npm start`
2. Wait for deployment to complete (usually 2-5 minutes)

#### Step 5: Get Your Deployment URL
1. Once deployed, Railway will give you a URL like:
   - `https://your-app-name.up.railway.app`
2. Click on it to test your site!

---

### Option B: Render (Alternative)

#### Step 1: Sign Up
1. Go to: **https://render.com**
2. Sign up with GitHub

#### Step 2: Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select `VrundaInkwell`

#### Step 3: Configure
- **Name**: `vrunda-inkwell` (or your choice)
- **Environment**: `Node`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Plan**: Free tier is fine to start

#### Step 4: Environment Variables
Add in the "Environment" section:
- `NODE_ENV` = `production`
- `PORT` = (Render auto-sets, but add `3000` as fallback)

#### Step 5: Deploy
Click **"Create Web Service"** and wait for deployment.

---

## Part 5: Connect Your Domain

### Step 1: Get Your Deployment URL
From Railway/Render, you'll have a URL like:
- Railway: `https://your-app.up.railway.app`
- Render: `https://your-app.onrender.com`

### Step 2: Add Domain in Hosting Platform

#### For Railway:
1. Go to your project → **Settings** → **Domains**
2. Click **"Custom Domain"**
3. Enter your domain (e.g., `vrunda.com` or `www.vrunda.com`)
4. Railway will give you DNS instructions

#### For Render:
1. Go to your service → **Settings** → **Custom Domains**
2. Click **"Add Custom Domain"**
3. Enter your domain
4. Render will provide DNS records

### Step 3: Configure DNS at Your Domain Registrar

Go to where you bought your domain (GoDaddy, Namecheap, Google Domains, etc.):

#### For Railway:
1. Add a **CNAME** record:
   - **Type**: CNAME
   - **Name**: `@` (or `www` for www subdomain)
   - **Value**: `your-app.up.railway.app`
   - **TTL**: 3600 (or default)

2. For root domain (if your registrar supports it):
   - Some registrars require an **ALIAS** or **ANAME** record instead
   - Or use `www` subdomain with CNAME

#### For Render:
1. Add a **CNAME** record:
   - **Type**: CNAME
   - **Name**: `@` (or `www`)
   - **Value**: `your-app.onrender.com`
   - **TTL**: 3600

### Step 4: Wait for DNS Propagation
- DNS changes can take **15 minutes to 48 hours**
- Usually works within 1-2 hours
- You can check status at: https://dnschecker.org

### Step 5: SSL Certificate
- Railway and Render **automatically provide SSL certificates**
- Once DNS propagates, HTTPS will be enabled automatically
- This usually takes a few minutes after DNS is set

### Step 6: Verify
1. Visit your domain in a browser
2. You should see your portfolio site!
3. Check that HTTPS is working (padlock icon)

---

## Troubleshooting

### Git Push Issues
- **Authentication failed**: Use Personal Access Token or SSH keys
- **Repository not found**: Check the repository URL is correct

### Deployment Issues
- **Build failed**: Check build logs in Railway/Render dashboard
- **App not starting**: Verify `npm start` command works locally
- **Port errors**: Make sure PORT environment variable is set

### Domain Issues
- **Domain not working**: Wait longer for DNS propagation
- **SSL not working**: Wait 10-15 minutes after DNS is set
- **404 errors**: Make sure domain is added in hosting platform

---

## Quick Command Reference

```bash
# Stage changes
git add .

# Commit
git commit -m "Your commit message"

# Add remote (first time only)
git remote add origin https://github.com/YOUR_USERNAME/VrundaInkwell.git

# Push to GitHub
git push -u origin main

# Check status
git status

# View remotes
git remote -v
```

---

## Next Steps After Deployment

1. **Set up a database** (if needed):
   - Use Neon, Supabase, or Railway's PostgreSQL
   - Update `DATABASE_URL` environment variable
   - Run migrations: `npm run db:push`

2. **Monitor your site**:
   - Check Railway/Render dashboard for logs
   - Set up error monitoring (optional)

3. **Update content**:
   - Make changes locally
   - Push to GitHub
   - Platform will auto-deploy

---

**Need help?** Check the main README.md for more details!

