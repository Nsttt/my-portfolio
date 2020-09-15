import Layout from "../components/Layout";

const Blog = () => (
  <Layout title="Blog">
    <h1>Blog</h1>
    <h1>Under construction...</h1>
    <style jsx>{`
      .blog {
        max-width: 1000px;
        margin: 0 auto;
      }
      .blog-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .blog .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .blog .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout >
);

export default Blog;
