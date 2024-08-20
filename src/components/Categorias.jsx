import React from 'react';

export const Categorias = () => {
  const categorias = [
    'Proteínas',
    'Vitaminas y Minerales',
    'Aminoácidos',
    'Suplementos Pre-Entreno',
    'Accesorios de Gimnasio',
    'Ropa Deportiva',
    'Barras y Snacks',
    'Equipos de Entrenamiento'
  ];

  return (
    <div className="bg-white  p-6 mb-4 w-1/4 mr-auto text-center h-100%">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-2">Categorías</h2>
      <ul className="space-y-3">
        {categorias.map((cat, index) => (
          <li 
            key={index}
            className="text-gray-700 text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform hover:text-blue-600 hover:translate-x-1"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};