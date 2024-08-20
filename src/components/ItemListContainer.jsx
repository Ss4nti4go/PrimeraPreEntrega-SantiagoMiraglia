
import React from 'react';

export const ItemListContainer = ({ saludo }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md text-center mb-4 ">
      <h2 className="text-2xl font-semibold">{saludo}</h2>
    </div>
  );
};

