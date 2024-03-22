import "./gallery.css";

function Gallery() {
  return (
    <>
      <div>
        <div className="container">
          <h2 className="title">My Gallery</h2>
          <div className="photo-gallery">
            <div className="column">
              <div className="photo">
                <img src="/galeri1.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri2.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri3.jpeg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="photo">
                <img src="src/assets/galeri4.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri5.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri8.jpeg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="photo">
                <img src="src/assets/galeri7.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri6.jpeg" alt="" />
              </div>
              <div className="photo">
                <img src="src/assets/galeri9.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
