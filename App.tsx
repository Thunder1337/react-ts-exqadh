import React, { useState } from 'react';

import './index.css';

function App() {
  // Stare initala
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);
  const [distanta, setDistanta] = useState('');
  const [message, setMessage] = useState('');

  let calcDistanta = (event) => {
    //oprim comportamentul implicit al formularului,
    //se folosește event.preventDefault() pentru a asigura că comportamentul
    //personalizat definit în funcția calcBmi este executat în locul comportamentului
    // de trimitere a formularului.
    event.preventDefault();

    if (x1 === 0 || x2 === 0 || y1 === 0 || y2 === 0) {
      alert('Adauga coordonatele valide.');
    } else {
      let distanta = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
      setDistanta(distanta.toFixed(10));
    }
  };

  //  logica si afisare imagini
  let imgSrc;

  if (distanta === 0) {
    imgSrc = null;
  } else {
    // imgSrc = require('../src/assets/underweight.png')
  }

  //Reload aplicatie
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Calculator Coordnate</h2>
        <form onSubmit={calcDistanta}>
          <div>
            <label>X1</label>
            <input value={x1} onChange={(e) => setX1(e.target.value)} />
          </div>
          <div>
            <label>X2</label>
            <input value={x2} onChange={(e) => setX2(e.target.value)} />
          </div>
          <div>
            <label>Y1</label>
            <input value={y1} onChange={(event) => setY1(event.target.value)} />
          </div>
          <div>
            <label>Y2</label>
            <input value={y2} onChange={(event) => setY2(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Introducere
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Resetare
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Distanta dintre puncte este: {distanta}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
