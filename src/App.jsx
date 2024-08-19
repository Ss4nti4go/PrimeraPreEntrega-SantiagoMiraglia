import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './components/NavBar.jsx';
import {ItemListContainer} from './components/ItemListContainer.jsx';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenidos a mi tienda!"/>
    </div>
  );
};

export default App
