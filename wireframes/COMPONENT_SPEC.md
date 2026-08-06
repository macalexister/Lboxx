# Component Specifications
## Bosch Professional Tool Finder - UI Component Library

**Version:** 1.0  
**Status:** Production Ready  
**Last Updated:** August 6, 2026

---

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Buttons](#buttons)
5. [Form Controls](#form-controls)
6. [Cards & Containers](#cards--containers)
7. [Navigation](#navigation)
8. [Badges & Status](#badges--status)
9. [Icons](#icons)
10. [Modals & Overlays](#modals--overlays)
11. [Responsive Grid](#responsive-grid)

---

## Color Palette

### Primary Colors
| Color | Hex | Usage | WCAG AA | Notes |
|-------|-----|-------|---------|-------|
| **Primary Blue** | `#0066CC` | Primary CTAs, active states | 4.5:1 ✓ | Bosch brand blue |
| **Accent Orange** | `#FF6B35` | Highlights, warnings | 3.5:1 | Add accents |
| **Neutral Dark** | `#1A1A1A` | Text, headers | 18:1 ✓ | Default text color |
| **Neutral Light** | `#F5F5F5` | Backgrounds, borders | - | Light backgrounds |
| **Success Green** | `#2E7D32` | Confirmations, ✓ | 4.5:1 ✓ | Good state |
| **Error Red** | `#C62828` | Errors, ✗ | 4.5:1 ✓ | Bad state |
| **Warning Yellow** | `#F57F17` | Warnings, attention | 3.5:1 | Caution |
| **Neutral Gray** | `#666666` | Secondary text | 6:1 ✓ | Secondary |

### Color Usage by Component
- **Buttons (Primary)**: #0066CC on white
- **Buttons (Secondary)**: #666666on white  
- **Links**: #0066CC (underline on hover)
- **Backgrounds**: #F5F5F5 or white
- **Borders**: #CCCCCC (medium gray)
- **Text**: #1A1A1A (dark)
- **Secondary Text**: #666666 (medium gray)
- **Hover State**: Slightly darker shade (10% darker)

---

## Typography

### Font Family
- **Primary Font**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- **Monospace**: "Monaco", "Courier New", monospace (for code/data)

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **H1** | 32px | 700 | 1.2 | -0.5px | Page titles |
| **H2** | 24px | 700 | 1.3 | -0.3px | Section headers |
| **H3** | 20px | 600 | 1.4 | 0 | Subsection headers |
| **H4** | 16px | 600 | 1.4 | 0 | Card headers |
| **H5** | 14px | 600 | 1.4 | 0 | Component labels |
| **Body** | 16px | 400 | 1.6 | 0 | Default text |
| **Body Small** | 14px | 400 | 1.6 | 0 | Secondary text |
| **Caption** | 12px | 400 | 1.5 | 0.5px | Tiny text (labels) |
| **Button** | 14px | 600 | 1.2 | 0.5px | Button text |

### Font Weight Scale
- 400: Regular (body text)
- 600: Semibold (headers, labels, buttons)
- 700: Bold (H1, H2, strong emphasis)

---

## Spacing & Layout

### Spacing Scale (8px base)
```
xs:   4px  (tight spacing)
sm:   8px  (default)
md:  16px  (medium)
lg:  24px  (large)
xl:  32px  (extra large)
xxl: 48px  (huge)
```

### Layout Grid
- **System**: 12-column responsive grid
- **Max Width**: 1200px (desktop)
- **Gutter**: 16px (between columns)
- **Padding**: 
  - Desktop: 24px on sides
  - Tablet: 16px on sides
  - Mobile: 16px on sides

### Responsive Breakpoints
| Device | Breakpoint | Grid | Padding | Font Size |
|--------|-----------|------|---------|-----------|
| **Mobile** | 0-575px | 1 col | 16px | 16px body |
| **Tablet** | 576-992px | 2-4 cols | 16px | 16px body |
| **Desktop** | 993px+ | 12 cols | 24px | 16px body |

---

## Buttons

### Button Types

#### Primary Button
```html
<button class="btn btn-primary">
  Click Me
</button>
```
- **Background**: #0066CC
- **Text Color**: #FFFFFF
- **Padding**: 12px 24px (lg), 10px 16px (sm)
- **Border**: None
- **Border Radius**: 4px
- **Hover**: Background #0052A3 (darker)
- **Active**: Background #003D7A (even darker)
- **Focus**: 2px solid #0066CC outline (offset 2px)
- **Disabled**: Opacity 0.5, cursor not-allowed

#### Secondary Button
```html
<button class="btn btn-secondary">
  Cancel
</button>
```
- **Background**: #F5F5F5
- **Text Color**: #1A1A1A
- **Border**: 1px solid #CCCCCC
- **Padding**: 12px 24px
- **Border Radius**: 4px
- **Hover**: Background #E0E0E0
- **Active**: Background #D0D0D0
- **Focus**: 2px solid outline

#### Link Button (Text Link)
```html
<a class="btn-link">Learn More</a>
```
- **Background**: Transparent
- **Text Color**: #0066CC
- **Border**: None
- **Text Decoration**: Underline on hover
- **Hover**: Text #0052A3
- **Focus**: 2px outline

#### Danger Button (Delete)
```html
<button class="btn btn-danger">Delete</button>
```
- **Background**: #C62828
- **Text Color**: #FFFFFF
- **Padding**: 12px 24px
- **Hover**: Background #A01F1F
- **Active**: Background #7A1818

### Button Sizes
| Size | Padding | Font | Min Width | Usage |
|------|---------|------|-----------|-------|
| **Large** | 16px 32px | 16px | 120px | Primary CTAs |
| **Medium** | 12px 24px | 14px | 100px | Default |
| **Small** | 8px 16px | 12px | 80px | Inline/compact |

### Button States
- **Default**: Full opacity, normal cursor
- **Hover**: Slight background change, cursor pointer
- **Focus**: 2px solid outline (offset 2px)
- **Active**: Pressed/darker state
- **Disabled**: Opacity 0.5, cursor not-allowed
- **Loading**: Spinner inside, disabled state

---

## Form Controls

### Text Input
```html
<input type="text" class="input" placeholder="Search...">
```
- **Background**: #FFFFFF
- **Border**: 1px solid #CCCCCC
- **Padding**: 12px 16px
- **Border Radius**: 4px
- **Font Size**: 16px
- **Focus Border**: 2px solid #0066CC
- **Placeholder Color**: #999999
- **Height**: 44px (touch target minimum)

### Dropdown Select
```html
<select class="select">
  <option>Choose one</option>
</select>
```
- **Styling**: Same as text input
- **Arrow Icon**: Right-aligned inside
- **Height**: 44px
- **Padding**: 12px 16px 12px 12px
- **Focus**: 2px solid border

### Checkbox
```html
<label>
  <input type="checkbox"> Keep me logged in
</label>
```
- **Size**: 20x20px
- **Background**: #FFFFFF
- **Border**: 2px solid #0066CC
- **Border Radius**: 4px
- **Checked Mark**: #0066CC (bold ✓)
- **Focus**: 2px outline
- **Label Margin**: 8px left of checkbox
- **Cursor**: pointer on label

### Radio Button
```html
<label>
  <input type="radio" name="group"> Option
</label>
```
- **Size**: 20x20px
- **Border**: 2px solid #0066CC
- **Border Radius**: 50% (circle)
- **Checked Indicator**: 8px solid circle inside
- **Focus**: 2px outline (2px offset)
- **Label Margin**: 8px left

### Slider (Range Input)
```html
<input type="range" min="0" max="100" class="slider">
```
- **Track Height**: 4px
- **Track Color**: #CCCCCC
- **Thumb Size**: 20x20px
- **Thumb Color**: #0066CC
- **Thumb Border Radius**: 50%
- **Focus**: 2px outline on thumb

---

## Cards & Containers

### Basic Card
```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p>Card content goes here.</p>
</div>
```
- **Background**: #FFFFFF
- **Border**: 1px solid #CCCCCC
- **Border Radius**: 8px
- **Padding**: 24px
- **Box Shadow**: 0 2px 4px rgba(0,0,0,0.05)
- **Hover Shadow**: 0 4px 12px rgba(0,0,0,0.1) (subtle lift)

### Tool Card (Product)
- **Image Area**: 200x200px (1:1), placeholder gray
- **Name**: H4 bold, 16px, dark
- **Category**: 12px secondary gray
- **Price**: 16px bold, primary blue
- **Rating**: Star icons + count (12px)
- **CTA Button**: Primary button below
- **Padding**: 16px
- **Spacing**: 8px between elements

### Collection Card
- **Header**: Icon + Name (H4 bold)
- **Description**: 14px secondary, 2 lines max
- **Stats**: 3 inline metrics (tools, weight, value)
- **Last Updated**: 12px gray
- **Action Buttons**: 4-5 inline buttons
- **Hover**: Subtle shadow lift + cursor pointer

---

## Navigation

### Header/Navigation Bar
- **Height**: 64px (desktop), 56px (mobile)
- **Background**: #FFFFFF
- **Border Bottom**: 1px solid #CCCCCC
- **Padding**: 0 24px (desktop), 0 16px (mobile)
- **Z-Index**: 100 (sticky/fixed)

### Navigation Items
- **Font**: 14px, 600 weight
- **Color**: #666666 (default)
- **Color**: #0066CC (active/hover)
- **Underline**: 2px solid on active tab
- **Spacing**: 24px between items (desktop)
- **Touch Target**: Minimum 44x44px

### Breadcrumb
```
Home > Search > Results > Tool Detail
```
- **Separator**: "/" or ">" (24px sizing)
- **Color**: #0066CC (links), #666666 (separators)
- **Font**: 12px, 400 weight
- **Spacing**: 4px around separators

---

## Badges & Status

### Status Badges
| Status | Background | Text Color | Icon | Usage |
|--------|-----------|-----------|------|-------|
| **New** | #E8F5E9 | #2E7D32 | ✓ | New items |
| **Updated** | #FFF3E0 | #E65100 | ↻ | Recent changes |
| **In Stock** | #C8E6C9 | #2E7D32 | ✓ | Available |
| **Out of Stock** | #FFCDD2 | #C62828 | ✗ | Unavailable |
| **Coming Soon** | #E3F2FD | #0066CC | → | Future |

### Rating Badge
```
★★★★★ (4.8/5.0)
```
- **Stars**: Gold #FFB300 (filled), gray #CCCCCC (empty)
- **Text**: 12px, secondary gray
- **Size**: 16px star icons
- **Spacing**: 4px between stars, 8px before text

### Chip/Tag
```html
<span class="chip">Category Name</span>
```
- **Background**: #E8E8E8
- **Text**: #1A1A1A (12px, 600 weight)
- **Padding**: 6px 12px
- **Border Radius**: 16px (pill shape)
- **Margin**: 4px

---

## Icons

### Icon Set
- **Source**: Material Design Icons (24px default) or SVG custom set
- **Color**: #1A1A1A (default), #0066CC (active)
- **Size**: 
  - Navigation: 24px
  - Buttons: 20px (inline)
  - Cards: 32px (decorative)
  - Status: 16px (inline)

### Common Icons
- **Home**: 🏠
- **Search**: 🔍
- **Collections**: 📋
- **L-Boxx Planner**: 🗂️
- **Settings**: ⚙️
- **Menu**: ☰
- **Add**: ➕
- **Delete**: 🗑️
- **Edit**: ✏️
- **Download**: ⬇️
- **Share**: 📤
- **Filter**: 🔽

---

## Modals & Overlays

### Modal Window
```html
<div class="modal-overlay">
  <div class="modal">
    <header class="modal-header">
      <h2>Modal Title</h2>
      <button class="modal-close">✕</button>
    </header>
    <div class="modal-body">
      Content here
    </div>
    <footer class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Save</button>
    </footer>
  </div>
</div>
```

- **Overlay**: Semi-transparent black (rgba(0,0,0,0.5))
- **Modal Background**: #FFFFFF
- **Modal Max Width**: 600px (desktop), 90vw (mobile)
- **Border Radius**: 8px
- **Padding**: 24px (header/footer/body)
- **Z-Index**: 1000 (above all content)
- **Header Border**: 1px bottom #CCCCCC
- **Footer Border**: 1px top #CCCCCC
- **Close Button**: Top-right, ✕ icon, hover #FF0000

### Modal Animations
- **Appear**: Fade in overlay + slide up modal (200ms)
- **Dismiss**: Fade out + slide down (150ms)

---

## Tables

### Data Table
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Column Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

- **Header Background**: #F5F5F5
- **Header Font**: 12px, 600 weight, #1A1A1A
- **Cell Padding**: 12px 16px
- **Border**: 1px solid #CCCCCC (between rows)
- **Row Hover**: Background #F9F9F9 (subtle)
- **Stripe Rows** (optional): Alternating #F5F5F5 / #FFFFFF

### Sortable Table Headers
- **Arrow Indicator**: ↑↓ (12px, #0066CC)
- **Cursor**: pointer
- **Hover**: Background #E8E8E8

---

## Responsive Behavior

### Mobile-First Stacking
- **Default**: 1 column (mobile 0-575px)
- **Tablet**: 2 columns (576-992px)
- **Desktop**: 3-4 columns (993px+)

### Touch Targets
- **Minimum Size**: 44x44px (recommended)
- **Spacing**: 8px minimum between touch targets

### Text Scaling
- **Mobile**: 16px (no zoom needed)
- **Tablet**: 14-16px
- **Desktop**: 14-16px (consistent)

### Image Handling
- **Responsive**: max-width: 100%, height: auto
- **Art Direction**: Different crops for mobile (portrait) vs desktop (landscape)
- **Lazy Loading**: `loading="lazy"` attribute

---

## Dark Mode (Future)

Color inversions for potential dark mode support:
- Primary background → #1A1A1A
- Cards → #2A2A2A
- Text → #FFFFFF
- Borders → #444444
- Links → #6DB3FF (lighter blue)

---

## Accessibility Compliance

### WCAG 2.1 AA Standards
- ✅ Color Contrast: All text 4.5:1 minimum (normal text), 3:1 (large text)
- ✅ Focus Indicators: 2px solid outline, 2px offset, #0066CC
- ✅ Keyboard Navigation: All interactive elements focusable in logical order
- ✅ Labels: All form inputs have associated `<label>` elements
- ✅ ARIA: Buttons have aria-label when needed, modals have aria-modal="true"
- ✅ Screen Readers: Proper semantic HTML (headings, lists, tables)
- ✅ Color Alone: Never use color as only indicator (use text/icons too)

---

## Implementation Notes

### CSS Architecture
- **Naming**: BEM-style (`btn`, `btn--primary`, `btn__icon`)
- **Organization**: 
  - `variables.css` - Colors, typography, spacing
  - `base.css` - Global styles, reset
  - `components.css` - Reusable component styles
  - `layout.css` - Grid, responsive breakpoints
  - `utilities.css` - Helper classes (.text-center, .mb-16, etc.)

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest)
- **Mobile Browsers**: iOS Safari 12+, Chrome Android
- **Graceful Degradation**: No CSS Grid on IE11 (fallback to flexbox)

### Performance Optimization
- **Critical CSS**: Inline in `<head>` (colors, fonts, layout grid)
- **Non-Critical**: Load async or deferred
- **Font Loading**: WOFF2 preloaded, FOUT acceptable
- **Images**: Optimize with WebP, lazy load below fold

---

## Component Examples

### Search Input with Button
```html
<div class="search-bar">
  <input type="text" class="input" placeholder="Search tools...">
  <button class="btn btn-primary">Search</button>
</div>
```

### Tool Card Grid
```html
<div class="grid grid-cols-3 gap-md">
  <article class="card card-tool">
    <img src="tool.jpg" alt="Tool image">
    <h4>Tool Name</h4>
    <p class="text-secondary">Category</p>
    <p class="price">€99.99</p>
    <div class="rating">★★★★★ (142)</div>
    <button class="btn btn-primary">Add to Collection</button>
  </article>
</div>
```

### Filter Panel
```html
<aside class="filter-panel">
  <h3>Filters</h3>
  
  <fieldset>
    <legend>Category</legend>
    <label><input type="checkbox"> Bohrmaschinen</label>
    <label><input type="checkbox"> Winkelschleiffer</label>
  </fieldset>
  
  <fieldset>
    <legend>Power</legend>
    <label><input type="radio" name="power"> 12V</label>
    <label><input type="radio" name="power"> 18V</label>
  </fieldset>
  
  <button class="btn btn-primary">Apply Filters</button>
  <button class="btn btn-secondary">Clear All</button>
</aside>
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-06 | Initial component specification for S1-004 |

---

**Specification created by:** Design Team  
**Ready for:** Phase 3 (Frontend Development)  
**Next Steps:** Convert to CSS/SCSS, implement component library, create living styleguide
