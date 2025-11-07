---
title: "React Auto-Resizing Component with Framer Motion"
description: "Create smooth height animations for dynamic content"
date: 2023-10-09
tags: ["react", "animation", "framer-motion"]
---

## Installation

```bash
npm install framer-motion
```

## The Component

```typescript
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function ResizablePanel({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      // Avoid circular reference by checking if height changed
      const observedHeight = entries[0].contentRect.height;
      if (height !== observedHeight) {
        setHeight(observedHeight);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [height]);

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      animate={{ height }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <div ref={containerRef}>
        {children}
      </div>
    </motion.div>
  );
}
```

## Usage Examples

### Accordion

```typescript
function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      <ResizablePanel>
        {isOpen && (
          <div className="p-4">
            <p>This content animates smoothly</p>
            <p>when shown or hidden.</p>
          </div>
        )}
      </ResizablePanel>
    </div>
  );
}
```

### Filtered List

```typescript
function FilteredList() {
  const [filter, setFilter] = useState('');
  const items = ['Apple', 'Banana', 'Cherry'];

  const filtered = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter..."
      />
      <ResizablePanel>
        <ul>
          {filtered.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResizablePanel>
    </div>
  );
}
```

### Expanding Card

```typescript
function Card() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded">
      <h3>Card Title</h3>
      <ResizablePanel>
        <p>Always visible content</p>
        {expanded && (
          <div>
            <p>Additional details...</p>
            <p>More information...</p>
          </div>
        )}
      </ResizablePanel>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
```

## Customization

### Faster Animation

```typescript
transition={{
  type: 'spring',
  stiffness: 500,  // Higher = faster
  damping: 40,     // Higher = less bounce
}}
```

### Ease Transition

```typescript
transition={{
  type: 'tween',
  duration: 0.3,
  ease: 'easeInOut',
}}
```

### With AnimatePresence

For mounting/unmounting:

```typescript
import { AnimatePresence } from 'framer-motion';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <ResizablePanel>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Content here
          </motion.div>
        )}
      </AnimatePresence>
    </ResizablePanel>
  );
}
```

## Browser Support

ResizeObserver is supported in all modern browsers. For older browsers, use a [polyfill](https://www.npmjs.com/package/resize-observer-polyfill).
