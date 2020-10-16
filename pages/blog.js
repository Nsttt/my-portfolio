import Layout from "../components/Layout";
import matter from 'gray-matter';
import Link from 'next/link'

export async function getStaticProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });
  return {
    props: {
      data: data,
    },
  };
}

const Blog = ({ data, title, description }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);
return (
  <>
  <Layout title="Blog">
    <h1>Blog</h1>
    <div>
      <ul>
        {ListItems.map((blog, i) => (
          <li key={i}>
            <Link href={`/${blog.slug}`}>
              <a>{blog.title}</a>
            </Link>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{``}</style>
  </Layout>;
  </>
  )
};

export default Blog;
