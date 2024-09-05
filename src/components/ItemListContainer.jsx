import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductArray';
import { ProductCard } from './ProductCard';

export const ItemListContainer = ({ saludo }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API para filtrar productos por categoría
    if (id) {
      const filteredProducts = products.filter(product => product.category === id);
      setItems(filteredProducts);
    } else {
      setItems(products);
    }
  }, [id]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">{saludo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
