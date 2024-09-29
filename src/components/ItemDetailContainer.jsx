import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useCart } from './cartContext';

export const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde los parámetros de la URL
  const [item, setItem] = useState(null);
  const [contador, setContador] = useState(0);
  const { addToCart } = useCart(); // Usa la función addToCart del contexto

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, 'products', id);
    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.error("Producto no encontrado");
      }
    }).catch((error) => {
      console.error("Error al cargar el producto:", error);
    });
  }, [id]); // Agrega el id como dependencia para recargar el producto cuando cambie

  const handleAddToCart = () => {
    addToCart(item, contador);
    
    setContador(0); // Resetea el contador después de agregar al carrito
  };

  // Verificación para que solo renderice si el producto está cargado
  if (!item) {
    return <div className="text-center">Cargando producto...</div>;
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md text-center mb-4 w-1/3 mx-auto mt-10">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
      <p className="text-lg text-gray-800 mb-4">${item.price}</p>
      <p className="text-sm text-gray-600">{item.description}</p>
      <div className="flex justify-center mb-4">
        <button onClick={() => setContador(contador + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">+</button>
        <span className="mx-2">{contador}</span>
        <button onClick={() => contador > 0 && setContador(contador - 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">-</button>
      </div>
      <div className='flex justify-evenly'>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">Agregar al Carrito</button>
        <button onClick={() => window.history.back()} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">Volver</button>
      </div>
    </div>
  );
};


