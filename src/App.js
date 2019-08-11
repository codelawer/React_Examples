import React from 'react';
import Lamp from './components/Lamp';

function App() {
  return (
    <div className="App">
      <Lamp />
      <Lamp bg={'blue'} />
    </div>
  );
}

export default App;
