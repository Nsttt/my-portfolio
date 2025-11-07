---
title: "Find Bugs with OXLint"
description: "Ultra-fast JavaScript/TypeScript linter that catches real bugs"
date: 2024-09-29
tags: ["typescript", "javascript", "tools", "linting"]
---

## Installation

No installation needed! Use with `npx`:

```bash
npx oxlint@latest
```

## Basic Usage

Lint your entire project:

```bash
npx oxlint@latest
```

## Find Specific Issues

Use `-D` to enable specific rule categories:

```bash
# Check for constant binary expressions (common bug)
npx oxlint@latest -D no-constant-binary-expression

# Check for unused variables
npx oxlint@latest -D no-unused-vars

# Check for type errors
npx oxlint@latest -D typescript
```

## Common Bug Categories

### Logic Errors

```bash
npx oxlint@latest -D correctness
```

Catches:
- `x === x` (comparing variable to itself)
- Unreachable code
- Invalid regular expressions
- Incorrect use of constructors

### Type Safety

```bash
npx oxlint@latest -D typescript
```

Catches:
- Missing return types
- Unsafe type assertions
- Improper use of `any`

### Suspicious Patterns

```bash
npx oxlint@latest -D suspicious
```

Catches:
- Debugger statements
- Console.log in production
- Suspicious typeof checks
- Constant conditions

## CI Integration

Add to your CI pipeline:

```yaml
# .github/workflows/ci.yml
- name: Lint with OXLint
  run: npx oxlint@latest
```

## Example Bugs It Catches

### Constant Binary Expression

```typescript
// Bug: condition always true
if (user || user.isAdmin) {
  // If user is falsy, second part never evaluated
}

// Should be:
if (user && user.isAdmin) {
}
```

### Unreachable Code

```typescript
function example() {
  return true;
  console.log('This never runs'); // OXLint catches this
}
```

### Suspicious Typeof

```typescript
// Bug: typeof never returns 'array'
if (typeof arr === 'array') {
  // This never runs
}

// Should be:
if (Array.isArray(arr)) {
}
```

## Combine with ESLint

OXLint complements ESLint:
- **OXLint**: Find bugs (fast, run often)
- **ESLint**: Style and formatting (slower, run on commit)

```bash
# Quick check during development
npx oxlint@latest

# Full check before commit
npm run lint  # ESLint + Prettier
```

## Configuration (Optional)

Create `.oxlintrc.json`:

```json
{
  "rules": {
    "correctness": "error",
    "suspicious": "warn",
    "typescript": "error"
  }
}
```
