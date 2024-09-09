'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import LanguageKeywordsButton from './languageKeywordsButton';
import CanvasWithImage from './canvasWithImage';
import ColorButton from './colorButton';

const HomePage = () => {
  const [draggedItems, setDraggedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

  const handleDragStart = (e, keyword) => {
    e.dataTransfer.setData('text/plain', keyword);
    setDraggedItems(prevItems => {
      // Add the keyword to the dragged items if not already present
      if (!prevItems.some(item => item.keyword === keyword)) {
        return [...prevItems, { keyword, color: selectedColor }];
      }
      return prevItems;
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const keyword = e.dataTransfer.getData('text/plain');
    if (keyword) {
      const canvas = document.getElementById('canvas');
      const canvasRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      setDraggedItems(prevItems => {
        // Update position of the dragged item or add a new one
        const existingItem = prevItems.find(item => item.keyword === keyword);
        if (existingItem) {
          return prevItems.map(item =>
            item.keyword === keyword
              ? { ...item, x, y }
              : item
          );
        }
        return [...prevItems, { keyword, color: selectedColor, x, y }];
      });
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
        <h1 className="text-xl font-semibold mt-7 mb-7">Draggable Language Keywords</h1>
        <LanguageKeywordsButton
          onDragStart={handleDragStart}
          draggedItems={draggedItems}
        />
        <hr />

        <h1 className="text-xl font-semibold mt-7 mb-7">Color Palette</h1>
        <ColorButton onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default HomePage;
