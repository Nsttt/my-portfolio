import Layout from "../components/Layout";
import { Post } from "../components/Post";
import { posts } from "../getPosts";

const Blog = () => (
  <Layout title="Blog">
    <h1>Blog</h1>
    {posts.map((post) => (
      <Post key={post.link} post={post} />
    ))}
    <style jsx>{``}</style>
  </Layout>
);

export default Blog;
