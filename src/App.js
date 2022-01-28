import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sign from './Sign.js';
import Parade from './Parade.js';

function App() {
  const [unicornSize, setUnicornSize] = useState(1);
  const [dragonSize, setDragonSize] = useState(1);
  const [openZoo, setOpenZoo] = useState(false);
  const [animalArray, setAnimalArray] = useState(['whale', 'peacock', 'squid', 'fox']);

  const unicornStyle = {
    fontSize: `${unicornSize}rem`,
    background: 'electric purple',
  };
  const dragonStyle = {
    fontSize: `${dragonSize}rem`,
    background: 'scarlet',
  };

  return (
    <div className="App">
      <section className='fight'>
        <div className='unicorn'>
          <p style={unicornStyle}>🦄</p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}></button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}></button>
        </div>
        <div className='dragon'>
          <p style={dragonStyle}>🐲</p>
          <button onClick={() => setDragonSize(dragonSize + 1)}></button>
          <button onClick={() => setDragonSize(dragonSize - 1)}></button>
        </div>
      </section>
     
    </div>
  );
}

export default App;
