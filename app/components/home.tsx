'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import LanguageKeywordsButton from './languageKeywordsButton';
import CanvasWithImage from './canvasWithImage';
import ColorButton from './colorButton';
import colorPalette from '../utils/hexcodes'; // Adjust path as needed

const HomePage = () => {
  const [draggedItems, setDraggedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

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

      setDraggedItems([...draggedItems, { keyword, color: selectedColor, x, y }]);
    }
  };

  const handleDragOverCanvas = (e) => {
    e.preventDefault();
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex p-4 h-screen">
      {/* Left Canvas Section */}
      <div className="w-1/2 flex items-center justify-center">
        <CanvasWithImage
          id="canvas"
          draggedItems={draggedItems}
          onDrop={handleDrop}
          onDragOverCanvas={handleDragOverCanvas}
        />
      </div>

      {/* Right Language Keywords Section */}
      <div className="w-1/2 p-4 bg-gray-100">
        <h1 className="text-xl font-semibold mb-4">Language Keywords</h1>
        <LanguageKeywordsButton onDragStart={handleDragStart} />
        <ColorButton onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default HomePage;
