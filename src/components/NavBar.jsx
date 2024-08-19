import React from 'react';
import { CartWidget } from './CartWidget.jsx';

export const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Mi Tienda</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white">Inicio</a></li>
        <li><a href="#" className="text-white">Productos</a></li>
        <li><a href="#" className="text-white">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

