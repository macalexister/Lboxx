# Schema Versioning & Evolution Policy

**Version: 1.0.0** (Locked - August 6, 2026)

## Overview

This document outlines the schema versioning strategy for Bosch Pro Tool Finder, ensuring stable API contracts while providing a clear path for future evolution.

### Version 1.0.0 - Production Release

**Lock Date:** August 6, 2026  
**Status:** PRODUCTION - LOCKED FOR BREAKING CHANGES  
**Commitment:** Minimum 12-month stability guarantee

#### Locked Schemas (v1.0.0)
- `tools-schema.json` - v1.0.0 (Tool catalog with 50+ field definitions)
- `lboxx-schema.json` - v1.0.0 (Container storage with compatibility matrix)
- `inlays-schema.json` - v1.0.0 (Inlay configurations and tool cutouts)
- `collection-schema.json` - v1.0.0 (User collections with storage assignments)

#### What "Locked" Means
1. **No Breaking Changes:** Required fields, enum values, and data types are guaranteed stable
2. **Additive Only:** New optional fields MAY be added without version bump
3. **Backward Compatibility:** v1.0 parsers will continue working with all v1.x data
4. **Data Migration:** All v1.0 data is forward-compatible with v1.1+

---

## Stability Guarantees (v1.0.x)

### Guaranteed Stable (No Breaking Changes)
- All required fields: `id`, `name`, `category`, `type`, `productCode`, `description`, `weight`, `dimensions`
- All enum values in category, type, size, fit fields
- Object structure for `specifications`, `dimensions`, `weight`, `warranty`
- Array structure for `tools`, `lboxxVariants`, `inlays`

### Safe to Extend (Minor Versions Only)
- Adding new optional properties to objects
- Extending enum choices with new values
- Adding new items to array fields
- Extending object properties with new optional fields

### NOT PERMITTED (Would Require Major Version)
- Removing required fields
- Changing data types (e.g., string → number)
- Renaming existing fields
- Removing enum values currently in use
- Changing validation rules (e.g., minLength, pattern)

---

## v1.1+ Migration Path

### Planned for v1.1 (Q4 2026)
**Goals:** Enhanced specification depth, extended compatibility matrices

**Potential Additions:**
```json
{
  "tools": {
    "properties": {
      "specifications": {
        "properties": {
          "noiseLevel": "Enhanced dB measurements",
          "vibrationProfile": "Detailed frequency analysis",
          "ergonomicRating": "RULA/REBA compliance scores",
          "thermalManagement": "Heat dissipation specs"
        }
      }
    }
  }
}
```

**Migration Strategy:**
- All v1.0 data remains valid in v1.1
- New optional fields have defaults
- Data consumers can safely ignore unknown fields
- No data transformation required for v1.0 → v1.1

### Future Considerations (v2.0+)

**Potential Major Changes (NOT before 2027):**
- Multi-language support for names/descriptions
- Hierarchical category system
- Tool usage analytics integration
- Third-party integration connectors

**Communication Plan:**
- 6-month deprecation notice before major version
- Migration guide provided with examples
- Automated migration tools if needed
- Community feedback period minimum 90 days

---

## Version Management Strategy

### Semantic Versioning Format
```
MAJOR.MINOR.PATCH
  ↓      ↓      ↓
  │      │      └─ Bug fixes, data corrections (automatic migration)
  │      └────────── Additive changes, new optional fields (backward compatible)
  └──────────────── Breaking changes (requires data transformation)
```

### Release Timeline
| Version | Status | Release Date | EOL Date | Migration Required |
|---------|--------|-------------|----------|-------------------|
| v1.0.x  | STABLE | 2026-08-06  | 2027-08-06 | No |
| v1.1.x  | PLANNED | 2026-10-01  | 2027-10-01 | No (backward compatible) |
| v2.0.x  | FUTURE | 2027-09-01  | TBD | Yes (migration guide provided) |

---

## Data Validation & Compliance

### v1.0 Validation Rules
1. All required fields MUST be present
2. All data MUST conform to type and format constraints
3. Enum values MUST match predefined lists
4. Compatibility matrices MUST reference valid tool/container IDs
5. Version field MUST be "1.0.0" (case-sensitive)

### JSON Schema Enforcement
```bash
# Validate tools data against schema
ajv validate -s schemas/tools-schema.json -d data/sample-tools.json

# Validate all schemas
for schema in schemas/*.json; do
  jq empty "$schema" || echo "INVALID: $schema"
done
```

---

## Schema Evolution Examples

### Example 1: Safe Addition (No Migration)
**v1.0 → v1.1:** Adding optional field to tools
```json
{
  "properties": {
    "tools": {
      "items": {
        "properties": {
          "sustainabilityScore": {
            "type": "number",
            "minimum": 0,
            "maximum": 100,
            "description": "NEW in v1.1: Carbon footprint rating"
          }
        }
      }
    }
  }
}
```
✓ v1.0 data is valid v1.1 data
✓ No transformation needed
✓ Consumers can ignore if not supported

