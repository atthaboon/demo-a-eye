# Test Plan: {{Scenario Title}}

- **Target URL**: `{{base_url}}`
- **Scenario**: {{One-line description of what is being validated}}
- **Dryrun date**: {{YYYY-MM-DD}}
- **Result**: {{PASS / FAIL / BLOCKED}} — {{one-line outcome summary}}

---

## Overview

{{2-4 sentence description of the end-to-end flow: what the user does, what data/entities are involved, and what the final success condition is.}}

Validated live during dryrun:

| Step          | Page / URL              | Observable result     |
| ------------- | ----------------------- | --------------------- |
| {{Step name}} | `{{path}}` → `{{path}}` | {{what was observed}} |
| {{Step name}} | `{{path}}`              | {{what was observed}} |
| {{Step name}} | `{{path}}`              | {{what was observed}} |
| {{Step name}} | {{path}} → `{{path}}`   | {{what was observed}} |

---

## Assumptions

1. {{Account/credentials or preconditions required}}
2. {{Starting URL / entry point notes, incl. any naming quirks}}
3. {{State assumptions — e.g. cart/session starts empty}}
4. {{Data validity assumptions — e.g. mock values accepted}}
5. {{Assumptions about content that may change — prices, labels, etc.}}
6. {{Any other environment assumptions}}

### Test data

| Field     | Value       |
| --------- | ----------- |
| {{Field}} | `{{value}}` |
| {{Field}} | `{{value}}` |
| {{Field}} | `{{value}}` |
| {{Field}} | `{{value}}` |

---

## Selector reference (Playwright)

### {{Page 1 name}} (`{{path}}`)

| Element     | Playwright selector |
| ----------- | ------------------- |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |

### {{Page 2 name}} (`{{path}}`)

| Element     | Playwright selector |
| ----------- | ------------------- |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |

### {{Page 3 name}} (`{{path}}`)

| Element     | Playwright selector |
| ----------- | ------------------- |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |

Alternate attribute selectors (if applicable):

- `{{selector}}`
- `{{selector}}`

### {{Page 4 name / result page}} (`{{path}}`)

| Element     | Playwright selector |
| ----------- | ------------------- |
| {{Element}} | `{{selector}}`      |
| {{Element}} | `{{selector}}`      |

---

## Test steps (with Playwright selectors)

### Step 1 — {{Step title}}

1. {{Action}}
2. {{Action}}
3. {{Action}}

**Expected**: {{Observable result / assertion}}

**Screenshot**: {{What the screenshot should capture}}

---

### Step 2 — {{Step title}}

1. {{Action}}
2. {{Action}}

**Expected**: {{Observable result / assertion}}

**Screenshot**: {{What the screenshot should capture}}

---

### Step 3 — {{Step title}}

1. {{Action}}

**Expected**: {{Observable result / assertion}}

**Screenshot**: {{What the screenshot should capture}}

---

### Step 4 — {{Step title}}

1. {{Action}}
2. {{Action}}

**Expected**: {{Observable result / assertion}}

**Screenshot**: {{What the screenshot should capture}}

---

### Step 5 — {{Step title}}

1. {{Action}}
2. {{Action}}

**Expected**: {{Observable result / assertion}}

**Screenshot**: {{What the screenshot should capture}}

---

### Step 6 — {{Final verification step}}

1. {{Assertion}}

**Expected**: {{Final success condition}}

**Screenshot**: {{What the screenshot should capture}}

---

## Suggested Playwright outline

```ts
await page.goto("{{base_url}}{{entry_path}}");
// {{fill / click steps for step 1}}

// {{fill / click steps for step 2}}

// {{navigation for step 3}}

// {{assertion for step 4}}

// {{fill / click steps for step 5}}

// {{final assertion for step 6}}
```
