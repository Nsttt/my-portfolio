import Layout from '../components/Layout';

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <div className="portfolio">
      <div className="portfolio-list">
        <div className="item">
          <img src="/portfolio/4.jpg" />
          <h2>Weddings</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/portfolio/5.jpg" />
          <h2>Portraits</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/portfolio/6.jpg" />
          <h2>Real Estate</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/portfolio/2.jpg" />
          <h2>Travel</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
        <div className="item">
          <img src="/portfolio/1.jpg" />
          <h2>Travel</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet rhoncus mi ac porta.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .portfolio {
        max-width: 1000px;
        margin: 0 auto;
      }
      .portfolio-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .portfolio .item {
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
        .portfolio .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Portfolio;

