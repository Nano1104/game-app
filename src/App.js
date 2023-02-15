//GLOBAL
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //para poder usar bootstrap
import './App.css';

//SERVICE
import getGames from './service/apiCall';

//COMPONENTS
import Home from './Componentes/Home';
import NavBar from './Componentes/NavBar';


function App() {
  const genders = getGames().then(res => res.map(game => console.log(game[2])))
  console.log(genders)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={} /> */}
      </Routes>
    </>
  );
}

export default App;


