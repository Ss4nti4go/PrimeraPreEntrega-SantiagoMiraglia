import React from 'react';
import { products } from './ProductArray';
export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-800 mb-4">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

