# Collection Manager Wireframe
## Bosch Professional Tool Finder - Manage Collections & Organize Tools

**Purpose:** Create, edit, delete collections; add/remove tools; organize by L-Boxx  
**Personas:** Harry (simple list), Lena (bulk operations), Ollie (exporting)

---

## Desktop Layout (993px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════════════════════╗   │
│ ║ 📦 Home    🔍 Search    📋 Collections    🗂️  L-Boxx Planner  ⚙️ Menu  ║   │
│ ╚═══════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  MY COLLECTIONS                                                        ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║  [+ New Collection] [Import] [Export All]  View: [List ▼] [Grid ▼]   ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  COLLECTIONS (3 total)                                                 ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  ┌──────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ 🔧 Meine Werkstatt                    Updated: 3 hrs ago      │ ║   │
│ ║  │ Description: Main workshop tools                             │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ 15 Tools | 28.5 kg | €2,450 total                             │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ [Open] [Edit Name] [Manage Tools] [Add to L-Boxx] [Export]  │ ║   │
│ ║  │ [Archive] [Delete] [▼ More]                                  │ ║   │
│ ║  └──────────────────────────────────────────────────────────────────┘ ║   │
│ ║                                                                        ║   │
│ ║  ┌──────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ 🎒 Mobil Set                          Updated: 1 day ago        │ ║   │
│ ║  │ Description: Tools for on-the-go sites                         │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ 8 Tools | 12.3 kg | €890 total                                │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ [Open] [Edit Name] [Manage Tools] [Add to L-Boxx] [Export]  │ ║   │
│ ║  │ [Archive] [Delete] [▼ More]                                  │ ║   │
│ ║  └──────────────────────────────────────────────────────────────────┘ ║   │
│ ║                                                                        ║   │
│ ║  ┌──────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ 🏗️ Baustelle                          Updated: 5 days ago       │ ║   │
│ ║  │ Description: Heavy construction tools                          │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ 12 Tools | 45.2 kg | €3,200 total                             │ ║   │
│ ║  │                                                               │ ║   │
│ ║  │ [Open] [Edit Name] [Manage Tools] [Add to L-Boxx] [Export]  │ ║   │
│ ║  │ [Archive] [Delete] [▼ More]                                  │ ║   │
│ ║  └──────────────────────────────────────────────────────────────────┘ ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  COLLECTION DETAIL (When "Open" is clicked)                            ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  Collection: "Meine Werkstatt"  [← Back] [Edit] [Export] [Delete]    ║   │
│ ║  Total: 15 Tools | 28.5 kg | €2,450                                   ║   │
│ ║                                                                        ║   │
│ ║  Tools in Collection:  [Grid View] [List View]  Sort by: [Name ▼]   ║   │
│ ║  ┌──────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ ☐ │ Image   │ Model             │ Category    │ Weight  │ Price │ ║   │
│ ║  ├──────────────────────────────────────────────────────────────────┤ ║   │
│ ║  │ ☐ │ [Img]   │ GSR 12V-35        │ Drill       │ 1.2 kg  │ €89   │ ║   │
│ ║  │   │         │ [+ Add qty]       │             │ (qty:2) │       │ ║   │
│ ║  │   │         │ [Remove]          │             │         │       │ ║   │
│ ║  │ ☐ │ [Img]   │ PWS 700-125       │ Angle Gr.   │ 2.5 kg  │ €159  │ ║   │
│ ║  │   │         │ [+ Add qty]       │             │ (qty:1) │       │ ║   │
│ ║  │   │         │ [Remove]          │             │         │       │ ║   │
│ ║  │ ☐ │ [Img]   │ IXO 5.5V          │ Bit Driver  │ 0.6 kg  │ €49   │ ║   │
│ ║  │   │         │ [+ Add qty]       │             │ (qty:1) │       │ ║   │
│ ║  │   │         │ [Remove]          │             │         │       │ ║   │
│ ║  │   │         │ [Load more...]    │             │         │       │ ║   │
│ ║  └──────────────────────────────────────────────────────────────────┘ ║   │
│ ║                                                                        ║   │
│ ║  Bulk Actions:                                                         ║   │
│ ║  ☐ Select All  [Delete Selected] [Move to Collection] [L-Boxx Match] ║   │
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
│ ║    MY COLLECTIONS                             ║   │
│ ║ [+ New] [Export All]  View: [List ▼]          ║   │
│ ╚════════════════════════════════════════════════╝   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ 🔧 Meine Werkstatt                           ║   │
│ ║ Updated: 3 hrs ago                           ║   │
│ ║ 15 Tools | 28.5 kg | €2,450                  ║   │
│ ║ [Open] [Edit] [Delete] [Export]              ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ 🎒 Mobil Set                                 ║   │
│ ║ Updated: 1 day ago                           ║   │
│ ║ 8 Tools | 12.3 kg | €890                     ║   │
│ ║ [Open] [Edit] [Delete] [Export]              ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ 🏗️ Baustelle                                 ║   │
│ ║ Updated: 5 days ago                          ║   │
│ ║ 12 Tools | 45.2 kg | €3,200                  ║   │
│ ║ [Open] [Edit] [Delete] [Export]              ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ COLLECTION DETAIL (if opened)                ║   │
│ ║ "Meine Werkstatt"  [← Back] [Edit] [Export] ║   │
│ ║ 15 Tools | 28.5 kg | €2,450                  ║   │
│ ║                                              ║   │
│ ║ Sort: [Name ▼]  [Grid] [List]               ║   │
│ ║ ┌──────────────────────────────────────────┐ ║   │
│ ║ │ ☐ GSR 12V-35 Drill                      │ ║   │
│ ║ │    1.2 kg | €89.99 | [Qty: 2+] [Remove]│ ║   │
│ ║ │ ☐ PWS 700-125 Angle Gr.                 │ ║   │
│ ║ │    2.5 kg | €159.99 | [Qty: 1+] [Rmv]  │ ║   │
│ ║ │ ☐ IXO 5.5V Bit Driver                   │ ║   │
│ ║ │    0.6 kg | €49.99 | [Qty: 1+] [Remove]│ ║   │
│ ║ │ [Show more...]                          │ ║   │
│ ║ └──────────────────────────────────────────┘ ║   │
│ ║                                              ║   │
│ ║ [Delete Selected] [L-Boxx Match] [Bulk Opt] ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ Footer: © 2026 | Support                            │
└──────────────────────────────────────────────────────┘
```

---

## Mobile Layout (0-575px)

```
┌────────────────────────────────┐
│ ╔════════════════════════════╗  │
│ ║ MY COLLECTIONS         ☰   ║  │
│ ║ [+ New Collection]         ║  │
│ ╚════════════════════════════╝  │
│                                 │
│ ┌──────────────────────────┐   │
│ ║ 🔧 Meine Werkstatt       ║   │
│ ║ Updated: 3 hrs ago       ║   │
│ ║ 15 Tools | 28.5 kg       ║   │
│ ║ €2,450 total             ║   │
│ ║ [Open] [Edit] [Export]   ║   │
│ ║ [Delete] [More ▼]        ║   │
│ └──────────────────────────┘   │
│                                 │
│ ┌──────────────────────────┐   │
│ ║ 🎒 Mobil Set             ║   │
│ ║ Updated: 1 day ago       ║   │
│ ║ 8 Tools | 12.3 kg        ║   │
│ ║ €890 total               ║   │
│ ║ [Open] [Edit] [Export]   ║   │
│ ║ [Delete] [More ▼]        ║   │
│ └──────────────────────────┘   │
│                                 │
│ ┌──────────────────────────┐   │
│ ║ 🏗️ Baustelle             ║   │
│ ║ Updated: 5 days ago      ║   │
│ ║ 12 Tools | 45.2 kg       ║   │
│ ║ €3,200 total             ║   │
│ ║ [Open] [Edit] [Export]   ║   │
│ ║ [Delete] [More ▼]        ║   │
│ └──────────────────────────┘   │
│                                 │
│ ╔═ COLLECTION DETAIL ══════╗   │
│ ║ 🔧 Meine Werkstatt       ║   │
│ ║ ← Back                    ║   │
│ ║ 15 Tools | €2,450         ║   │
│ ║                            ║   │
│ ║ Sort: [Name ▼]            ║   │
│ ║ View: [List] [Grid]        ║   │
│ ║                            ║   │
│ ║ ┌────────────────────────┐ ║   │
│ ║ │ ☐ GSR 12V-35           │ ║   │
│ ║ │    Drill | 1.2 kg      │ ║   │
│ ║ │    €89 | Qty: 2        │ ║   │
│ ║ │ [Qty:+] [-] [Remove]   │ ║   │
│ ║ └────────────────────────┘ ║   │
│ ║ ┌────────────────────────┐ ║   │
│ ║ │ ☐ PWS 700-125          │ ║   │
│ ║ │    Angle Gr. | 2.5 kg  │ ║   │
│ ║ │    €159 | Qty: 1       │ ║   │
│ ║ │ [Qty:+] [-] [Remove]   │ ║   │
│ ║ └────────────────────────┘ ║   │
│ ║ ┌────────────────────────┐ ║   │
│ ║ │ ☐ IXO 5.5V             │ ║   │
│ ║ │    Bit Driver | 0.6 kg │ ║   │
│ ║ │    €49 | Qty: 1        │ ║   │
│ ║ │ [Qty:+] [-] [Remove]   │ ║   │
│ ║ └────────────────────────┘ ║   │
│ ║ [Show more...]             ║   │
│ ║                            ║   │
│ ║ [Export] [L-Boxx Match]    ║   │
│ ║ [Delete Collection]        ║   │
│ ╚════════════════════════════╝   │
│                                 │
│ Footer: © 2026 | Support        │
└────────────────────────────────┘
```

---

## Key Components

### Collections List
- **Collection Card**: Icon, name, description, metadata (tools count, weight, value)
- **Last Updated**: Timestamp ("3 hrs ago")
- **Action Buttons**: Open, Edit, Export, Delete, Archive
- **View Toggle**: List or Grid view
- **Empty State**: "No collections yet. Create your first collection!"

### Collection Detail View
- **Header**: Collection name, total tools, total weight, total value
- **Navigation**: Back button, Edit, Export, Delete buttons
- **Tools Table/List**:
  - Checkbox for bulk selection
  - Tool image, model name
  - Category, weight, price
  - Quantity (+/- buttons, editable)
  - Remove button
- **Sorting**: By name, category, weight, price
- **View Toggle**: Grid (cards) or List (table)

### Bulk Actions
- **Select All Checkbox**: Top of list
- **Bulk Actions Bar**: Delete, Move to Collection, L-Boxx Match
- **Active when selections made**: Show/hide dynamically

### Add/Edit Modal (for new/editing collections)
- **Fields**: Collection name, description, icon/emoji selector
- **Actions**: Create/Update, Cancel
- **Validation**: Name required (max 50 chars)

### Export Options Modal
- **Formats**: PDF, CSV, JSON
- **Include Options**: 
  - ☐ Prices
  - ☐ Quantities
  - ☐ Notes
  - ☐ L-Boxx assignments
- **File Name**: Auto-generated or custom

---

## Accessibility Notes

- ✅ **Checkboxes**: Associated labels for each item
- ✅ **Tables**: Proper `<thead>`, `<tbody>` semantic structure
- ✅ **Buttons**: Clear labels (not just icons)
- ✅ **Focus Management**: Modal focuses on first input when opened
- ✅ **Sorting**: Links include current sort direction (↑↓)
- ✅ **Keyboard Nav**: Tab through all controls, Enter to select

---

## Interaction Notes

1. **Add to Collection**: 
   - [+ New Collection] → Modal opens
   - Enter name, description, icon → Create
2. **Edit Collection**:
   - [Edit Name] → Modal with pre-filled fields → Update
3. **Manage Tools**:
   - [Manage Tools] → Collection detail view
   - Click checkbox → enable bulk actions
   - [Delete Selected] → Confirm dialog
4. **Export**:
   - [Export] → Modal with format/options
   - Generate downloadable file (client-side if small)
5. **L-Boxx Match**:
   - [Add to L-Boxx] or [L-Boxx Match] → Navigate to L-Boxx Planner
   - Pre-populate with selected tools
6. **Archive** (future):
   - Move to separate "Archived" tab
   - Can restore later
