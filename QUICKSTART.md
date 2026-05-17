# Quick Start Guide - Get Live in 5 Minutes

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "My project portfolio"
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create Repository**

## Step 2: Add Your Files

### Option A: Using Git (Recommended)

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Copy all your portfolio files into this folder
# (index.html, styles.css, script.js, projects folder, etc.)

# Push to GitHub
git add .
git commit -m "Initial portfolio upload"
git push origin main
```

### Option B: Upload via GitHub Web Interface

1. Go to your repo on GitHub
2. Click **Add file → Upload files**
3. Drag and drop all your files
4. Click **Commit changes**

## Step 3: Enable GitHub Pages

1. Go to your repo **Settings**
2. Scroll to **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment

## Step 4: View Your Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

## Step 5: Customize Your Content

Before deploying, update these files:

### index.html
- Replace `[Your Name]` with your name
- Update the hero subtitle and description
- Update social media links in footer

### script.js
- Update the `projects` array with your actual projects
- Change image URLs to your own images or paths

### Each project page
- Update title, description, and content
- Replace placeholder images with your own
- Add your technical details and process

## Adding Your Projects

### Method 1: Using Your Own Images

1. Create an `images/` folder in your portfolio directory
2. Upload your project images there
3. In `script.js`, change image URLs:

**Before:**
```javascript
image: 'https://via.placeholder.com/400x400?text=Project+Name'
```

**After:**
```javascript
image: 'images/my-project-thumbnail.jpg'
```

### Method 2: Use External Image URLs

Keep using external URLs (Imgur, Google Drive, etc.):
```javascript
image: 'https://drive.google.com/uc?id=YOUR_FILE_ID'
```

### Method 3: Imgur (Free & Easy)

1. Go to [imgur.com](https://imgur.com)
2. Upload your images (free, no account needed)
3. Copy the image URL
4. Use in your projects

## Updating Your Portfolio

After making changes:

```bash
# If using Git:
git add .
git commit -m "Update projects"
git push origin main

# GitHub Pages updates automatically (takes 1-2 minutes)
```

Or upload directly via GitHub web interface (same as Step 2).

## Troubleshooting

**Q: My site shows 404 error**
A: 
- Wait 2 minutes (GitHub Pages needs time to build)
- Check Settings → Pages is enabled
- Verify branch is set to `main`

**Q: Images not showing**
A:
- Check image file paths (case-sensitive!)
- Use relative paths: `images/photo.jpg`
- Test in Chrome DevTools (F12) → Elements tab

**Q: Links broken**
A:
- Verify project HTML files exist in `projects/` folder
- Check filenames match exactly in `script.js`
- Use relative paths: `projects/my-project.html`

**Q: Website looks weird/different**
A:
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try in an incognito/private window
- Check in different browser

## Custom Domain (Optional)

To use your own domain instead of `github.io`:

1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. In GitHub Settings → Pages → Custom domain: Enter your domain
3. Update DNS records (instructions from your registrar)
4. Wait 24 hours for DNS propagation

## Next Steps

✅ **Done:** Your portfolio is live!

🎨 **Now:**
- Add your actual project photos
- Write descriptions for your projects
- Update social media links
- Share your portfolio link

📈 **Later:**
- Add more projects as you complete them
- Enhance animations and interactions
- Add a contact form
- Create blog posts
- Track analytics

## Pro Tips

1. **Keep descriptions short** - 1-2 sentences per thumbnail
2. **High-quality images** - Use images at least 400x400px
3. **Update regularly** - Fresh projects show active growth
4. **Mobile test** - View on your phone to ensure it looks good
5. **Share widely** - Link in your CV, LinkedIn, Twitter, etc.

## Get Help

- 📖 Full documentation: See `README.md`
- 💬 Questions? Check examples in `projects/` folder
- 🎓 Learn more: [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**You're all set!** 🚀 Your professional portfolio is now online and ready to impress.
