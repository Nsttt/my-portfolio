import Layout from "../components/Layout";

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <div className="portfolio">
      <div className="portfolio-list">
        <div className="item">
          <a href="https://github.com/nsttt/githunter" target="_blank">
            <img src="/portfolio/4.jpg" />
            <h2>Githunter: Starred Project Hunter</h2>
          </a>
          <p>
            I like Githubs explore tab, but I find it really inconsistent
            sometimes, so I built this app which essentially picks the most
            starred projects on Github on the timeframe and displays them. It's
            made with React and ChakraUI.
          </p>
        </div>
        <div className="item">
          <a href="https://nst.sh" target="_blank">
            <img src="/portfolio/5.jpg" />
            <h2>nst.sh: URL Shortener</h2>
          </a>
          <p>
            I always wanted to have my won URL Shortener, it makes things easier
            when I'm working on other people computers or even with my phone. It
            something I really recomend everyone to try out. It's built with
            Node and Vue.
          </p>
        </div>
        <div className="item">
          <a href="https://bdosa.nstlopez.com" target="_blank">
            <img src="/portfolio/6.jpg" />
            <h2>BDO Score Analyzer</h2>
          </a>
          <p>
            I play Black Desert Online, an MMO, and many people have an issue
            when it comes to keeping track of their KDA, this app does the job.
            Transform any image you pass to a printable pdf. Made with Node and
            Tesseract.js.
          </p>
        </div>
        <div className="item">
          <a href="https://imgur.com/gallery/RBzNijH" target="_blank">
            <img src="/portfolio/2.jpg" />
            <h2>GameBoy Zero</h2>
          </a>
          <p>
            One of the very few projects I made with a RaspberryPI and
            microcontrollers. It's a raspberry pi zero with custom made PCBs
            that adds controller support, more buttons and a cartridge-like
            storage system for the memory flashcards. More info detailed in the
            imgur post.
          </p>
        </div>
        <div className="item">
          <img src="/portfolio/1.jpg" />
          <h2>Info display.</h2>
          <p>
            I'm a very organized person, and I like to use my calendar for
            pretty much everything. So I made this small information display out
            of a RaspberryPi 3 and hanged it out in the room where I usually
            sleep. It displays the tasks I have planned for the day, weather,
            last emails... etc.
          </p>
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
        width: 400px;
        height: 400px;
        object-fit: cover;
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
