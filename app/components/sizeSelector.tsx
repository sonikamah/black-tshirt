'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';

const SizeSelector = ({ onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`px-4 py-2 rounded-full border font-semibold transition-colors ${
            selectedSize === size
              ? 'bg-blue-500 text-white border-blue-600'
              : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'
          }`}
          onClick={() => handleSizeSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
