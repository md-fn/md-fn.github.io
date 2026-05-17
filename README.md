# Minimalist Portfolio Website

A clean, elegant portfolio website for showcasing creative and technical projects. Designed for builders, makers, and creators. Perfect for GitHub Pages hosting.

## Features

✨ **Minimalist Design** - Clean aesthetic with generous whitespace  
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile  
⚡ **Fast & Lightweight** - Pure HTML/CSS/JS, no build process needed  
🎨 **Easy to Customize** - Simple structure, easy to modify colors and content  
🔗 **GitHub Pages Ready** - Deploy directly from your repo  
🎯 **Well-Organized** - Three portfolio sections with detailed project pages  
♿ **Accessible** - Semantic HTML and keyboard navigation  

## Quick Start

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Content

Open `index.html` and replace:
- `[Your Name]` with your actual name
- Update the hero subtitle and description
- Update social links in the footer

### 3. Add Your Projects

Edit the `projects` object in `script.js`:

```javascript
const projects = {
    featured: [
        {
            id: 'unique-id',
            title: 'Your Project Title',
            category: 'Electronics & Robotics', // or '3D Design & Graphics' or 'Photography & Videography'
            image: 'https://your-image-url.jpg', // or local path like 'images/project.jpg'
            description: 'Brief 1-2 sentence description',
            link: 'projects/your-project.html' // Create this file
        },
        // Add more projects...
    ]
};
```

### 4. Create Project Detail Pages

1. Copy `projects/smart-home.html` as a template
2. Create a new file like `projects/your-project.html`
3. Update the content with your project details
4. Add images, videos, and interactive content as needed

### 5. Deploy to GitHub Pages

**Method 1: Automatic (Recommended)**
1. Push your repo to GitHub
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `root` folder
5. Your site will be live at `https://yourusername.github.io/portfolio`

**Method 2: Using GitHub Actions**
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Project Structure

```
portfolio/
├── index.html              # Home page with intro and project grid
├── styles.css             # All styling (minimalist design)
├── script.js              # Navigation and project management
├── projects/
│   ├── smart-home.html    # Example detailed project page
│   ├── your-project.html  # Add your projects here
│   └── ...
└── images/                # Optional: store images locally
    ├── project-1.jpg
    └── project-2.jpg
```

## Customization Guide

### Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #000000;        /* Main text color */
    --secondary: #ffffff;      /* Background */
    --accent: #0066cc;         /* Links and highlights */
    --text-light: #666666;     /* Secondary text */
    --border: #e5e5e5;         /* Borders */
}
```

### Typography

Change fonts in the `body` style:

```css
body {
    font-family: 'Your Font', sans-serif;
    /* ... */
}
```

**Free font resources:**
- Google Fonts: https://fonts.google.com
- Bunny Fonts: https://fonts.bunny.net (privacy-focused)

### Adding Images

**Option 1: Use external URLs**
```html
<img src="https://example.com/image.jpg" alt="description">
```

**Option 2: Store locally**
1. Create an `images/` folder in your project
2. Upload images there
3. Reference them: `<img src="images/my-project.jpg" alt="description">`

### Adding Videos

Embed YouTube:
```html
<div class="detail-image">
    <iframe width="100%" height="600" src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

Or upload your own:
```html
<div class="detail-image">
    <video width="100%" controls>
        <source src="path/to/video.mp4" type="video/mp4">
    </video>
</div>
```

### Adding Animations or Interactive Content

The template includes space for:
- Custom CSS animations
- Embedded interactive tools (Three.js, P5.js, etc.)
- Animated GIFs
- Before/after sliders (add custom CSS)

Example: Before/After Slider
```html
<div class="comparison-slider">
    <img src="before.jpg" alt="Before">
    <img src="after.jpg" alt="After">
</div>
```

## Navigation Structure

The site uses hash-based navigation (works great with GitHub Pages):

- `/#home` - Home page
- `/#electronics` - Electronics & Robotics section
- `/#3d-design` - 3D Design & Graphics section
- `/#photography` - Photography & Videography section
- `/projects/your-project.html` - Individual project pages

Links between pages use relative paths automatically.

## SEO & Metadata

Add meta tags to each project page's `<head>`:

```html
<meta name="description" content="Brief description of your project">
<meta name="keywords" content="electronics, arduino, iot">
<meta property="og:title" content="Project Title">
<meta property="og:description" content="Brief description">
<meta property="og:image" content="https://url-to-image.jpg">
```

## Performance Tips

1. **Optimize Images**
   - Use tools like TinyPNG or ImageOptim
   - Use modern formats (WebP) when possible
   - Aim for images < 200KB per image

2. **Lazy Loading**
   - Already implemented in `script.js`
   - Images load only when visible

3. **Minimize CSS/JS**
   - Consider using minifiers if you add a lot of code
   - Keep third-party scripts to a minimum

## Mobile Optimization

The design is fully responsive out of the box. To test:

1. Chrome DevTools (F12) → Toggle device toolbar
2. Test on actual devices
3. Check in landscape and portrait modes

## Adding a Custom Domain

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add to your GitHub Pages in Settings
3. Update DNS records (instructions from your registrar)

## Troubleshooting

**Images not showing?**
- Check file paths (case-sensitive on Linux/Mac)
- Use relative paths like `images/photo.jpg`
- Ensure images are in the correct folder

**Links broken?**
- Make sure project HTML files exist in `projects/` folder
- Check the `link` property in `script.js` matches the actual filename
- Use relative paths: `projects/my-project.html`

**GitHub Pages showing 404?**
- Check Settings → Pages is enabled
- Verify branch is set correctly (usually `main`)
- Wait a few minutes after pushing changes

**Styling looks weird?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check that `styles.css` path is correct

## Expanding Later

This starter is designed to grow with you:

1. **Add more projects** - Just add objects to the `projects` array in `script.js`
2. **Create more sections** - Duplicate a category section in `index.html` and update the style
3. **Add blog posts** - Create `.html` files in a `/blog` folder
4. **Add a contact form** - Use services like Formspree or Basin for simple form handling
5. **Dark mode** - Add CSS variables toggle with a button

## Best Practices

✅ **Do:**
- Keep descriptions concise and impactful
- Use high-quality images (1200x1200px minimum for thumbnails)
- Update projects regularly
- Add detailed descriptions for each project
- Include process/behind-the-scenes content
- Optimize for mobile first

❌ **Don't:**
- Use placeholder text from examples (replace everything!)
- Upload very large images directly
- Add too many animations (keeps it minimalist)
- Use outdated or poor-quality photos
- Forget to update social media links

## Credits & License

This template is provided as-is. Feel free to modify and customize it for your portfolio.

## Need Help?

- Check the example project at `projects/smart-home.html`
- Review the HTML structure in `index.html`
- Inspect the CSS variables in `styles.css`
- Look at the navigation logic in `script.js`

---

**Happy building!** 🚀

Once you customize this with your own projects, you'll have a professional portfolio that showcases your work beautifully.
