# Home/Dashboard Wireframe
## Bosch Professional Tool Finder - Welcome Screen

**Purpose:** Welcome users, showcase key stats, provide quick actions, display recent collections  
**Personas:** All (Harry, Lena, Ollie)  
**Breakpoints:** Mobile (0-575px), Tablet (576-992px), Desktop (993px+)

---

## Desktop Layout (993px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════════════════════╗   │
│ ║                        BOSCH PROFESSIONAL TOOL FINDER                 ║   │
│ ║                                                                       ║   │
│ ║ 📦 Home    🔍 Search    📋 Collections    🗂️  L-Boxx Planner  ⚙️ Menu  ║   │
│ ╚═══════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  👤 Welcome back, Harry! 🎯 Quick Actions                             ║   │
│ ║                                                                        ║   │
│ ║  ┌──────────────────────────────────────┐  ┌──────────────────────┐  ║   │
│ ║  │ Your Collections Summary             │  │ Quick Links:         │  ║   │
│ ║  │                                      │  │ • Browse Catalog     │  ║   │
│ ║  │ Total Tools: 47                      │  │ • New Collection     │  ║   │
│ ║  │ Collections: 3                       │  │ • My Collections     │  ║   │
│ ║  │ L-Boxx Units: 2                      │  │ • L-Boxx Matcher     │  ║   │
│ ║  │                                      │  │ • Export Data        │  ║   │
│ ║  └──────────────────────────────────────┘  └──────────────────────┘  ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  📚 Recent Collections (Last 3)                                        ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  ┌─────────────────────┐  ┌─────────────────────┐  ┌──────────────┐  ║   │
│ ║  │ 🔧 Meine Werkstatt  │  │ 🎒 Mobil Set        │  │ 🏗️ Baustelle │  ║   │
│ ║  │ 15 Tools            │  │ 8 Tools             │  │ 12 Tools     │  ║   │
│ ║  │ Updated: 3 hrs ago  │  │ Updated: 1 day ago  │  │ Updated: 5   │  ║   │
│ ║  │                     │  │                     │  │ days ago     │  ║   │
│ ║  │ [Open Collection]   │  │ [Open Collection]   │  │ [Open Coll]  │  ║   │
│ ║  └─────────────────────┘  └─────────────────────┘  └──────────────┘  ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  ⭐ Featured Tools (This Week)                                         ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  ║   │
│ ║  │ [Tool Image] │  │ [Tool Image] │  │ [Tool Image] │  │ [Tool I] │  ║   │
│ ║  │              │  │              │  │              │  │          │  ║   │
│ ║  │ GSR 12V-35   │  │ PWS 700-125  │  │ IXO 5.5 V    │  │ GOP 30M  │  ║   │
│ ║  │ Akkubohrer   │  │ Winkelsch.   │  │ Bit-Shrber   │  │ Multi    │  ║   │
│ ║  │ ★★★★★ (142) │  │ ★★★★★ (89)   │  │ ★★★★★ (156) │  │ ★★★★☆   │  ║   │
│ ║  │ [+ Add]      │  │ [+ Add]      │  │ [+ Add]      │  │ [+ Add]  │  ║   │
│ ║  └──────────────┘  └──────────────┘  └──────────────┘  └──────────┘  ║   │
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
│ ║     BOSCH PROFESSIONAL TOOL FINDER            ║   │
│ ║ 📦 Home 🔍 Search 📋 Collections 🗂️ L-Boxx   ║   │
│ ╚════════════════════════════════════════════════╝   │
│                                                      │
│ ╔═══════════════════════════════════════════════╗   │
│ ║  Welcome back, Harry!                         ║   │
│ ║  Your Collections: 47 Tools | 3 Collections  ║   │
│ ║  [Browse Catalog] [New Collection] [Export]  ║   │
│ ╚═══════════════════════════════════════════════╝   │
│                                                      │
│ ╔═══════════════════════════════════════════════╗   │
│ ║  Recent Collections                           ║   │
│ ║  ─────────────────────────────────────────    ║   │
│ ║  ┌──────────────────┐  ┌──────────────────┐  ║   │
│ ║  │ 🔧 Meine Werk.   │  │ 🎒 Mobil Set     │  ║   │
│ ║  │ 15 Tools         │  │ 8 Tools          │  ║   │
│ ║  │ [Open]           │  │ [Open]           │  ║   │
│ ║  └──────────────────┘  └──────────────────┘  ║   │
│ ║  ┌──────────────────┐                         ║   │
│ ║  │ 🏗️ Baustelle     │                         ║   │
│ ║  │ 12 Tools         │                         ║   │
│ ║  │ [Open]           │                         ║   │
│ ║  └──────────────────┘                         ║   │
│ ╚═══════════════════════════════════════════════╝   │
│                                                      │
│ ╔═══════════════════════════════════════════════╗   │
│ ║  Featured Tools                               ║   │
│ ║  ┌──────────┐  ┌──────────┐  ┌──────────┐   ║   │
│ ║  │ [Image]  │  │ [Image]  │  │ [Image]  │   ║   │
│ ║  │ GSR 12V  │  │ PWS 700  │  │ IXO 5.5V │   ║   │
│ ║  │ ★★★★★    │  │ ★★★★★    │  │ ★★★★★    │   ║   │
│ ║  │ [Add]    │  │ [Add]    │  │ [Add]    │   ║   │
│ ║  └──────────┘  └──────────┘  └──────────┘   ║   │
│ ╚═══════════════════════════════════════════════╝   │
│                                                      │
│ Footer: © 2026 | About | Support | Privacy         │
└──────────────────────────────────────────────────────┘
```

---

## Mobile Layout (0-575px)

```
┌────────────────────────────────┐
│ ╔════════════════════════════╗  │
│ ║ BOSCH TOOL FINDER    ☰     ║  │
│ ╚════════════════════════════╝  │
│                                 │
│ Welcome, Harry! ✋              │
│ 47 Tools | 3 Collections       │
│                                 │
│ ┌──────────────────────────┐   │
│ │ [🔍 Search Tools]        │   │
│ └──────────────────────────┘   │
│                                 │
│ ┌──────────────────────────┐   │
│ │ [+ New Collection]       │   │
│ └──────────────────────────┘   │
│                                 │
│ Recent Collections              │
│ ──────────────────────────      │
│ 🔧 Meine Werkstatt              │
│    15 Tools | 3 hrs ago         │
│    [Open] [Edit] [Delete]       │
│                                 │
│ 🎒 Mobil Set                    │
│    8 Tools | 1 day ago          │
│    [Open] [Edit] [Delete]       │
│                                 │
│ 🏗️ Baustelle                    │
│    12 Tools | 5 days ago        │
│    [Open] [Edit] [Delete]       │
│                                 │
│ Featured Tools                  │
│ ──────────────────────────      │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │ GSR 12V-35 Akkubohrer   │   │
│ │ ★★★★★ (142 reviews)     │   │
│ │ [+ Add to Collection]    │   │
│ └──────────────────────────┘   │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │ PWS 700-125 Winkels.     │   │
│ │ ★★★★★ (89 reviews)       │   │
│ │ [+ Add to Collection]    │   │
│ └──────────────────────────┘   │
│ ┌──────────────────────────┐   │
│ │ [Tool Image]             │   │
│ │ IXO 5.5V Bit-Schrber     │   │
│ │ ★★★★★ (156 reviews)      │   │
│ │ [+ Add to Collection]    │   │
│ └──────────────────────────┘   │
│                                 │
│ [© 2026 | Support]              │
└────────────────────────────────┘
```

---

## Key Components & Annotations

### Header Navigation
- **Logo**: Bosch Professional branding (left)
- **Nav Items**: Home, Search, Collections, L-Boxx Planner
- **Hamburger Menu**: Mobile navigation toggle
- **User Profile**: (future) Login/account access

### Hero Section
- **Greeting**: Personalized "Welcome back, [Name]!"
- **Quick Stats**: Total tools, collections, L-Boxx units
- **CTA Buttons**: Browse, New Collection, Export

### Collections Cards
- **Responsive Grid**: 3 cols (desktop), 2 cols (tablet), 1 col (mobile)
- **Card Content**: Icon, name, tool count, last updated, [Open] button
- **Spacing**: 16px gutters between cards

### Featured Tools Section
- **Grid**: 4 cols (desktop), 3 cols (tablet), 1 col (mobile)
- **Tool Card**: Image, name, category, rating, [Add] button
- **Hover State**: Slight shadow lift, icon scale

### Footer
- **Links**: About, Support, Privacy, Settings
- **Copyright**: © 2026 Bosch Professional
- **Sticky on Mobile**: Yes (always accessible)

---

## Responsive Breakpoints

| Breakpoint | Width | Grid Cols | Font Size |
|------------|-------|-----------|-----------|
| Mobile | 0-575px | 1 col | 14px (body), 20px (H2) |
| Tablet | 576-992px | 2 cols | 16px (body), 24px (H2) |
| Desktop | 993px+ | 3-4 cols | 16px (body), 28px (H2) |

---

## Accessibility Annotations

- ✅ **Focus Ring**: 2px solid on nav items (visible on Tab)
- ✅ **ARIA Labels**: Links include descriptive text ("Open collection 'Meine Werkstatt'")
- ✅ **Color Contrast**: 7:1 ratio (white bg, #1a1a1a text)
- ✅ **Keyboard Nav**: All buttons/links focusable in logical order
- ✅ **Screen Reader**: Heading hierarchy (H1 → H2 → H3)

---

## Interaction Notes

1. **Card Hover (Desktop)**: Subtle shadow lift, text color shift to primary
2. **Mobile Tap**: Touch-friendly button size (minimum 44x44px)
3. **Loading State**: Skeleton loaders for collection cards while fetching
4. **Empty State**: Message if no collections exist: "Start by creating your first collection!"
