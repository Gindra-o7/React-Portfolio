import "./home.css";

function Home() {
  return (
    <>
      <div>
        <section className="section">
          <div className="section__container">
            <div className="content">
              <p className="subtitle">Halo, Nama Saya</p>
              <h1 className="title">
                <span>Gilang Ramadhan</span> Mahasiswa Teknik Informatika
              </h1>
              <p className="description">
                Selamat datang di website pribadi saya! Nama saya adalah Gilang Ramadhan, mahasiswa jurusan Teknik Informatika UIN SUSKA RIAU. Dengan ketertarikan khusus pada pengembangan aplikasi mobile, machine learning, dan pengembangan
                website. Terima kasih telah berkunjung, dan mari kita eksplorasi bersama bagaimana teknologi dapat membentuk dan memperkaya pengalaman digital kita!
                <div className="social-media">
                  <a href="https://web.facebook.com/profile.php?id=100026393497824" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://twitter.com/IndraIndra32243" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/gilanginr_/" target="_blank">
                    <i className="bx bxl-instagram-alt"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/gilang-ramadhan-indra-8504a3250/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://github.com/Indra734" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </p>
            </div>
            <div className="image">
              <img src="/homepagepic.png" alt="profile" style={{ border: "2px solid #1f2937" }} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
