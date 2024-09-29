import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

export const Buscador = ({ productos }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Función para manejar cambios en el input de búsqueda
  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Filtrar los productos con el texto ingresado
  const productosFiltrados = productos.filter((producto) =>
    producto.name.toLowerCase().includes(query) || 
    producto.description.toLowerCase().includes(query)
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full p-2 border rounded-lg mb-4"
        value={query}
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))
        ) : isLoading ? (
          <p className='mx-auto text-center text-gray-500 mt-4 text-lg font-bold mb-4 p-4 rounded bg-gray-100 shadow shadow-gray-300 '>Buscando...</p>
        ) :
        (
          <p className='mx-auto text-center text-gray-500 mt-4 text-lg font-bold mb-4 p-4 rounded bg-gray-100 shadow shadow-gray-300 '>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};
