function Achievement() {
  return (
    <>
      <div>
        <section className="section">
          <h2 className="title" style={{ fontSize: "2rem", marginTop: "6rem", marginLeft: "4.5rem" }}>
            My Achievement
          </h2>
          <div className="section__container" style={{ backgroundColor: "#b0d9ff", borderRadius: "10px" }}>
            <div className="image">
              <img src="src/assets/prestasi1.png" alt="profile" style={{ borderRadius: "5px", border: "2px solid #1f2937", width: "500px", height: "auto" }} />
            </div>
            <div className="content">
              <h1 className="subjudul">Certificate</h1>
              <p className="description" style={{ color: "#1f2937" }}>
                Juara 2 lomba UI/UX mobile app yang diadakan oleh Teknik Informatika UIR dalam rangka milad ke-16
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Achievement;
