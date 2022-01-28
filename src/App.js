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
     
    </div>
  );
}

export default App;
