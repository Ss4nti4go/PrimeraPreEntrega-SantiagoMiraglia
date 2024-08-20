import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from './components/NavBar.jsx';
import {ItemListContainer} from './components/ItemListContainer.jsx';
import {Footer} from './components/Footer.jsx';
import {Categorias} from './components/Categorias.jsx';
import {ProductList} from './components/ProductList.jsx';

const App = () => {
  return <>
      <header>
      <NavBar/>
      <ItemListContainer saludo="¡Bienvenido!"  />
      </header>
      <main className='bg-gray-300 min-h-screen flex'>
        <Categorias/>
        <ProductList/>
      </main>
      <Footer/>
  </>
  
};

export default App
