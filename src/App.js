//GLOBAL
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //para poder usar bootstrap
import './App.css';

//COMPONENTS
import NavBar from './Componentes/NavBar/NavBar';
import Contact from './Pages/Contact/Contact';
import Error404 from './Componentes/Error404/Error404';
import Cart from './Componentes/Cart/Cart';

//CONTEXT 
import { CartProvider } from './Componentes/Context/Context';

//PAGES
import Home from './Pages/Home/Home';
import ListCategoryContainer from './Pages/ListCategoryContainer/ListCategoryContainer';
import ListDetailContainer from './Pages/ListDetailContainer/ListDetailContainer';
import FinishPurchase from './Pages/FinishPurchase/FinishPurchase';

function App() {      

  return (
    <>
      <CartProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:gameCategory" element={<ListCategoryContainer />} />
          <Route path="/detail/:gameName" element={<ListDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/finishpurchase" element={<FinishPurchase />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='*' element={<Error404 />} />
        </Routes>    

        </CartProvider>
    </>
  );
}

export default App;


