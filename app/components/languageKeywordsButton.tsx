'use client'; // Required for React hooks in Next.js

import React from 'react';
import { languageKeywords } from "../utils/languageKeywords";

const LanguageKeywordsButton = ({ onDragStart, draggedItems }) => {
  const draggedKeywords = draggedItems.map(item => item.keyword);

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {languageKeywords.map((keyword, index) => (
        <button
          key={index}
          draggable
          onDragStart={(e) => onDragStart(e, keyword)}
          className={`px-4 py-2 rounded-full border cursor-grab ${
            draggedKeywords.includes(keyword)
              ? 'bg-blue-500 text-white border-blue-700 ring-2 ring-blue-300'
              : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'
          }`}
        >
          {keyword}
        </button>
      ))}
    </div>
  );
};

export default LanguageKeywordsButton;
