import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CartProvider from './contexts/CartContext';
import Cart from './components/Cart';
import CartPurchase from './components/CartPurchase';
import SearchOrder from './components/SearchOrder';

function App() {
  return (<>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cartpunchase" element={<CartPurchase/>} />
          <Route path="/searchorder" element={<SearchOrder/>} />
          <Route path="/category/:name" element={<ItemListContainer/>} />
          <Route path="item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
  </>
  )
}
export default App;
