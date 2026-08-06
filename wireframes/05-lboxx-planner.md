# L-Boxx Planner Wireframe
## Bosch Professional Tool Finder - Visual L-Boxx Configuration & Packing View

**Purpose:** Match collection tools to L-Boxx containers, visualize packing, check capacity  
**Personas:** Harry (quick fit check), Lena (optimal packing), Ollie (explore options)

---

## Desktop Layout (993px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════════════════════╗   │
│ ║ 📦 Home    🔍 Search    📋 Collections    🗂️  L-Boxx Planner  ⚙️ Menu  ║   │
│ ╚═══════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  L-BOXX PLANNER                                                        ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║  Select Collection: [Meine Werkstatt ▼]  [Start with tools]           ║   │
│ ║  Tools to Pack: 15 | Total Weight: 28.5 kg | Ready: ✓ Begin Matching  ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  MATCHING RESULTS (15 tools, 28.5 kg)                                  ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  Top Recommendations (by confidence/cost):                             ║   │
│ ║                                                                        ║   │
│ ║  ┌───────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ ★ RANK 1 - BEST MATCH (95% confidence)                           │ ║   │
│ ║  │                                                                   │ ║   │
│ ║  │ L-Boxx 102 (18L) + INLAY_102_AKKUBOHRERV1                         │ ║   │
│ ║  │ ┌──────────────────┐  Fits: 12 of 15 tools                        │ ║   │
│ ║  │ │ [L-Boxx Img]     │  Not fitting: PWS 700 (too large)            │ ║   │
│ ║  │ │                  │  Dimensions: 442 x 357 x 131mm              │ ║   │
│ ║  │ │ [Inlay Preview]  │  Weight: 8.2 kg / 25 kg max (68% used)       │ ║   │
│ ║  │ │                  │  Cost: €79.98                                │ ║   │
│ ║  │ └──────────────────┘  Solution: Add L-Boxx 136 for remaining      │ ║   │
│ ║  │                        tools                                       │ ║   │
│ ║  │ [View Packing Layout] [Add to Cart] [Configure Inlay]            │ ║   │
│ ║  └───────────────────────────────────────────────────────────────────┘ ║   │
│ ║                                                                        ║   │
│ ║  ┌───────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ ★ RANK 2 - ROOMY (78% confidence)                                 │ ║   │
│ ║  │                                                                   │ ║   │
│ ║  │ L-Boxx 136 (28L) + INLAY_136_UNIVERSAL                            │ ║   │
│ ║  │ ┌──────────────────┐  Fits: 15 of 15 tools (all!)                 │ ║   │
│ ║  │ │ [L-Boxx Img]     │  Dimensions: 442 x 357 x 189mm              │ ║   │
│ ║  │ │                  │  Weight: 28.5 kg / 30 kg max (95% used)      │ ║   │
│ ║  │ │ [Inlay Preview]  │  Cost: €89.98                                │ ║   │
│ ║  │ │                  │  Rationale: Tight fit, single box solution   │ ║   │
│ ║  │ └──────────────────┘                                              │ ║   │
│ ║  │                                                                   │ ║   │
│ ║  │ [View Packing Layout] [Add to Cart] [Configure Inlay]            │ ║   │
│ ║  └───────────────────────────────────────────────────────────────────┘ ║   │
│ ║                                                                        ║   │
│ ║  ┌───────────────────────────────────────────────────────────────────┐ ║   │
│ ║  │ ★ RANK 3 - LUXURY (45% confidence)                                │ ║   │
│ ║  │                                                                   │ ║   │
│ ║  │ L-Boxx 340 (60L) + Custom Arrangement                             │ ║   │
│ ║  │ ┌──────────────────┐  Fits: 15 of 15 tools (with room)            │ ║   │
│ ║  │ │ [L-Boxx Img]     │  Dimensions: 442 x 357 x 340mm              │ ║   │
│ ║  │ │                  │  Weight: 28.5 kg / 35 kg max (81% used)      │ ║   │
│ ║  │ │ [Inlay Preview]  │  Cost: €139.98                               │ ║   │
│ ║  │ │                  │  Rationale: Most storage, cleanest layout    │ ║   │
│ ║  │ └──────────────────┘                                              │ ║   │
│ ║  │                                                                   │ ║   │
│ ║  │ [View Packing Layout] [Add to Cart] [Configure Inlay]            │ ║   │
│ ║  └───────────────────────────────────────────────────────────────────┘ ║   │
│ ╚════════════════════════════════════════════════════════════════════════╝   │
│                                                                               │
│ ╔════════════════════════════════════════════════════════════════════════╗   │
│ ║  PACKING VISUALIZATION (When "View Layout" clicked)                    ║   │
│ ║  ──────────────────────────────────────────────────────────────────    ║   │
│ ║                                                                        ║   │
│ ║  L-Boxx 102 + INLAY_102_AKKUBOHRERV1 (Top View)                       ║   │
│ ║  ┌──────────────────────────────────────────────────────────────┐    ║   │
│ ║  │ ┌─ Left Section ─────┐ ┌─ Right Section ────────────────────┐│   ║   │
│ ║  │ │                    │ │                                   ││   ║   │
│ ║  │ │  🔧 GSR 12V-35     │ │  [2] IXO 5.5V     [3] Bit Set      ││   ║   │
│ ║  │ │  (1.2 kg)          │ │  (0.6 kg)         (0.3 kg)         ││   ║   │
│ ║  │ │                    │ │  ┌──────────────────────────────┐  ││   ║   │
│ ║  │ │                    │ │  │ [4] GOB 30M   [5] Charger    │  ││   ║   │
│ ║  │ │                    │ │  │ (3.2 kg)      (0.8 kg)       │  ││   ║   │
│ ║  │ │                    │ │  └──────────────────────────────┘  ││   ║   │
│ ║  │ │                    │ │                                   ││   ║   │
│ ║  │ └────────────────────┘ └───────────────────────────────────┘│   ║   │
│ ║  │ Capacity: 8.2 kg / 25 kg max    Space Used: 68%              │   ║   │
│ ║  └──────────────────────────────────────────────────────────────┘   ║   │
│ ║                                                                        ║   │
│ ║  Not Fitting in this configuration:                                   ║   │
│ ║  ❌ PWS 700-125 (too large, 2.5 kg) → Recommend L-Boxx 136            ║   │
│ ║  ❌ PSB 500 (stitch saw, 5.5 kg) → Try L-Boxx 170                     ║   │
│ ║                                                                        ║   │
│ ║  Suggestions:                                                          ║   │
│ ║  [Add 2nd L-Boxx for remaining] [Try next recommendation] [Manual Edit] ║   │
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
│ ║ L-BOXX PLANNER                                 ║   │
│ ║ [Meine Werkstatt ▼]  [Start Matching]          ║   │
│ ║ 15 Tools | 28.5 kg                             ║   │
│ ╚════════════════════════════════════════════════╝   │
│                                                      │
│ MATCHING RESULTS                                    │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ RANK 1 - BEST MATCH (95%)                   ║   │
│ ║ L-Boxx 102 + Inlay 102-V1                    ║   │
│ ║ [L-Boxx Image]                               ║   │
│ ║ Fits: 12 of 15 tools                         ║   │
│ ║ Weight: 8.2 kg / 25 kg (68% used)            ║   │
│ ║ Cost: €79.98                                 ║   │
│ ║ [View Layout] [Add to Cart]                  ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ RANK 2 - ROOMY (78%)                         ║   │
│ ║ L-Boxx 136 + Inlay 136-Universal             ║   │
│ ║ [L-Boxx Image]                               ║   │
│ ║ Fits: 15 of 15 tools (all!)                  ║   │
│ ║ Weight: 28.5 kg / 30 kg (95% used)           ║   │
│ ║ Cost: €89.98                                 ║   │
│ ║ [View Layout] [Add to Cart]                  ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ ║ RANK 3 - LUXURY (45%)                        ║   │
│ ║ L-Boxx 340 + Custom                          ║   │
│ ║ [L-Boxx Image]                               ║   │
│ ║ Fits: 15 of 15 tools                         ║   │
│ ║ Weight: 28.5 kg / 35 kg (81% used)           ║   │
│ ║ Cost: €139.98                                ║   │
│ ║ [View Layout] [Add to Cart]                  ║   │
│ └──────────────────────────────────────────────┘   │
│                                                      │
│ PACKING LAYOUT (if opened)                         │
│ L-Boxx 102 + Inlay 102-V1                          │
│                                                      │
│ ┌──────────────────────────────────────────────┐   │
│ │ [Top View]                                   │   │
│ │ ┌──────┐ ┌──────────────────────────────┐  │   │
│ │ │ [1]  │ │  [2] [3] [4] [5]             │  │   │
│ │ │ GSR  │ │  IXO  Bit GOP Chrg           │  │   │
│ │ │12V   │ │ 5.5V  Set 30M                │  │   │
│ │ │1.2kg │ │                              │  │   │
│ │ └──────┘ └──────────────────────────────┘  │   │
│ └──────────────────────────────────────────────┘   │
│ Capacity: 8.2kg / 25kg (68%)                       │
│                                                      │
│ Not Fitting:                                        │
│ ❌ PWS 700-125 (too large)                         │
│ ❌ PSB 500 (too heavy)                             │
│                                                      │
│ [Add 2nd L-Boxx] [Try Next] [Manual]               │
│                                                      │
│ Footer: © 2026 | Support                            │
└──────────────────────────────────────────────────────┘
```

---

## Mobile Layout (0-575px)

```
┌────────────────────────────────┐
│ ╔════════════════════════════╗  │
│ ║ L-BOXX PLANNER       ☰     ║  │
│ ╚════════════════════════════╝  │
│                                 │
│ Select Collection:              │
│ [Meine Werkstatt ▼]             │
│                                 │
│ 15 Tools | 28.5 kg              │
│ [Start Matching]                │
│                                 │
│ ╔══ RANK 1 - BEST ════════════╗ │
│ ║ L-Boxx 102 + Inlay 102-V1   ║ │
│ ║                              ║ │
│ ║ [L-Boxx Product Image]       ║ │
│ ║                              ║ │
│ ║ ✓ Fits: 12 of 15 tools       ║ │
│ ║ Weight: 8.2 kg / 25 kg max   ║ │
│ ║ Capacity: 68% used           ║ │
│ ║ Cost: €79.98                 ║ │
│ ║ Confidence: 95%              ║ │
│ ║                              ║ │
│ ║ Not fitting: 3 tools         ║ │
│ ║ • PWS 700-125 (too large)    ║ │
│ ║ • PSB 500 (too heavy)        ║ │
│ ║ • [1 more]                   ║ │
│ ║                              ║ │
│ ║ [View Layout] [Add to Cart]  ║ │
│ ╚══════════════════════════════╝ │
│                                 │
│ ╔══ RANK 2 - ROOMY ════════════╗ │
│ ║ L-Boxx 136 + Inlay 136       ║ │
│ ║ [L-Boxx Image]               ║ │
│ ║ ✓ Fits: ALL 15 tools! ✓      ║ │
│ ║ Weight: 28.5 kg / 30 kg      ║ │
│ ║ Capacity: 95% used           ║ │
│ ║ Cost: €89.98                 ║ │
│ ║ Confidence: 78%              ║ │
│ ║ [View Layout] [Add to Cart]  ║ │
│ ╚══════════════════════════════╝ │
│                                 │
│ ╔══ PACKING LAYOUT ════════════╗ │
│ ║ L-Boxx 102 (Top View)        ║ │
│ ║ ┌──────────────────────────┐ ║ │
│ ║ │                          │ ║ │
│ ║ │    [1]        [2] [3]    │ ║ │
│ ║ │   GSR        IXO Bit     │ ║ │
│ ║ │   12V        5.5V Set    │ ║ │
│ ║ │                          │ ║ │
│ ║ │   [4]        [5]         │ ║ │
│ ║ │   GOP        Charger     │ ║ │
│ ║ │   30M                    │ ║ │
│ ║ │                          │ ║ │
│ ║ └──────────────────────────┘ ║ │
│ ║                              ║ │
│ ║ Capacity Used: 68%           ║ │
│ ║ Weight: 8.2 kg / 25 kg       ║ │
│ ║                              ║ │
│ ║ [Add 2nd Box] [Try Next]     ║ │
│ ╚══════════════════════════════╝ │
│                                 │
│ Footer: © 2026 | Support        │
└────────────────────────────────┘
```

---

## Key Components

### Collection Selector
- **Dropdown**: Select which collection to optimize
- **Summary**: Tools count, total weight, total value
- **Start Button**: "Begin Matching"
- **Manual Input**: Add tools individually if no collection selected

### Recommendation Cards
- **Rank Badge**: "★ RANK 1", "RANK 2", etc.
- **Confidence Score**: Visual bar + percentage
- **L-Boxx Image**: Product photo (125x125px min)
- **Specs**: Dimensions, volume, max weight
- **Fit Info**: Number of tools that fit, list of items not fitting
- **Weight Indicator**: Used kg / max kg with % bar
- **Cost**: Total price (L-Boxx + Inlay)
- **Rationale**: Short explanation why this is recommended
- **CTAs**: View Layout, Add to Cart, Configure Inlay

### Packing Visualization
- **2D Top View**: SVG or canvas rendering of L-Boxx inlay
- **Tool Placement**: Numbered compartments showing tool positions
- **Tool Labels**: Name, weight, color coding
- **Capacity Bar**: Visual indicator of weight/volume used
- **Not Fitting List**: Tools that don't fit (with reason: too large, too heavy)
- **Suggestions**: Links to add 2nd box, try next recommendation

### Capacity Indicator
- **Weight Gauge**: 0-100% filled bar, color-coded (green ✓, yellow ⚠, red ✗)
- **Dimensions Check**: 3D visualization or simplified checklist
- **Volume Used**: Percentage of available space

---

## Accessibility Notes

- ✅ **Rankings**: Screen reader announces rank and confidence
- ✅ **Packing View**: ARIA labels for each compartment
- ✅ **Capacity Bar**: `<progress>` element or ARIA live region
- ✅ **Images**: Descriptive alt text ("L-Boxx 102 product image")
- ✅ **Color**: Not relying only on color to indicate fit/not-fit (also use ✓/✗)
- ✅ **Keyboard Nav**: All buttons and recommendations focusable

---

## Interaction Notes

1. **Start Matching**:
   - User selects collection → Click [Start Matching]
   - Algorithm runs (should be instant for <100 tools)
   - Results appear sorted by confidence

2. **View Layout**:
   - Click [View Layout] → Packing visualization appears
   - 2D top-down view of inlay compartments
   - Tools color-coded and labeled

3. **Add to Cart** (Future):
   - Click [Add to Cart] → Suggests adding L-Boxx + Inlay to shopping cart
   - Links to Bosch Shop (external)

4. **Configure Inlay** (Future):
   - Open custom inlay configuration modal
   - Drag-drop tools into compartments
   - Save custom arrangement

5. **Manual Edit**:
   - Advanced users can manually rearrange tools
   - Drag within packing view
   - Validate on save (collision detection)

---

## Matching Algorithm Logic

```
Input: Collection with N tools
For each L-Boxx type (102, 136, 170, 340):
  1. Sort tools by size/weight (largest first)
  2. Attempt to fit into L-Boxx using bin-packing algorithm
  3. Calculate:
     - tools_fit_count / total_tools
     - weight_used / max_weight
     - confidence = (tools_fit_count / N) * 0.7 + (1 - weight_overflow) * 0.3
  4. Suggest inlay based on best-fit tools
Output: Sorted list of recommendations by confidence + cost
```

**Edge Cases:**
- All tools fit in one box → Recommend smallest box
- Single very large tool → Suggest largest box
- Mix of heavy + light → Balance across multiple boxes
- Custom inlay might be required → Flag for future customization
