'use client'; // Required for React hooks in Next.js

import React, { useState } from 'react';
import LanguageKeywords from './languageKeywordsButton';
import CanvasWithImage from './canvasWithImage';
import ColorButton from './colorButton';

const HomePage = () => {
  const [draggingKeyword, setDraggingKeyword] = useState(null);

  // Handle drag start in the LanguageKeywords component
  const handleDragStart = (e, keyword) => {
    setDraggingKeyword(keyword);
  };

  // Allow drop on canvas
  const handleDragOverCanvas = (e) => {
    e.preventDefault(); // Allow drop by preventing default behavior
  };

  return (
    <div className="flex p-4 h-screen">
      {/* Left Canvas Section */}
      <div className="w-1/2 flex items-center justify-center">
        <CanvasWithImage
          draggingKeyword={draggingKeyword}
          onDropKeyword={handleDragStart}
          onDragOverCanvas={handleDragOverCanvas}
        />
      </div>

      {/* Right Language Keywords Section */}
      <div className="w-1/2 p-4 bg-gray-100">
        <h1 className="text-xl font-semibold mb-4">Language Keywords</h1>
        <LanguageKeywords onDragStart={handleDragStart} />
        <ColorButton />
      </div>
    </div>
  );
};

export default HomePage;
