# Editing & Adding Content

## Adding or editing a project card

All project data is in the `projects` object at the top of `script.js`.  
Each array controls one section of the site:

- `featured` → home bento grid (keep at 6 cards)
- `robotics` → Robotics & Embedded section
- `design` → 3D Design & Fabrication section

Each entry looks like this:

```js
{
    id:          'my-project',
    title:       'Project Title',
    category:    'Robotics & Embedded',   // shown above the title on the card
    image:       'Media/Folder/photo.jpg',
    description: 'Short description.',    // no longer shown on cards, kept for reference
    tags:        ['Tag1', 'Tag2'],
    link:        'projects/my-project.html'
}
```

A project can appear in multiple arrays (e.g. robotic arm appears in both `featured` and `robotics`).  
For 3D design projects that live on the scrollable `3d-designs.html` page, set `link` to `projects/3d-designs.html#section-id`.

---

## Adding a new project page

1. Copy the closest existing page from `projects/` as a template (e.g. `cdp-2026.html` for robotics, `corexy.html` for design).
2. Rename it and update the `<title>` tag.
3. Add your content in `<main class="detail-content">` using the section blocks below.
4. Add the project entry to `script.js`.
5. Drop images/videos into a new folder under `Media/`.

---

## Page structure reference

### Header
```html
<header class="detail-header">
    <span class="detail-eyebrow">Category · Subtitle</span>
    <h1 class="detail-title">Project<br>Title</h1>
    <div class="detail-meta">
        <div class="detail-meta-item">
            <span class="detail-meta-label">LABEL</span>
            <span class="detail-meta-value">Value</span>
        </div>
        <!-- repeat for each spec -->
    </div>
</header>
```

### Hero image pair (full-width split)
```html
<div class="hero-images">
    <div class="hero-img-panel">
        <img src="../Media/Folder/photo.jpg" alt="Description">
        <span class="hero-img-label">LABEL</span>
    </div>
    <div class="hero-img-panel">
        <img src="../Media/Folder/photo2.jpg" alt="Description">
        <span class="hero-img-label">LABEL</span>
    </div>
</div>
```

### Content section
```html
<div class="detail-section">
    <h2>Section Title</h2>
    <p>Body text here.</p>
    <!-- image grids or spec grid go inside here -->
</div>
```

### Spec grid (key/value pairs)
```html
<div class="spec-grid">
    <div class="spec-item">
        <span class="spec-label">Label</span>
        <span class="spec-value">Value text</span>
    </div>
</div>
```

---

## Image grids

Use inside a `detail-section`. Two-column grid:

```html
<div class="img-grid img-grid-2">
    <div class="img-cell img-cell-lg">
        <img src="../Media/Folder/photo.jpg" alt="...">
        <div class="img-cell-caption">Caption text</div>
    </div>
    <div class="img-cell img-cell-tall">
        <img src="../Media/Folder/photo2.jpg" alt="...">
        <div class="img-cell-caption">Caption text</div>
    </div>
</div>
```

### Image cell aspect ratios

| Class | Ratio | Best for |
|-------|-------|----------|
| `img-cell-sq` | 1:1 | Square crops |
| `img-cell-lg` | 4:3 | Landscape photos, CAD screenshots |
| `img-cell-wide` | 16:9 | Very wide shots |
| `img-cell-tall` | 3:4 | Portrait phone photos |

Pick the class that's closest to the photo's natural ratio — a bit of cropping is fine.

### Single centered image (no grid)

```html
<div style="max-width:480px; margin:0 auto;">
    <div class="img-cell img-cell-tall">
        <img src="../Media/Folder/photo.jpg" alt="...">
        <div class="img-cell-caption">Caption</div>
    </div>
</div>
```

Adjust `max-width` to taste: `480px` for portrait, `600px` for landscape.

---

## Local video (MP4)

```html
<div class="video-block">
    <div class="video-block-header">
        <span class="video-tag">VIDEO</span>
        <span class="video-block-title">Video Title</span>
    </div>
    <div style="max-width:560px; margin:0 auto;">
        <video src="../Media/Folder/video.mp4" controls playsinline
               style="width:100%; display:block; background:#000;">
        </video>
        <div class="video-caption">Caption text.</div>
    </div>
</div>
```

Change `max-width` depending on orientation — `380px` for portrait, `700px` for landscape.

---

## Adding images to Media/

1. Create a folder under `Media/` named after the project (e.g. `Media/My Project/`).
2. Drop photos/videos in — jpg, png, webp, mp4, gif all work.
3. Reference them from HTML as `../Media/Folder/filename.jpg` (note the `../` since pages live in `projects/`).
4. From `index.html` or `script.js` (root level) the path is just `Media/Folder/filename.jpg`.

---

## Adding a section to 3d-designs.html

The scrollable 3D designs page (`projects/3d-designs.html`) has anchor sections. To add a new one:

1. Copy an existing `<div id="speaker" class="detail-section">` block.
2. Give it a unique `id` (e.g. `id="rc-car"`).
3. Add the project card to `script.js` with `link: 'projects/3d-designs.html#rc-car'`.

---

## CSS theme variables

Defined at the top of `styles.css`:

```css
--bg           #080808   page background
--surface      #111111   card / panel background
--surface-2    #191919   slightly lighter surface
--border       #202020   subtle borders
--accent       #FF5500   orange highlight colour
--text         #c0c0c0   body text
--muted        #817f7f   secondary / dimmed text
--mono         Courier New   monospace font (tags, captions, nav)
```

Font: **Bebas Neue** (Google Fonts) for all headings and UI labels. **Arial** for body paragraphs.
