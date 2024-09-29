import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Buscador } from './buscador';

export const ItemListContainer = ({ saludo }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(0); // Estado para el precio mínimo
  const [maxPrice, setMaxPrice] = useState(1000); // Estado para el precio máximo

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'products');

    const q = id ? query(itemsCollection, where('category', '==', id)) : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No hay productos disponibles');
        } else {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
        setError('Hubo un error al cargar los productos');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredItems = items.filter(product => product.price >= minPrice && product.price <= maxPrice);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">{saludo}</h2>

    
        <div className='min-h-1/2'>
         
          <div className="flex justify-between my-4">
            <div>
              <label className="mr-2">Precio Mínimo:</label>
              <input 
                type="text" 
                value={1} 
                onChange={(e) => setMinPrice(Number(e.target.value))} 
                className="border p-1"
              />
            </div>
            <div>
              <label className="mr-2">Precio Máximo:</label>
              <input 
                type="text" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))} 
                className="border p-1"
              />
            </div>
          </div>
          <Buscador productos={filteredItems} />
        </div>
      
     
    </div>
  );
};
