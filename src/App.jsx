import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { Categorias } from './components/Categorias';
import { ItemDetailContainer } from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <div className="flex">
        <Categorias />
        <main className="bg-gray-300 min-h-screen flex-1 p-4">
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="¡Bienvenido!" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
