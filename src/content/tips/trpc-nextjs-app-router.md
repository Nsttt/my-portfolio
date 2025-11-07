---
title: "tRPC with Next.js App Router"
description: "Type-safe APIs in Next.js 13+ with tRPC and Server Components"
date: 2023-09-09
tags: ["trpc", "nextjs", "typescript", "react"]
---

## Setup tRPC for App Router

### Install Dependencies

```bash
npm install @trpc/server @trpc/client @trpc/react-query @trpc/next @tanstack/react-query
```

### Create tRPC Router

```typescript
// server/trpc.ts
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
```

### Define API Routes

```typescript
// server/routers/_app.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await db.posts.findMany();
  }),

  getPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await db.posts.findUnique({
        where: { id: input.id }
      });
    }),

  createPost: publicProcedure
    .input(z.object({
      title: z.string(),
      content: z.string()
    }))
    .mutation(async ({ input }) => {
      return await db.posts.create({
        data: input
      });
    }),
});

export type AppRouter = typeof appRouter;
```

## Route Handler (API Endpoint)

```typescript
// app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routers/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
```

## Client Setup

### Create tRPC Client

```typescript
// lib/trpc/client.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/routers/_app';

export const trpc = createTRPCReact<AppRouter>();
```

### Provider Component

```typescript
// components/TRPCProvider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from '@/lib/trpc/client';

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
```

### Wrap App

```typescript
// app/layout.tsx
import { TRPCProvider } from '@/components/TRPCProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
```

## Usage in Client Components

```typescript
'use client';

import { trpc } from '@/lib/trpc/client';

export function PostList() {
  const { data, isLoading } = trpc.getPosts.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Usage in Server Components

```typescript
// lib/trpc/server.ts
import { appRouter } from '@/server/routers/_app';

export const serverClient = appRouter.createCaller({});
```

```typescript
// app/posts/page.tsx
import { serverClient } from '@/lib/trpc/server';

export default async function PostsPage() {
  const posts = await serverClient.getPosts();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Mutations in Client Components

```typescript
'use client';

import { trpc } from '@/lib/trpc/client';
import { useRouter } from 'next/navigation';

export function CreatePostForm() {
  const router = useRouter();
  const utils = trpc.useUtils();

  const createPost = trpc.createPost.useMutation({
    onSuccess: () => {
      utils.getPosts.invalidate();
      router.refresh();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createPost.mutate({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Create</button>
    </form>
  );
}
```

## Type Safety

Everything is fully typed:

```typescript
// ✅ TypeScript knows the exact return type
const posts = await serverClient.getPosts();
//    ^? Post[]

// ✅ Input validation with Zod
const post = await serverClient.getPost({ id: '123' });
//    ^? Post | null

// ❌ TypeScript error: missing required field
createPost.mutate({ title: 'Hello' });
//                  ^^^^^^^^^^^^^^^^
// Error: Property 'content' is missing
```
