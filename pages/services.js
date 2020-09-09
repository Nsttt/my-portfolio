import Layout from "../components/Layout";

const Services = () => (
  <Layout title="Our Services">
    <h1>Our Services</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="/static/services/weddings.jpg" />
          <h2>Weddings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet rhoncus mi ac porta.
          </p>
        </div>
        <div className="item">
          <img src="/static/services/portraits.jpg" />
          <h2>Portraits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet rhoncus mi ac porta.
          </p>
        </div>
        <div className="item">
          <img src="/static/services/real-estate.jpg" />
          <h2>Real Estate</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet rhoncus mi ac porta.
          </p>
        </div>
        <div className="item">
          <img src="/static/services/travel.jpg" />
          <h2>Travel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet rhoncus mi ac porta.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
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
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout >
);

export default Services;
