# Tool Search & Catalog Wireframe
## Bosch Professional Tool Finder - Search & Browse Screen

**Purpose:** Help users discover tools via search, filtering, and browsing  
**Personas:** Harry (quick search), Lena (advanced filters), Ollie (browsing)  
**Key Feature:** FuseLJS fuzzy search with real-time preview

---

## Desktop Layout (993px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════════════════════╗   │
│ ║ 📦 Home    🔍 Search    📋 Collections    🗂️  L-Boxx Planner  ⚙️ Menu  ║   │
│ ╚═══════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  🔍 Search Tools                                                       ║   │
│ ║  ┌──────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ 🔎 Search by model, name, category... (type "bohr" or "12v")   │ ║   │
│ ║  │                                                                  │ ║   │
│ ║  │  Quick Suggestions:                                            │ ║   │
│ ║  │  • GSR 12V-35 (matches "12v")                                  │ ║   │
│ ║  │  • GSB 16V (matches "16v")                                     │ ║   │
│ ║  │  • GSA 12V (matches "12v")                                     │ ║   │
│ ║  └──────────────────────────────────────────────────────────────────┘ ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  FILTERS & RESULTS                                                     ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  ┌────────────────────────┐  ┌──────────────────────────────────┐   ║   │
│ ║  │ FILTER PANEL (Sidebar) │  │ RESULTS GRID (Main)              │   ║   │
│ ║  │                        │  │                                  │   ║   │
│ ║  │ Category ▼             │  │ Results: 47 tools found          │   ║   │
│ ║  │ ☐ Akkubohrschrauber   │  │ Sort by: [Relevance ▼]           │   ║   │
│ ║  │ ☐ Winkelschleiffer     │  │                                  │   ║   │
│ ║  │ ☐ Multifunktions-Tool │  │ ┌──────────┐ ┌──────────┐ ┌────┐ │   ║   │
│ ║  │ ☐ Bit-Schrauber       │  │ │ [Image]  │ │ [Image]  │ │[Im]│ │   ║   │
│ ║  │                        │  │ │ GSR 12V  │ │ PWS 700  │ │IXO │ │   ║   │
│ ║  │ Power ▼                │  │ │ Akkubohr │ │ Winkels. │ │5.5 │ │   ║   │
│ ║  │ ☐ 12V                 │  │ │ €89.99   │ │ €159.99  │ │€49 │ │   ║   │
│ ║  │ ☐ 14.4V               │  │ │ ★★★★★    │ │ ★★★★★    │ │★★★ │ │   ║   │
│ ║  │ ☐ 18V                 │  │ │ [Add]    │ │ [Add]    │ │[Ad]│ │   ║   │
│ ║  │ ☐ 230V                │  │ │ [Detail] │ │ [Detail] │ │[De]│ │   ║   │
│ ║  │ ☑ AC Powered           │  │ └──────────┘ └──────────┘ └────┘ │   ║   │
│ ║  │                        │  │                                  │   ║   │
│ ║  │ Weight ▼               │  │ ┌──────────┐ ┌──────────┐ ┌────┐ │   ║   │
│ ║  │ ◉ < 1kg               │  │ │ [Image]  │ │ [Image]  │ │[Im]│ │   ║   │
│ ║  │ ◉ 1-2kg               │  │ │ GOP 30M  │ │ PSB 500  │ │BOX │ │   ║   │
│ ║  │ ◉ > 2kg               │  │ │ Multifnc │ │ Stichsg. │ │100 │ │   ║   │
│ ║  │                        │  │ │ €279.99  │ │ €189.99  │ │€34 │ │   ║   │
│ ║  │ Rating ▼               │  │ │ ★★★★★    │ │ ★★★★☆    │ │★★★ │ │   ║   │
│ ║  │ ☐ ★★★★★ (5 stars)    │  │ │ [Add]    │ │ [Add]    │ │[Ad]│ │   ║   │
│ ║  │ ☑ ★★★★☆ (4+ stars)    │  │ │ [Detail] │ │ [Detail] │ │[De]│ │   ║   │
│ ║  │ ☐ ★★★☆☆ (3+ stars)    │  │ └──────────┘ └──────────┘ └────┘ │   ║   │
│ ║  │                        │  │                                  │   ║   │
│ ║  │ [Clear All Filters]    │  │ < Previous  | Page 1-4 |  Next > │   ║   │
│ ║  └────────────────────────┘  └──────────────────────────────────┘   ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ Footer: © 2026 Bosch Professional | About | Support | Privacy | Settings    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Tablet Layout (576-992px)

