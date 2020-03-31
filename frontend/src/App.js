import React, { useState } from 'react';
import Header from './Header';
import Login from './pages/Login';
import './global.css';
import Routes from './Routes';

function App() {
  const [counter, setCounter] = useState(0); // [valor, funcao]

  function increment() {
    setCounter(counter + 1);
  } 

  return (
    <div>
      <Routes></Routes>
    </div>
  );
}

export default App;