### Example 2: Breaking Change (Requires Major Version)
```json
{
  "properties": {
    "tools": {
      "items": {
        "required": ["id", "name", "category", "sku"]
      }
    }
  }
}
```
✗ Changing required fields → v2.0.0 only
✗ Requires migration guide
✗ 6-month deprecation period mandatory

---

## Compatibility Matrix Evolution

### v1.0 (Current)
- Tool ID → Compatible Container IDs
- Tool ID → Compatible Inlay IDs
- Container ID → Compatible Inlay IDs

### v1.1+ (Planned Extensions)
- Tool ID → Recommended Container Size
- Tool ID → Compatible Accessory IDs
- Container ID → Nesting Constraints
- Inlay ID → Weight Distribution Map

**Data Structure:** All additions will be optional fields—existing v1.0 matrices remain unchanged

---

## Consumer Implementation Guidelines

### Safe Practices
1. **Ignore Unknown Fields:** Use schema-based parsing; skip unfamiliar properties
2. **Provide Defaults:** Treat missing optional fields as `null` or empty
3. **Version Check:** Compare `version` field against your supported range
4. **Error Handling:** Gracefully handle missing optional fields

### Example: Robust Consumer (JavaScript)
```javascript
function parseToolsData(data) {
  if (!data.version.startsWith("1.")) {
    throw new Error(`Unsupported schema version: ${data.version}`);
  }

  return data.tools.map(tool => ({
    id: tool.id,
    name: tool.name,
    category: tool.category,
    // Optional fields with defaults
    sustainabilityScore: tool.sustainabilityScore ?? null,
    certifications: tool.certifications ?? [],
  }));
}
```

---

## Breaking Change Policy

### When Breaking Changes Are Justified
1. **Security:** Fixing data validation vulnerabilities
2. **Compliance:** Meeting new regulatory requirements
3. **Structural:** Fixing fundamental design flaws affecting multiple fields
4. **Performance:** Schema changes required for <2s load time

### Breaking Change Process
1. **Issue Discussion:** GitHub issue with rationale and proposed changes
2. **RFC Period:** Minimum 30 days for community feedback
3. **Deprecation Notice:** 6-month notice period with migration guide
4. **Testing:** Comprehensive migration test suite provided
5. **Release:** Major version (v2.0.0+) with detailed release notes

---

## Current Compliance Status

### Schema Validation Results (2026-08-06)
- ✅ tools-schema.json: Valid JSON Schema Draft-07
- ✅ lboxx-schema.json: Valid JSON Schema Draft-07
- ✅ inlays-schema.json: Valid JSON Schema Draft-07
- ✅ collection-schema.json: Valid JSON Schema Draft-07

### Sample Data Validation (2026-08-06)
- ✅ sample-tools.json (12 tools): All required fields present, 100% compliance
- ✅ sample-inlays.json (5 inlays): All compatibility matrices valid
- ✅ sample-lboxx.json (4 variants): All nesting rules defined
- ✅ sample-collection.json: All storage assignments valid

### Backward Compatibility
- ✅ v1.0.0 parser compatible with all current data
- ✅ v1.x consumers can safely parse v1.0 data
- ✅ No data transformation required

---

## Version Checking in Applications

### Recommended Approach
```javascript
// schemas/version-check.js
const SUPPORTED_VERSIONS = {
  tools: "1.x",
  lboxx: "1.x",
  inlays: "1.x",
  collections: "1.x"
};

function checkSchemaCompatibility(data, schemaType) {
  const supported = SUPPORTED_VERSIONS[schemaType];
  const [major] = data.version.split(".");
  
  if (!supported.includes(major)) {
    throw new Error(
      `Incompatible schema version. ` +
      `Expected ${supported}, got ${data.version}`
    );
  }
}
```

---

## FAQ

**Q: Can I add a required field to my schema?**  
A: Not without a major version bump. Required fields break backward compatibility.

**Q: When will v2.0 be released?**  
A: Not before September 2027. v1.0 has a 12-month stability guarantee.

**Q: Can I rely on v1.0 for production?**  
A: Yes. v1.0 is locked and guaranteed stable through August 2027.

**Q: What if I find a bug in v1.0?**  
A: Report via GitHub. Bugs are fixed in v1.0.x patches (no migration needed).

**Q: How long is the deprecation period?**  
A: Minimum 6 months for breaking changes. Community feedback period: 90+ days.

---

## References

- [JSON Schema Draft-07 Specification](https://json-schema.org/draft-07/schema)
- [Semantic Versioning 2.0.0](https://semver.org/)
- [API Versioning Best Practices](https://cloud.google.com/apis/design/versioning)
- [Bosch Pro Tool Finder Architecture](./ARCHITECTURE.md)
- [Development Guide](./DEVELOPMENT.md)

---

**Last Updated:** August 6, 2026  
**Next Review:** August 6, 2027  
**Maintained By:** Bosch Pro Tool Finder Team
