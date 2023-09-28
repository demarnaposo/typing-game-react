import "./App.css";

function App() {
  return (
    <>
      <header
        className="text-center text-white p-3 mb-5"
        style={{ backgroundColor: "#77ACF1" }}
      >
        <h1>Typing Game Sederhana</h1>
      </header>
      <div className="col-4">
        <h3>
          <span>Waktu : 05</span>
        </h3>
      </div>
      <div className="col-4">
        <h3>
          <span>Skor : 9</span>
        </h3>
      </div>

      <div className="col-4">
        <h3>
          <span>Skor Tertinggi : 10</span>
        </h3>
      </div>

      <div className="container text-center col-md-8 col-6">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="display-1 mb-5" style={{ fontFamily: "sans-serif" }}>
              Nama
            </h2>

            <input
              type="text"
              value=""
              className="form-control form-control-lg"
              placeholder="Mulai mengetik..."
            />
            <h4 className="mt-3">Benar!</h4>
            <div className="row mt-5" style={{ cursor: "pointer" }}>
              <div className="col-md-12">
                <div
                  className="card card-body text-white"
                  style={{ backgroundColor: "#77ACF1" }}
                >
                  <h5>RESET</h5>

                  <p>
                    Dengan menekan tombol RESET anda akan menghapus history Skor
                    Tertinggi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
