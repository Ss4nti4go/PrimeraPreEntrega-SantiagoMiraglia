import React from 'react';

export const CartWidget = () => {
  return (
    <div className="relative">
      <img src="https://imgs.search.brave.com/bCILkc2r0W5O4wwKGzFmRrvl3akuzFFPgRMrjh3JR4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzMjExNC9p/c29sYXRlZC9wcmV2/aWV3LzUzNjcyMDJh/ZDRkZDExNzI1NTQ0/Y2IzMDA4MDQ5Zjk2/LWljb25vLXBsYW5v/LWRlLWNhcnJpdG8t/ZGUtY29tcHJhcy5w/bmc" alt="carrito" className='w-12 h-12 cursor-pointer hover:opacity-100 transition duration-300 ease-in out opacity-80 '/>
      <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">3</span>
    </div>
  );
};
