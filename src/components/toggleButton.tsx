import { createEffect, createSignal } from "solid-js";

type Theme = "light" | "dark";

export default function ToggleButton() {
  const [theme, setTheme] = createSignal<Theme>(
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  createEffect(() => {
    document.documentElement.classList.toggle("dark", theme() === "dark");
    localStorage.setItem("theme", theme());
  });

  return (
    <div class="theme-toggle">
      <fieldset aria-label="Colour theme">
        <label title="Light mode">
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme() === "light"}
            onChange={() => setTheme("light")}
          />
          <span class="sr-only">Light mode</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" />
            <path
              d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </label>
        <label title="Dark mode">
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme() === "dark"}
            onChange={() => setTheme("dark")}
          />
          <span class="sr-only">Dark mode</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </label>
      </fieldset>
    </div>
  );
}
