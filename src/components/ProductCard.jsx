import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => (
  <Link to={`/item/${product.id}`} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-gray-800 mb-4">${product.price}</p>
      <p className="text-lg font-bold text-gray-800 mb-4">Quedan {product.stock}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
        Agregar al Carrito
      </button>
      <div className="w-full h-1 bg-gray-300 mt-4 mb-5">
        <p className="text-sm text-gray-600 mt-6 pt-2">Cada 1 kg</p>
      </div>
    </div>
  </Link>
);
