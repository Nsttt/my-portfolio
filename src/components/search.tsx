import { createSignal, createEffect, onMount } from "solid-js";

interface SearchProps {
  placeholder?: string;
  itemClass: string;
  containerId: string;
}

export default function Search(props: SearchProps) {
  const [searchTerm, setSearchTerm] = createSignal("");
  let items: NodeListOf<Element>;
  let noResults: HTMLElement | null;
  let container: HTMLElement | null;

  onMount(() => {
    items = document.querySelectorAll(`.${props.itemClass}`);
    noResults = document.getElementById("no-results");
    container = document.getElementById(props.containerId);
  });

  createEffect(() => {
    const term = searchTerm();
    if (!items) return;

    const searchLower = term.toLowerCase();
    let visibleCount = 0;

    items.forEach((item) => {
      const title = item.getAttribute("data-title") || "";
      const description = item.getAttribute("data-description") || "";
      const tags = item.getAttribute("data-tags") || "";

      const matches =
        title.includes(searchLower) ||
        description.includes(searchLower) ||
        tags.includes(searchLower);

      if (matches) {
        (item as HTMLElement).style.display = "block";
        visibleCount++;
      } else {
        (item as HTMLElement).style.display = "none";
      }
    });

    if (noResults && container) {
      if (visibleCount === 0) {
        noResults.classList.remove("hidden");
        container.classList.add("hidden");
      } else {
        noResults.classList.add("hidden");
        container.classList.remove("hidden");
      }
    }
  });

  return (
    <div class="mt-10 mb-8">
      <input
        type="text"
        placeholder={props.placeholder || "Search..."}
        value={searchTerm()}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
        class="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-500"
      />
    </div>
  );
}
