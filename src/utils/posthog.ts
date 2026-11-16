/**
 * Public by design: the token ships in the page HTML and can only send
 * events, so it lives in the repo rather than in build-time configuration.
 */
export const POSTHOG_PROJECT_TOKEN =
  "phc_CfjqeZdkveo9XEzKzxei2JH3EgnL9GVVy5QHrwoMWCjT";

/** PostHog Cloud region the project lives in. */
export const POSTHOG_REGION = "eu";

/**
 * Same-origin path the Worker forwards to PostHog Cloud. Going through it
 * keeps the CSP at 'self' and survives blockers that match PostHog hostnames.
 */
export const POSTHOG_PROXY_PATH = "/relay";

/** Inline `onclick` handler that captures a PostHog event. */
export const trackClick = (
  event: string,
  properties?: Record<string, unknown>,
) =>
  `window.posthog?.capture(${JSON.stringify(event)}, ${JSON.stringify(properties ?? {})})`;
