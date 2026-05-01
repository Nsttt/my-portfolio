import { createEffect, createSignal, onMount } from "solid-js";

interface SearchProps {
  placeholder?: string;
  itemClass: string;
  containerId: string;
  toolName?: string;
  toolDescription?: string;
}

const toSnakeCase = (value: string) => value.replaceAll("-", "_");

export default function Search(props: SearchProps) {
  const [searchTerm, setSearchTerm] = createSignal("");
  let items: NodeListOf<Element>;
  let noResults: HTMLElement | null;
  let container: HTMLElement | null;

  onMount(() => {
    items = document.querySelectorAll(`.${props.itemClass}`);
    noResults = document.getElementById("no-results");
    container = document.getElementById(props.containerId);

    const query = new URLSearchParams(window.location.search).get("q");
    if (query) setSearchTerm(query);
  });

  createEffect(() => {
    const term = searchTerm();
    if (!items) return;

    const searchLower = term.toLowerCase();
    let visibleCount = 0;

    items.forEach((item) => {
      const title = item.getAttribute("data-title") || "";
      const description = item.getAttribute("data-description") || "";
      const place = item.getAttribute("data-place") || "";
      const lang = item.getAttribute("data-lang") || "";
      const category = item.getAttribute("data-category") || "";
      const tags = item.getAttribute("data-tags") || "";

      const matches =
        title.includes(searchLower) ||
        description.includes(searchLower) ||
        place.includes(searchLower) ||
        lang.includes(searchLower) ||
        category.includes(searchLower) ||
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

  const toolName = () =>
    props.toolName || `filter_${toSnakeCase(props.containerId)}`;
  const toolDescription = () =>
    props.toolDescription ||
    "Filter the visible content list by title, description, metadata, or tags.";

  return (
    <form
      class="mt-10 mb-8"
      role="search"
      method="get"
      tool-name={toolName()}
      tool-description={toolDescription()}
    >
      <input
        name="q"
        type="text"
        autocomplete="off"
        placeholder={props.placeholder || "Search..."}
        value={searchTerm()}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
        tool-param-description="Search query used to filter visible page content."
        class="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-500"
      />
    </form>
  );
}
