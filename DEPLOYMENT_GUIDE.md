# Hosting & Deployment Guide

## 1. Hosting Recommendation & Cost Breakdown

| Platform | Monthly Cost | Next.js Support | Custom Domain & SSL | Recommended? |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel** *(Hobby Plan)* | **$0 / month (FREE)** | Native (Vercel created Next.js) | Included Free | **⭐ #1 Best Choice** |
| **Netlify** *(Starter Plan)* | **$0 / month (FREE)** | Good | Included Free | Alternative |
| **Cloudflare Pages** | **$0 / month (FREE)** | Good (via OpenNext adapter) | Included Free | Alternative |
| **VPS (Hetzner / DigitalOcean)** | **$4 – $6 / month** | Manual (Docker / Node.js) | Requires manual Certbot | Not recommended (unnecessary maintenance & cost) |

### Why Vercel is the Best Choice:
1. **100% Free ($0):** The Hobby tier includes 100GB bandwidth, automatic HTTPS/SSL certificates, and unlimited deployments.
2. **Zero Maintenance:** No Linux servers to patch, no Nginx configuration, no Node.js process managers (PM2) to restart.
3. **Instant CI/CD:** Every time you push an update to your GitHub repository, Vercel automatically deploys the latest version in under 45 seconds.
4. **Global Edge CDN:** Lightning-fast loading speeds for visitors in Kenya, East Africa, and worldwide.

---

## 2. Deploying to Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended for Automated Updates)

1. **Push the project to a GitHub repository:**
   - Create a new repository on [github.com](https://github.com) (e.g. `wallace-ogundo-portfolio`).
   - Push your code to the repository.
   *(The project already includes a production-ready `.gitignore`, lockfile, and configurations).*

2. **Connect to Vercel:**
   - Sign up or log into [vercel.com](https://vercel.com) using your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Select your repository (`wallace-ogundo-portfolio`) and click **"Import"**.

3. **Deploy:**
   - Vercel automatically detects Next.js.
   - Leave the default build settings as they are:
     - **Framework Preset:** Next.js
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`
   - Click **"Deploy"**.
   - In ~45 seconds, your website will be live on a `*.vercel.app` URL with free SSL!

---

### Option B: Deploying Directly from the Terminal (Vercel CLI)

If you prefer not using GitHub, you can deploy immediately from the terminal:

1. In the project folder, run:
   ```bash
   npx vercel
   ```
2. Log in with your email or GitHub.
3. Accept the default prompts by pressing `Enter`.
4. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

## 3. Connecting a Custom Domain (e.g., `wallaceogundo.com`)

Once deployed on Vercel:

1. Go to your **Project Dashboard on Vercel** → **Settings** → **Domains**.
2. Type your domain (e.g., `wallaceogundo.com`) and click **"Add"**.
3. Vercel will display the required DNS records to add at your domain registrar (GoDaddy, Namecheap, Hostinger, Safaricom, etc.):
   - **For root domain (`wallaceogundo.com`):**
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`
   - **For subdomain (`www.wallaceogundo.com`):**
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. DNS propagation typically takes 5–30 minutes, after which Vercel will automatically generate and renew free SSL certificates.
