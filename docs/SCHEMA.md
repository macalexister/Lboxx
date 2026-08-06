# Bosch Pro Tool Finder - Data Schema Documentation

## Overview

This document provides comprehensive documentation of all JSON schemas used in the Bosch Professional Tool Finder application. The schema architecture follows JSON Schema Draft-07 standard and defines the structure for tools, storage systems (L-Boxx), tool inlays, and user collections.

---

## Schema Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Tools Catalog                        │
│              (tools-schema.json)                        │
│  ├─ Tool ID, Name, Category, Product Code              │
│  ├─ Specifications (Power, Voltage, Weight, etc.)      │
│  ├─ Pricing & Availability                             │
│  └─ Search Index (for FuseLJS fuzzy search)             │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ Stored in
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              User Collections                           │
│          (collection-schema.json)                       │
│  ├─ Collection ID, Name, Owner, Metadata               │
│  ├─ Items Array (Tool References)                       │
│  ├─ L-Boxx Storage Assignment                           │
│  └─ Sharing & Permission Controls                       │
└─────────────────────────────────────────────────────────┘
                 │
                 │ Assigns
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│          L-Boxx Storage System                          │
│           (lboxx-schema.json)                           │
│  ├─ L-Boxx Variant (Mini, Small, Medium, Large, XL)   │
│  ├─ Dimensions & Capacity                              │
│  ├─ Inlay Configuration                                │
│  └─ Stackability & Compatibility Matrix                │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ Contains
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│           Tool Inlay Configuration                      │
│           (inlays-schema.json)                          │
│  ├─ Inlay Type (Foam, Plastic, Wood)                   │
│  ├─ Tool Cutout Mappings                               │
│  ├─ Slot Grid Configuration                            │
│  └─ Compatibility Matrix with Tools                     │
└─────────────────────────────────────────────────────────┘
```

---

## 1. Tools Schema (`tools-schema.json`)

**Purpose:** Defines the master catalog of all Bosch Professional tools available in the application.

### Key Properties

| Field | Type | Description | Validation |
|-------|------|-------------|-----------|
| `id` | string | Unique tool identifier in kebab-case | Pattern: `^[a-z0-9\-]+$` |
| `name` | string | Full product name | Required, min 3 chars, max 100 chars |
| `manufacturer` | string | Manufacturer name | Required, default: "Bosch Professional" |
| `category` | string | Tool classification | Enum: jigsaws, circular_saws, sanders, drill_drivers, impact_drivers, angle_grinders, reciprocating_saws, cut_off_saws, laser_levels, multi_tools, heat_guns, rotary_hammers, hedge_trimmers, etc. |
| `productCode` | string | Official Bosch product code | Pattern: `^[0-9A-Z]{8,12}$` |
| `description` | string | Detailed product description | Max 500 chars |
| `image` | string (URI) | Product image URL | Valid HTTP/HTTPS URL |
| `releaseDate` | string (ISO 8601) | Product release date | Format: YYYY-MM-DD |
| `specifications` | object | Technical specifications | Nested object with power, voltage, weight, dimensions, etc. |
| `pricing` | object | Price information | Object with value, currency, includesTax |
| `availability` | string | Stock status | Enum: in_stock, limited_stock, out_of_stock, discontinued |
| `searchIndex` | array | Keywords for FuseLJS indexing | Array of strings for fuzzy search |

### Specifications Sub-Object

| Field | Type | Description | Units |
|-------|------|-------------|-------|
| `power` | object | Power consumption | W (Watts) |
| `voltage` | object | Operating voltage | V (Volts) |
| `frequency` | object | AC frequency | Hz (Hertz) |
| `weight` | object | Total weight | kg or lbs |
| `dimensions` | object | Physical dimensions | mm, cm, or in |
| `warranty` | object | Warranty period | years |
| `certifications` | array | Safety certifications | CE, GS, etc. |
| `features` | array | Key product features | Array of strings |
| `compatibility` | array | Compatible accessories | Array of strings |

### Example Tool Entry

```json
{
  "id": "bosch-gst-90-be",
  "name": "Bosch GST 90 BE Jigsaw",
  "manufacturer": "Bosch Professional",
  "category": "jigsaws",
  "productCode": "06012A7001",
  "description": "Compact jigsaw with high-speed cutting for wood, plastic, and metal",
  "image": "https://bosch-professional.com/gst-90-be.jpg",
  "releaseDate": "2019-03-15",
  "specifications": {
    "power": { "value": 650, "unit": "W" },
    "voltage": { "value": 230, "unit": "V" },
    "weight": { "value": 3.6, "unit": "kg" },
    "warranty": { "value": 3, "unit": "years" }
  },
  "pricing": {
    "value": 199.99,
    "currency": "EUR",
    "includesTax": true
  },
  "availability": "in_stock",
  "searchIndex": ["GST 90 BE", "jigsaw", "Bosch", "cutting"]
}
```

---

## 2. L-Boxx Schema (`lboxx-schema.json`)

**Purpose:** Defines the Bosch L-Boxx modular storage system and its variants.

### Key Properties

| Field | Type | Description | Validation |
|-------|------|-------------|-----------|
| `id` | string | Unique L-Boxx identifier | Pattern: `^lboxx-[a-z\-]+$` |
| `variant` | string | L-Boxx size category | Enum: mini, small, medium, large, xl |
| `name` | string | Display name | Required, min 5 chars |
| `dimensions` | object | Box dimensions (L×W×H) | mm values |
| `capacity` | object | Storage capacity specification | Volume and weight limits |
| `material` | string | Construction material | Enum: polypropylene, abs, composite |
| `color` | string | Standard color | Enum: red, blue, grey, black |
| `stackable` | boolean | Whether stackable | true/false |
| `maxStack` | integer | Maximum stack height | Number of boxes |
| `inlays` | array | Compatible inlay types | Array of inlay IDs |
| `compatibility` | object | Compatibility matrix | Other L-Boxx variants, tools, accessories |

### Dimensions Object

```json
{
  "length": { "value": 442, "unit": "mm" },
  "width": { "value": 357, "unit": "mm" },
  "height": { "value": 191, "unit": "mm" }
}
```

### Example L-Boxx Variant

```json
{
  "id": "lboxx-small",
  "variant": "small",
  "name": "L-Boxx Small",
  "dimensions": {
    "length": { "value": 442, "unit": "mm" },
    "width": { "value": 357, "unit": "mm" },
    "height": { "value": 191, "unit": "mm" }
  },
  "capacity": {
    "volume": { "value": 30, "unit": "L" },
    "maxWeight": { "value": 25, "unit": "kg" }
  },
  "material": "polypropylene",
  "color": "red",
  "stackable": true,
  "maxStack": 4,
  "inlays": ["inlay-foam-small", "inlay-plastic-small"]
}
```

---

## 3. Inlays Schema (`inlays-schema.json`)

**Purpose:** Defines tool inlay configurations for organizing tools within L-Boxx containers.

### Key Properties

| Field | Type | Description | Validation |
|-------|------|-------------|-----------|
| `id` | string | Unique inlay identifier | Pattern: `^inlay-[a-z\-]+$` |
| `type` | string | Inlay material type | Enum: foam, plastic, wood |
| `name` | string | Display name | Required |
| `compatibleBoxes` | array | Compatible L-Boxx variants | Array of variant IDs |
| `toolCutouts` | array | Tool slot configuration | Array of cutout objects |
| `slotGrid` | object | Grid dimensions for slots | Rows, columns, slot size |
| `toolMapping` | object | Tool ID to slot position mapping | Object with tool IDs as keys |
| `maxTools` | integer | Maximum tool capacity | Number |
| `weight` | object | Inlay weight | kg or lbs |
| `material` | string | Material type | Enum: closed_cell_foam, open_cell_foam, plastic, wood |

### Tool Cutout Object

```json
{
  "position": "A1",
  "shape": "circle",
  "diameter": { "value": 80, "unit": "mm" },
  "depth": { "value": 30, "unit": "mm" },
  "compatibleTools": ["bosch-gst-90-be", "bosch-pst-10-8-li"]
}
```

### Example Inlay Configuration

```json
{
  "id": "inlay-foam-small-drill",
  "type": "foam",
  "name": "Foam Inlay Small - Drill Kit",
  "compatibleBoxes": ["lboxx-small", "lboxx-medium"],
  "toolCutouts": [
    {
      "position": "A1",
      "shape": "circle",
      "diameter": { "value": 80, "unit": "mm" },
      "compatibleTools": ["bosch-gsr-18v-ec"]
    }
  ],
  "slotGrid": {
    "rows": 3,
    "columns": 4,
    "slotSize": { "value": 100, "unit": "mm" }
  },
  "maxTools": 12,
  "material": "closed_cell_foam"
}
```

---

## 4. Collections Schema (`collection-schema.json`)

**Purpose:** Defines user-created tool collections with storage assignments and tracking.

### Key Properties

| Field | Type | Description | Validation |
|-------|------|-------------|-----------|
| `id` | string | Unique collection identifier | Pattern: `^[a-z0-9\-]+$` |
| `name` | string | Collection display name | Required, 3-50 chars |
| `owner` | object | Collection owner information | userId, email, name |
| `description` | string | Collection description | Optional, max 500 chars |
| `category` | string | Collection category | Enum: workshop_kit, mobile_kit, startup_kit, custom |
| `items` | array | Array of tools in collection | Tool ID references with locations |
| `lboxxAssignment` | array | Storage box assignments | L-Boxx IDs with inlay mappings |
| `sharing` | object | Sharing & permission control | Users, roles, public access |
| `tags` | array | Classification tags | User-defined keywords |
| `createdAt` | string (ISO 8601) | Creation timestamp | Automatically set |
| `updatedAt` | string (ISO 8601) | Last update timestamp | Automatically updated |
| `statistics` | object | Collection metadata | Tool count, total value, storage efficiency |

### Item Object

```json
{
  "toolId": "bosch-gsr-18v-ec",
  "quantity": 1,
  "lboxxId": "lboxx-small",
  "inlayPosition": "A1",
  "addedAt": "2024-01-15T10:30:00Z",
  "notes": "Primary drill driver for workshop"
}
```

### Example Collection

```json
{
  "id": "workshop-starter-kit",
  "name": "Workshop Starter Kit",
  "owner": {
    "userId": "user123",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "category": "workshop_kit",
  "items": [
    {
      "toolId": "bosch-gsr-18v-ec",
      "quantity": 1,
      "lboxxId": "lboxx-small",
      "inlayPosition": "A1"
    }
  ],
  "lboxxAssignment": [
    {
      "lboxxId": "lboxx-small",
      "inlayId": "inlay-foam-small-drill"
    }
  ],
  "sharing": {
    "isPublic": false,
    "allowedUsers": ["user456", "user789"]
  },
  "tags": ["starter", "essentials", "workshop"],
  "createdAt": "2024-01-10T08:00:00Z",
  "statistics": {
    "toolCount": 8,
    "totalValue": 1299.99,
    "storageEfficiency": 0.85
  }
}
```

---

## Search & Query Examples

### FuseLJS Integration

The search system uses FuseLJS for fuzzy matching on the `searchIndex` field in the tools schema.

#### Example 1: Search for Jigsaws

```javascript
// Query: "jigsaw bosch"
// Returns: All tools with these keywords in searchIndex
[
  { name: "Bosch GST 90 BE Jigsaw", score: 0.95 },
  { name: "Bosch PST 10.8 LI Jigsaw", score: 0.92 }
]
```

#### Example 2: Search for Cordless Drills

```javascript
// Query: "cordless drill 18v"
// Returns: Cordless drill-related tools
[
  { name: "Bosch GSR 18V-EC Drill-Driver", score: 0.97 },
  { name: "Bosch GDX 18V-EC Impact Driver", score: 0.89 }
]
```

#### Example 3: Find Tools for L-Boxx Small

```javascript
// Query: Tools that fit in lboxx-small with inlay-foam-small
// Logic: Filter by lboxxAssignment[].lboxxId = "lboxx-small"
// Then cross-reference with inlay compatibility
```

---

## Relationship Diagram

```
Tool (tools-schema.json)
  │
  ├─ Can be stored in: Collection (collection-schema.json)
  │
  └─ Can fit in: L-Boxx (lboxx-schema.json)
              │
              └─ Contains: Inlay (inlays-schema.json)
                        │
                        └─ Has cutout for: Tool
```

---

## Data Validation Rules

### Tools Schema
- Product codes must match `^[0-9A-Z]{8,12}$` pattern
- Prices must be positive numbers
- Timestamps must be ISO 8601 format
- Categories must match predefined enum values

### L-Boxx Schema
- Variant names must be unique
- Dimensions must have positive values
- Stack heights must be realistic (1-10)
- Material types must match enum values

### Inlays Schema
- Tool cutout positions must be unique per inlay
- Compatible boxes must reference valid L-Boxx IDs
- Tool mappings must reference existing tools

### Collections Schema
- Owner information must include userId
- Items array must reference valid tool IDs
- L-Boxx assignments must match collection items
- Timestamps must follow ISO 8601 format

---

## Implementation Notes

1. **IDs are immutable:** Once created, entity IDs should never change
2. **Timestamps:** All timestamps use ISO 8601 format with UTC timezone
3. **Units:** Always pair numeric values with unit enums (not strings)
4. **Pricing:** All prices should include tax flag for transparency
5. **Search Performance:** FuseLJS indexes are built on `searchIndex` arrays
6. **Compatibility:** Cross-schema references use kebab-case IDs

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-01-15 | Initial schema finalization with all 4 core schemas |

