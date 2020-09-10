import fs from "fs";
import matter from "gray-matter";

import Layout from "../components/Layout";

const Blog = (posts) => {
<Layout title="`Blog`">
    {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header>
            <h3 className="">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="">{date}</span>
          </header>
          <section>
            <p className="">{description}</p>
          </section>
        </article>
      ))}
</Layout>;
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/public/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`public/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
