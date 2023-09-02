export default function Comments() {
  const theme = localStorage.getItem("theme") ?? "dark";

  return (
    <script
      src="https://giscus.app/client.js"
      data-repo="Nsttt/my-portfolio"
      data-repo-id="MDEwOlJlcG9zaXRvcnkyOTM4NTk0Mjk="
      data-category="Comments"
      data-category-id="DIC_kwDOEYPwZc4CVJ8A"
      data-mapping="pathname"
      data-strict="1"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme={theme === "dark" ? "dark_protanopia" : "light_protanopia"}
      data-lang="en"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    ></script>
  );
}
