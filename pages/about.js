import Layout from "../components/Layout";

const About = () => (
  <Layout title="About Me">
    <h1>About Me</h1>
    <div className="about-text">
      <img src="/picture.jpg" />
      <p>
        Hello! My Name is Néstor, I'm a software engineering student from Spain
        and I
      </p>
      <p>
        Praesent gravida a diam ut faucibus. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Sed sed nibh
        a ipsum sagittis finibus ac in magna. Curabitur id mauris quis nulla
        commodo tristique.
      </p>
      Í
      <p>
        Nunc eu mi et justo sodales vehicula. Vestibulum velit erat, tincidunt
        sed tortor id, viverra egestas felis. Cras in ullamcorper ex. Etiam diam
        lacus, interdum sed rhoncus vel, ultricies ut nisi. Nam ut orci at ante
        auctor mollis. Phasellus eget augue ac nibh vestibulum pellentesque.
        Nulla enim augue, placerat id malesuada at, maximus sed tortor.
      </p>
    </div>
    <ul className="info">
      <li>
        <span className="email">Send me a Mail !</span>
      </li>
      <li>
        <a href="mailto:nestor@nstlopez.com">nestor@nstlopez.com</a>
      </li>
    </ul>
    <style jsx>{`
      .info {
        margin: 0 0 50px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .email {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 30px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;
