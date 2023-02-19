//GLOBAL
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //para poder usar bootstrap
import './App.css';

//SERVICE
import getGames from './service/getGames';
import getCategories from './service/getCategories'

//COMPONENTS
import Home from './Componentes/Home';
import NavBar from './Componentes/NavBar';
import ListCategoryContainer from './Componentes/ListCategoryContainer';

function App() {                      
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<ListCategoryContainer />} />
        {/* <Route path='*' element={} /> */}
      </Routes>
    </>
  );
}

export default App;


