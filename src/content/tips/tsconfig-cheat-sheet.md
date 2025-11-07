---
title: "TSConfig Cheat Sheet"
description: "Essential TypeScript compiler options for different project types"
date: 2023-09-17
tags: ["typescript", "configuration", "reference"]
---

## Base Configuration

Start with these essential options:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

## Strictness Options

Enable all strict checks:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

Individual strict flags (enabled by `strict: true`):
- `noImplicitAny`: Require types for all variables
- `strictNullChecks`: Enforce null/undefined handling
- `strictFunctionTypes`: Stricter function type checking
- `strictBindCallApply`: Type-check bind/call/apply
- `strictPropertyInitialization`: Require property initialization

## Module Resolution

### For Bundlers (Vite, Webpack, esbuild)

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ESNext",
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

### For Node.js (CommonJS)

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "node"
  }
}
```

### For Node.js (ESM)

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "NodeNext"
  }
}
```

## Library Building

Publishing a package:

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist"
  }
}
```

## DOM Projects (Frontend)

```json
{
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx"
  }
}
```

## Monorepo Configuration

Base `tsconfig.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

Reference other packages:

```json
{
  "extends": "../../tsconfig.base.json",
  "references": [
    { "path": "../shared" }
  ]
}
```

## Path Aliases

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

## Recommended Complete Config

```json
{
  "compilerOptions": {
    // Language
    "target": "ES2022",
    "lib": ["ES2022"],

    // Modules
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,

    // Emit
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",

    // Interop
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,

    // Type Checking
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Skip checking node_modules
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```
