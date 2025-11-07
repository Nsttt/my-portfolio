---
title: "Next.js App Router Caching Guide"
description: "Master caching and revalidation in Next.js 13+ App Router"
date: 2023-08-23
tags: ["nextjs", "react", "caching", "performance"]
---

## Caching Layers

Next.js 13+ has four caching mechanisms:

1. **Request Memoization**: Deduplicates identical requests during render
2. **Data Cache**: Persists fetch results across requests and deploys
3. **Full Route Cache**: Renders and caches entire routes at build time
4. **Router Cache**: Client-side cache for visited routes

## Revalidation Methods

### Time-based Revalidation

Revalidate after specific time period:

```typescript
// Revalidate every 60 seconds
export const revalidate = 60;

// In fetch
fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
});
```

### On-Demand Revalidation

#### revalidatePath()

Revalidate specific paths:

```typescript
'use server';

import { revalidatePath } from 'next/cache';

export async function updatePost() {
  await db.posts.update(/* ... */);

  // Revalidate specific page
  revalidatePath('/posts/123');

  // Revalidate all posts
  revalidatePath('/posts');

  // Revalidate with layout
  revalidatePath('/posts', 'layout');
}
```

#### revalidateTag()

Revalidate by cache tags:

```typescript
// Tag your fetches
fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] }
});

fetch('https://api.example.com/posts/123', {
  next: { tags: ['posts', 'post-123'] }
});

// Revalidate all posts
'use server';
import { revalidateTag } from 'next/cache';

export async function revalidatePosts() {
  revalidateTag('posts');
}
```

### Client-side Revalidation

#### router.refresh()

Force refetch on client:

```typescript
'use client';

import { useRouter } from 'next/navigation';

export function RefreshButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.refresh()}>
      Refresh
    </button>
  );
}
```

## Cache Control Options

### Force Dynamic (No Caching)

```typescript
export const dynamic = 'force-dynamic';
export const revalidate = 0;
```

### Static Generation

```typescript
export const dynamic = 'force-static';
```

### Opt Out of Fetch Cache

```typescript
fetch('https://api.example.com/data', {
  cache: 'no-store'  // Never cache
});

fetch('https://api.example.com/data', {
  cache: 'force-cache'  // Always cache
});
```

## Real-World Patterns

### Blog Post with ISR

```typescript
// app/posts/[slug]/page.tsx
export const revalidate = 3600; // 1 hour

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  return <Post data={post} />;
}
```

### E-commerce Product with On-Demand Updates

```typescript
// app/products/[id]/page.tsx
async function getProduct(id: string) {
  return fetch(`https://api.example.com/products/${id}`, {
    next: { tags: ['products', `product-${id}`] }
  });
}

// app/actions.ts
'use server';
export async function updateProduct(id: string) {
  await db.products.update(/* ... */);
  revalidateTag(`product-${id}`);
}
```

### User Dashboard (No Cache)

```typescript
// app/dashboard/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Dashboard() {
  const user = await getCurrentUser();
  return <DashboardUI user={user} />;
}
```

## Partial Rendering

Only re-renders changed segments:

```
Layout (cached)
├── Page (revalidated)
    ├── Component A (cached)
    └── Component B (revalidated)
```

## Debug Caching

Check cache behavior:

```typescript
// next.config.js
module.exports = {
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};
```

## Common Pitfalls

**Problem**: Changes not showing up
**Solution**: Check if route is statically rendered. Use `revalidatePath()` or set `revalidate`.

**Problem**: Too many revalidations
**Solution**: Use `revalidateTag()` for fine-grained control instead of `revalidatePath()`.

**Problem**: Client data stale after mutation
**Solution**: Call `router.refresh()` after mutations.
