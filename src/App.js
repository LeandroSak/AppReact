import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CartProvider from './contexts/CartContext';

function App() {
  return (<>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:name" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
  </>
  )
}
export default App;
