'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

const SizeSelectButtonGroup = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-4 py-2 border rounded-md cursor-pointer ${
              selectedSize === size
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelectButtonGroup;
