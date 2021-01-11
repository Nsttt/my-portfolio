export default function ProjectList({ projects }) {
  return (
    <ol>
      {articles.length ? (
        articles.map((project) => (
          <li key={project.id}>
            <Link href={`project/${project.permalink}`}>
              <a>{project.title}</a>
            </Link>
            <p>{project.description}</p>
          </li>
        ))
      ) : (
        <div>There are no articles.</div>
      )}
    </ol>
  );
}
