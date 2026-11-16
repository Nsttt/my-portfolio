/**
 * Same-origin path the Worker forwards to PostHog Cloud. Going through it
 * keeps the CSP at 'self' and survives blockers that match PostHog hostnames.
 * The region follows the prefix, e.g. `/relay/eu/static/array.js`.
 */
export const POSTHOG_PROXY_PATH = "/relay";

export type PosthogRegion = "eu" | "us";

const CLOUD_HOST = /^https:\/\/(eu|us)\.i\.posthog\.com\/?$/;

/** Region of a PostHog Cloud ingestion host, e.g. `https://eu.i.posthog.com`. */
export const posthogRegion = (
  host: string | undefined,
): PosthogRegion | undefined => {
  const region = host?.match(CLOUD_HOST)?.[1];
  return region === "eu" || region === "us" ? region : undefined;
};

/** Inline `onclick` handler that captures a PostHog event. */
export const trackClick = (
  event: string,
  properties?: Record<string, unknown>,
) =>
  `window.posthog?.capture(${JSON.stringify(event)}, ${JSON.stringify(properties ?? {})})`;
