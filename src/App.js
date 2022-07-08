import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (<>
          <NavBar />
          <ItemListContainer gretting="Producto 1" />
          </>
  )
}

export default App;

