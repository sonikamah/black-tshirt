'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import colorPalette from '../utils/hexcodes'; // Adjust the import path accordingly

const ColorButton = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

  const handleColorClick = (color) => {
    setSelectedColor(color.hex);
    if (onColorSelect) {
      onColorSelect(color.hex);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 p-4">
      {colorPalette.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color.hex }}
          className={`w-10 h-10 rounded-full border border-gray-300 shadow-md hover:opacity-80 relative ${
            color.hex === selectedColor ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => handleColorClick(color)}
          title={color.label} // Use label for tooltip
        >
          <span className="sr-only">{color.label}</span> {/* Screen reader accessibility */}
        </button>
      ))}
    </div>
  );
};

export default ColorButton;
