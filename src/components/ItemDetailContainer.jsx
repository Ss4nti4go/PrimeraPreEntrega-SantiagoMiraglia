import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductArray';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Simulación de llamada a API
    const productDetail = products.find(p => p.id === parseInt(id));
    setProduct(productDetail);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-white rounded-lg shadow-md text-center mb-4 w-1/3 mx-auto mt-10">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-800 mb-4">${product.price}</p>
      <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-center mb-4">
          <button onClick={() => setContador(contador + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
            +
          </button>
          <span className="mx-2">{contador}</span>
          <button onClick={() => {
            if(contador > 0){setContador(contador - 1)}
        
            }} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
            -
          </button>
        </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
        Agregar al Carrito
      </button>
    </div>
  );
};
