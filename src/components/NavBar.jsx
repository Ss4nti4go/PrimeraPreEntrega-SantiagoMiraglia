import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-bold">PowerFuel fitness</Link>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Inicio</Link></li>
        <li><Link to="/cart" className="text-white">carrito</Link></li>
    
      </ul>
      <CartWidget/>
    </nav>
  );
};