```
┌──────────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════════╗   │
│ ║    BOSCH TOOL FINDER     🔍 Search            ║   │
│ ║ 📦 Home 🔍 Search 📋 Collections 🗂️ L-Boxx   ║   │
│ ╚════════════════════════════════════════════════╝   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ │ 🔎 Search ("bohr", "12v", "winkels"...)     │   │
│ │                                              │   │
│ │ Quick Results:                               │   │
│ │ • GSR 12V-35 (Akkubohrer)                    │   │
│ │ • GSB 16V (Akkubohrer)                       │   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ Filters: [Category ▼] [Power ▼] [Weight ▼]  [🔄]  │
│                                                      │
│ Results: 47 tools | Sort: [Relevance ▼]             │
│                                                      │
│ ┌──────────────┐  ┌──────────────┐                  │
│ │ [Image]      │  │ [Image]      │                  │
│ │ GSR 12V-35   │  │ PWS 700-125  │                  │
│ │ Akkubohrer   │  │ Winkelschl.  │                  │
│ │ €89.99       │  │ €159.99      │                  │
│ │ ★★★★★        │  │ ★★★★★        │                  │
│ │ [Add]        │  │ [Add]        │                  │
│ │ [Detail]     │  │ [Detail]     │                  │
│ └──────────────┘  └──────────────┘                  │
│                                                      │
│ ┌──────────────┐  ┌──────────────┐                  │
│ │ [Image]      │  │ [Image]      │                  │
│ │ IXO 5.5V     │  │ GOP 30M      │                  │
│ │ Bit-Schr.    │  │ Multifnc.    │                  │
│ │ €49.99       │  │ €279.99      │                  │
│ │ ★★★★★        │  │ ★★★★★        │                  │
│ │ [Add]        │  │ [Add]        │                  │
│ │ [Detail]     │  │ [Detail]     │                  │
│ └──────────────┘  └──────────────┘                  │
│                                                      │
│ < Previous | Pages: 1 of 4 | Next >                 │
│                                                      │
│ Footer: © 2026 | Support                            │
└──────────────────────────────────────────────────────┘
```

---

## Mobile Layout (0-575px)

```
┌────────────────────────────────┐
│ ╔════════════════════════════╗  │
│ ║ BOSCH TOOL FINDER    ☰     ║  │
│ ║ 🔍 Search Results          ║  │
│ ╚════════════════════════════╝  │
│                                 │
│ ┌──────────────────────────┐   │
│ │ 🔎 Search Bosch tools... │   │
│ │ (clear/magnifying glass)  │   │
│ └──────────────────────────┘   │
│                                 │
│ Quick Filters                   │
│ [Category ▼] [Power ▼]          │
│ [Weight ▼] [Rating ▼]           │
│                                 │
│ Results: 47 tools found         │
│ Sort: [Relevance ▼]             │
│                                 │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │                          │   │
│ │ GSR 12V-35 Akkubohrer    │   │
│ │ €89.99 | ★★★★★ (142)     │   │
│ │ [+ Add]  [View Detail]   │   │
│ └──────────────────────────┘   │
│                                 │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │                          │   │
│ │ PWS 700-125 Winkels.     │   │
│ │ €159.99 | ★★★★★ (89)     │   │
│ │ [+ Add]  [View Detail]   │   │
│ └──────────────────────────┘   │
│                                 │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │                          │   │
│ │ IXO 5.5V Bit-Schr.       │   │
│ │ €49.99 | ★★★★★ (156)     │   │
│ │ [+ Add]  [View Detail]   │   │
│ └──────────────────────────┘   │
│                                 │
│ < Previous | Page 1 of 4        │
│           Next >                │
└────────────────────────────────┘
```

---

## Key Components

### Search Bar (Autocomplete)
- **Input Placeholder**: "Search by model, name, category..."
- **Debounce**: 300ms (FuseLJS)
- **Dropdown Suggestions**: Top 5 matches with icons
- **Search Algorithm**: Fuzzy matching on model, name, category
- **Accessibility**: ARIA live region for suggestions

### Filter Panel
- **Categories**: Accordion collapsible
- **Power Levels**: Radio buttons (single select)
- **Weight Range**: Slider or checkboxes
- **Rating**: Star filter (4+, 5 stars)
- **Applied Filters**: Chip badges showing active filters + count
- **Clear All**: Button to reset all filters

### Results Grid
- **Desktop**: 3-column grid (12-column layout system)
- **Tablet**: 2-column grid
- **Mobile**: 1-column (full width)
- **Pagination**: "< Previous | Page X of Y | Next >"
- **Sort Options**: Relevance, Price (↑↓), Rating, Newest

### Tool Card
- **Image**: 200x200px, placeholder if missing
- **Name**: Short model name (14px, bold)
- **Category**: Subcategory (12px, secondary color)
- **Price**: Large, primary color (16px, bold)
- **Rating**: Star badge + count (12px)
- **CTA Buttons**: 
  - [+ Add to Collection] — primary color
  - [View Detail] — secondary (link style)
- **Hover State**: Card shadow lift, slight scale (1.02x)

---

## Accessibility Notes

- ✅ **Search Input**: ARIA label "Search Bosch tools by model or category"
- ✅ **Filter Panel**: ARIA expanded/collapsed states
- ✅ **Tool Card**: Semantic buttons, descriptive alt text for images
- ✅ **Results Count**: Dynamic ARIA live region ("47 tools found")
- ✅ **Pagination**: Links include current/total pages
- ✅ **Keyboard Nav**: Tab through filters, Enter on suggestions

---

## Interaction Notes

1. **Search Suggestions**: Appear as user types (500ms debounce)
2. **Filter Application**: Results update in real-time (or on "Apply" click for performance)
3. **Infinite Scroll** (Alternative): Load next 12 items on scroll-to-bottom
4. **Empty State**: "No tools match your filters. Try clearing some filters."
5. **Loading State**: Skeleton loaders for tool cards while fetching
6. **Mobile**: Filter panel toggles (slide-in drawer or modal)
