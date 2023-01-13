import { createEffect, createSignal } from "solid-js";

export default function ToggleButton() {
  const [theme, setTheme] = createSignal(
    localStorage.getItem("theme") ?? "dark",
  );

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  createEffect(() => {
    theme() === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme());
  });

  return (
    <button
      class="w-fit gap-3"
      aria-label="Toggle theme"
      onClick={() => handleClick()}
    >
      {theme() === "dark" ? (
        <label class="cursor-pointer text-light-blue-vivid-400 dark:text-slate-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current stroke-current stroke-2 transition-colors duration-300"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            ></path>
          </svg>
        </label>
      ) : (
        <label class="cursor-pointer text-slate-900 dark:text-light-blue-vivid-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current stroke-current transition-colors duration-300"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </label>
      )}
    </button>
  );
}
