import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}
const currentLevel = levels.medium;
let time = levels.medium;

const words = [
  "bermain",
  "sangat",
  "langka",
  "aku",
  "dia",
  "kita",
  "mereka",
  "joke",
  "developer",
  "angin",
  "hero",
  "javascript",
  "rumah",
  "makan",
  "java",
  "lampung",
  "indonesia",
  "sungai",
  "danau",
  "canda",
  "kaki",
  "master",
  "tawa",
  "laptop",
];

function App() {
  const [keyKata, setKeyKata] = useState("");
  const [input, setInput] = useState("");
  const [timeS, setTimeS] = useState(time);
  const [bermain, setBermain] = useState(false); 
  const [keterangan, setKeterangan] = useState("");
  const [skor, setSkor] = useState(0);

  useEffect(() => {
    tampilKata(words);
    setInterval(hitungMundur, 1000);
  }, []);

  const tampilKata = (words) => {
    const ranIndex = Math.floor(Math.random() * words.length);
    setKeyKata(words[ranIndex]);
  };

  useEffect(() => {
    if(input === keyKata && input.length > 0) {
      tampilKata(words)
      setInput("");
      setBermain(true);
      setKeterangan("Benar!");
      time = currentLevel + 1;
      setTimeS(time);
      setSkor(data => data + 1);
    }
  },[input])

const hitungMundur = () => {
  if(time > 0) {
    time--;
  }else if(time===0) {
    setBermain(false)
  }
  setTimeS(time);
}

const cekStatus = () => {
  if(!bermain && time===0) {
    setKeterangan("Game Over!")
  }
}
setInterval(cekStatus, 50);

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
          <span>Waktu : {time || timeS}</span>
        </h3>
      </div>
      <div className="col-4">
        <h3>
          <span>Skor : {skor}</span>
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
              {keyKata}
            </h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control form-control-lg" placeholder="Mulai mengetik..." />
            <h4 className="mt-3">{keterangan}</h4>
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
