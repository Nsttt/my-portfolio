const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image) => {
      return (
        <div className="image" key={image}>
          <img src={image} />
        </div>
      );
    })}

    <style jsx>{`
      .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 50px;
        max-width: 1240px;
        margin: 0 auto;
      }
      .gallery .image {
        padding: 20px;
        width: 50%;
      }
      @media (max-width: 600px) {
        .gallery .image {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </div>
);

export default Gallery;
