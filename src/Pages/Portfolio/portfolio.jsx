import "./portfolio.css";

function Portfolio() {
  return (
    <>
      <div>
        <section className="section">
          <h2 className="title" style={{ marginLeft: "4.5rem", marginTop: "6rem" }}>
            My Portfolio
          </h2>
          <div className="section__container" style={{ backgroundColor: "rgb(190, 248, 195)", borderRadius: "10px" }}>
            <div className="content">
              <h2 className="title">
                <span>Ilm - </span> UI Mobile Design
              </h2>
              <p className="description">
                Projek lomba design interface e-learning pada aplikasi mobile yang diadakan di Universitas Islam Riau dalam rangka menyambut milad ke-16 Teknik Informatika <br />
                <br />
                Partner with : <strong>Muhammad Faruq, M. Nabil Dawami</strong>
                <div className="social-media">
                  <a href="https://www.figma.com/file/6tnktii2OWSbpUujky1LPT/E-Learning?type=design&node-id=0%3A1&mode=design&t=crDBv5ZP19zWUdub-1" target="_blank">
                    <i className="bx bxl-figma"></i>
                  </a>
                </div>
              </p>
            </div>
            <div className="image">
              <img src="/portfolio1.png" alt="profile" style={{ borderRadius: "5px", border: "2px solid #1f2937", width: "500px", height: "auto" }} />
            </div>
          </div>
          <div className="section__container" style={{ backgroundColor: "#b0d9ff", borderRadius: "10px" }}>
            <div className="image">
              <img src="/portfolio2.png" alt="profile" style={{ borderRadius: "5px", border: "2px solid #1f2937", width: "500px", height: "auto" }} />
            </div>
            <div className="content">
              <h2 className="title">
                <span>College TIF - </span> Frontend Web
              </h2>
              <p className="description">
                Projek lomba Frontend Web di Universitas Gunadarma <br />
                <br /> Partner with : <strong>Muhammad Faruq, Hafidz Alhadid Rahman</strong>
                <div className="social-media">
                  <a href="#" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="section__container" style={{ backgroundColor: "#686868", borderRadius: "10px" }}>
            <div className="image">
              <img src="/portfolio3.jpg" alt="profile" style={{ borderRadius: "5px", border: "2px solid #1f2937", width: "500px", height: "auto" }} />
            </div>
            <div className="image">
              <img src="/portfolio4.jpg" alt="profile" style={{ borderRadius: "5px", border: "2px solid #1f2937", width: "500px", height: "auto" }} />
            </div>
            <div className="content">
              <h2 className="title" style={{ marginTop: "-10rem", marginLeft: "1.5rem", color: "#e6e6e6" }}>
                <span>Oracle Academy - </span> Database
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
