import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 max-h-30">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 PowerFuel Fitness. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
