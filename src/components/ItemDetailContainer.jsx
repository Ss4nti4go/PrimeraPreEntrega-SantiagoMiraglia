import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductArray';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDetail = products.find(p => p.id === parseInt(id));
    setProduct(productDetail);
  }, [id]);



  return (
    <div className="p-8 bg-white rounded-lg shadow-md text-center mb-4 w-1/3 mx-auto min-w-[300px]">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-800 mb-4">${product.price}</p>
      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
  );
};
