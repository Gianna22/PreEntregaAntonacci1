import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemConteiner from './components/ItemConteiner/ItemConteiner';

function App() {
  return (
    <>
      <Navbar />
      <ItemConteiner  nombre="Dobby lenceria" />
    </>
  )
}

export default App;