// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  umami?: {
    track: (event: string, data?: Record<string, unknown>) => void;
  };
}
