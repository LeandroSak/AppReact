import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (<>
    <BrowserRouter>
    <NavBar />
    
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:name" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
      
    </BrowserRouter>
  </>
  )
}
export default App;
