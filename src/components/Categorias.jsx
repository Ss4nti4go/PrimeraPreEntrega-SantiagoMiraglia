import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = () => {
  const categorias = [
    'Proteínas',
    'Vitaminas y Minerales',
    'Creatinas',
    'Suplementos Pre-Entreno',
    'Accesorios de Gimnasio',
  ];

  return (
    <div className="bg-white p-6 w-1/4 min-h-screen">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">Categorías</h2>
      <ul className="space-y-3">
        {categorias.map((cat, index) => (
          <li 
            key={index}
            className="text-gray-700 text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform hover:text-blue-600 hover:translate-x-1"
          >
            <Link to={`/category/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
