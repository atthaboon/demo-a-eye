---
name: playwright-e2e-scripting
description: Use this skill when writing or generating Playwright tests in TypeScript. Triggers include any mention of 'Playwright', 'e2e test', 'end-to-end test' or requests to write/scaffold/fix Playwright specs, page objects, or fixtures. Also use when structuring test files, adding locators, setting up test configuration, or refactoring existing Playwright code. Do NOT use for unit tests (Jest/Vitest), API-only tests without browser interaction, or non-TypeScript Playwright setups.
---

# Playwright Test Automation (TypeScript)

## When to Use

Use this skill when the user needs **Playwright test code written or maintained in TypeScript**. Typical triggers:

- Write a Playwright test
- Scaffold/generate e2e tests for [page]
- Create a Page Object for [page]
- Turning a manual test plan, dryrun, or scenario steps into an automated `.spec.ts` file
- Fixing, refactoring, or extending existing Playwright specs, page objects, or fixtures
- Setting up or adjusting `playwright.config.ts`, project structure, or fixture injection

## Core Principles

| Principle  | Rule                                                                 |
| ---------- | -------------------------------------------------------------------- |
| Structure  | Page Object Model (POM) — all page interactions live in page classes |
| Injection  | Use fixtures to inject `Page`, config, and page objects into tests   |
| Locators   | Prefer `getByRole` → `getByLabel` → others (see priority table)      |
| Language   | TypeScript only — strict types, no `any`                             |
| Assertions | Always use `expect` from `@playwright/test`                          |

---

## Locator Priority

Always choose locators in this order. Use the next option only when the previous is not applicable.

| Priority | Method             | When to Use                                                        |
| -------- | ------------------ | ------------------------------------------------------------------ |
| 1        | `getByRole`        | Interactive elements: buttons, links, inputs, checkboxes, headings |
| 2        | `getByLabel`       | Form fields associated with a `<label>`                            |
| 3        | `getByPlaceholder` | Inputs with placeholder text and no label                          |
| 4        | `getByText`        | Non-interactive text elements, static content                      |
| 5        | `getByTestId`      | Elements with `data-testid` when no semantic option exists         |
| 6        | CSS / XPath        | **Avoid** — fragile, not user-facing                               |

---

## Project Structure

```
project/
├── tests/
│   ├── auth/                  # main test suite
│   │   └── login.spec.ts      # sub test suite
│   └── checkout/
│       └── checkout.spec.ts
├── pages/                     # Page Object classes
│   ├── LoginPage.ts
│   └── CheckoutPage.ts
├── fixtures/
│   └── index.ts               # Custom fixture definitions
├── playwright.config.ts
└── tsconfig.json
```

---
