/**
 * Public by design: the token ships in the page HTML and can only send
 * events, so it lives in the repo rather than in build-time configuration.
 */
export const POSTHOG_PROJECT_TOKEN =
  "phc_CfjqeZdkveo9XEzKzxei2JH3EgnL9GVVy5QHrwoMWCjT";

/**
 * PostHog's managed reverse proxy for this project. Serving the SDK and
 * taking events on our own domain survives blockers that match PostHog
 * hostnames. The CSP in `public/_headers` has to allow this origin.
 */
export const POSTHOG_API_HOST = "https://b.nstlopez.com";

/** The PostHog app itself; the project lives on EU Cloud. */
export const POSTHOG_UI_HOST = "https://eu.posthog.com";

/** Inline `onclick` handler that captures a PostHog event. */
export const trackClick = (
  event: string,
  properties?: Record<string, unknown>,
) =>
  `window.posthog?.capture(${JSON.stringify(event)}, ${JSON.stringify(properties ?? {})})`;
