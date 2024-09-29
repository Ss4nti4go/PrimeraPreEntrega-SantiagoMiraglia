import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CartProvider } from './components/cartContext';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { Categorias } from './components/Categorias';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ErrorProducto from './components/errorProducto';
import Cart from './components/cart';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <div className="flex">
          <Categorias />
          <main className="bg-gray-300 min-h-screen flex-1 p-4">
            <Routes>
              <Route index element={<ItemListContainer saludo="¡Bienvenido!" />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/item/*" element={<ErrorProducto />}></Route>
              <Route path="/*" element={<ErrorProducto />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
