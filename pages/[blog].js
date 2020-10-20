import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";


const Blog = ({ content, data }) => {
  const frontmatter = data;

  return (
      <Layout>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
        <ReactMarkdown escapeHtml={true} source={content} />
        <style jsx>{`
          h1{
            color: blue;
          }
          `}</style>
      </Layout>
  );
};

export default Blog;

Blog.getInitialProps = async (context) => {
  const { blog } = context.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../content/${blog}.md`);
  const data = matter(content.default);

  return { ...data };
};
