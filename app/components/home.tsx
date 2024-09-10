'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import LanguageKeywordsButton from './languageKeywordsButton';
import CanvasWithImage from './canvasWithImage';
import ColorButton from './colorButton';
import SizeSelector from './sizeSelector';

const HomePage = () => {
  const [draggedItems, setDraggedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
  const [selectedSize, setSelectedSize] = useState({}); // To track size for each T-shirt

  const handleDragStart = (e, keyword) => {
    e.dataTransfer.setData('text/plain', keyword);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const keyword = e.dataTransfer.getData('text/plain');
    if (keyword) {
      const canvas = document.getElementById('canvas');
      const canvasRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      setDraggedItems([...draggedItems, { keyword, color: selectedColor, x, y, size: selectedSize[keyword] }]);
    }
  };

  const handleDragOverCanvas = (e) => {
    e.preventDefault();
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (keyword, size) => {
    setSelectedSize({ ...selectedSize, [keyword]: size });
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 h-screen">
      {/* Canvas Section */}
      <div className="lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0">
        <CanvasWithImage
          id="canvas"
          draggedItems={draggedItems}
          onDrop={handleDrop}
          onDragOverCanvas={handleDragOverCanvas}
        />
      </div>

      {/* Sidebar Section */}
      <div className="lg:w-1/3 mx-auto my-auto">
        <h1 className="text-xl font-semibold mb-4">Draggable Language Keywords</h1>
        <LanguageKeywordsButton onDragStart={handleDragStart} draggedItems={draggedItems} />

        <h1 className="text-xl font-semibold mt-7 mb-4">Choose Color</h1>
        <ColorButton onColorSelect={handleColorSelect} />

        <h1 className="text-xl font-semibold mt-7 mb-4">Choose Size</h1>
        <SizeSelector onSizeSelect={handleSizeSelect} />
      </div>
    </div>
  );
};

export default HomePage;
