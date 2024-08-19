
import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold">{greeting}</h2>
    </div>
  );
};

