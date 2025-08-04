# AMUTHAMUTHU - Premium Healthy Snacks

A stunning landing page for AMUTHAMUTHU's premium healthy snacks brand, featuring a modern design with deep red gradients, 3D branding effects, and "coming soon" product showcases.

## 🚀 Features

- **Brand-Inspired Design**: Deep red gradients matching the brand identity
- **3D Branding**: AMUTHAMUTHU with 3D "A" styling and glow effects
- **Coming Soon Products**: Interactive product cards with fire animations
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Glassmorphism Effects**: Modern glass-style UI components
- **Responsive Design**: Optimized for all devices
- **Email Signup**: Launch notification system

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Cloudflare Pages** - Hosting

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd anudhamuthu

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Deployment to Cloudflare Pages

### Option 1: Deploy via Cloudflare Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages → Create a project
   - Connect your GitHub repository
   - Set build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Node.js version**: 18

3. **Environment Variables** (if needed)
   - Add any environment variables in the Cloudflare Pages settings

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be available at `https://your-project-name.pages.dev`

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy out
   ```

### Option 3: Deploy via GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: amuthamuthu-landing
          directory: out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## 🔧 Configuration Files

### `next.config.js`
- Static export configuration
- Image optimization settings
- Trailing slash for Cloudflare compatibility

### `wrangler.toml`
- Cloudflare Pages configuration
- Build settings and environment variables

### `_redirects`
- Client-side routing support
- SPA fallback configuration

## 📁 Project Structure

```
anudhamuthu/
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Home page
│   │   ├── products.tsx       # Products page
│   │   ├── about.tsx          # About page
│   │   └── contact.tsx        # Contact page
│   └── styles/
│       └── global.css         # Global styles
├── public/
│   └── brand.png              # Brand logo
├── next.config.js             # Next.js config
├── wrangler.toml              # Cloudflare config
├── _redirects                 # Routing rules
└── package.json               # Dependencies
```

## 🎨 Design Features

- **Brand Colors**: Deep red gradients (#dc2626 to #991b1b)
- **Typography**: Bold, modern sans-serif fonts
- **Animations**: Smooth entrance and hover effects
- **Glass Effects**: Backdrop blur and transparency
- **3D Elements**: Drop shadows and glow effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-width hero sections
- **Touch Friendly**: Large touch targets

## 🔍 SEO Optimized

- **Meta Tags**: Proper title and description
- **Structured Data**: JSON-LD markup
- **Open Graph**: Social media sharing
- **Performance**: Optimized images and fonts

## 🚀 Performance

- **Static Export**: Fast loading times
- **Image Optimization**: WebP and AVIF support
- **Code Splitting**: Automatic bundle optimization
- **CDN**: Cloudflare's global network

## 📞 Support

For deployment issues or questions:
- Check Cloudflare Pages documentation
- Review build logs in Cloudflare Dashboard
- Ensure all dependencies are properly installed

---

**AMUTHAMUTHU** - Premium healthy snacks coming soon! 🚀
