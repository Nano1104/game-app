//GLOBAL
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //para poder usar bootstrap
import './App.css';

//COMPONENTS
import Home from './Componentes/Home';
import NavBar from './Componentes/NavBar';
import ListCategoryContainer from './Componentes/ListCategoryContainer';
import ListDetailContainer from './Componentes/ListDetailContainer';
import About from './Componentes/About';
import ContactItem from './Componentes/ContactItem';
import Error404 from './Componentes/Error404';

function App() {                      
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:gameCategory" element={<ListCategoryContainer />} />
        <Route path="/detail/:gameName" element={<ListDetailContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactItem />} />

        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;


