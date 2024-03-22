import "./biodata.css";

function Biodata() {
  return (
    <>
      <div>
        <section className="section">
          <div className="section__container">
            <div className="image">
              <img src="/biopic.png" alt="profile" style={{ width: "auto", height: "300px", border: "2px solid #1f2937" }} />
            </div>
            <div className="content">
              <h2 className="title">My Biodata</h2>
              <div className="bio">
                <h5 className="subtitle">Nama Lengkap :</h5>
                <h3 className="subjudul">Gilang Ramadhan Indra</h3>
              </div>
              <div className="bio">
                <h5 className="subtitle">Tempat / Tanggal Lahir :</h5>
                <h3 className="subjudul">Koto Lubuk Jambi / 02 November 2003</h3>
              </div>
              <div className="bio">
                <h5 className="subtitle">Alamat :</h5>
                <h3 className="subjudul">Koto Lubuk Jambi, Kec. Kuantan Mudik, Kab. Kuantan Singingi</h3>
              </div>
              <div className="bio">
                <h5 className="subtitle">Jenis Kelamin :</h5>
                <h3 className="subjudul">Laki-laki</h3>
              </div>
              <div className="bio">
                <h5 className="subtitle">Agama :</h5>
                <h3 className="subjudul">Islam</h3>
              </div>
              <div className="bio">
                <h5 className="subtitle">Email :</h5>
                <h3 className="subjudul">gilangindra734@gmail.com</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Biodata;
