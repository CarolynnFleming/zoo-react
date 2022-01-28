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

  function handleAddWhale() {
    setAnimalArray([...animalArray, 'whale']);
  }

  function handleAddPeacock() {
    setAnimalArray([...animalArray, 'peacock']);
  }

  function handleAddSquid() {
    setAnimalArray([...animalArray, 'squid']);
  }

  function handleAddFox() {
    setAnimalArray([...animalArray, 'fox']);
  }


  return (
    <div className="App">
      <section className='fight'>
        <div className='unicorn'>
          <p style={unicornStyle}>🦄</p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}>Unicorn gets Stronger</button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}>Unicorn attacks lion</button>
        </div>
        <div className='dragon'>
          <p style={dragonStyle}>🐲</p>
          <button onClick={() => setDragonSize(dragonSize + 1)}>Dragon gets stronger</button>
          <button onClick={() => setDragonSize(dragonSize - 1)}>Dragon attacks unicorn</button>
        </div>
      </section>
      <section className='sign'>
        <Sign openZoo={openZoo} />
        <div>
          <button onClick={() => setOpenZoo(false)}>Close Zoo</button>
          <button onClick={() => setOpenZoo(true)}>Open Zoo</button>
        </div>
      </section>
      <section className='parade'>
        <Parade animalArray={animalArray} />
        <div>
          <button onClick={handleAddWhale}>Add Whale</button>
          <button onClick={handleAddPeacock}>Add Peacock</button>
          <button onClick={handleAddSquid}>Add Squid</button>
          <button onClick={handleAddFox}>Add Fox</button>
        </div>
      </section>
     
    </div>
  );
}

export default App;
