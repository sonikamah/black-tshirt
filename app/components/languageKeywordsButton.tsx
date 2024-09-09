'use client'; // Required for React hooks in Next.js

import React from 'react';

const LanguageKeywordsButton = ({ onDragStart }) => {
  const languageKeywords = [
    'JavaScript',
    'Java',
    'React',
    'Python',
    'TypeScript',
    'Node.js',
    'Vue',
    'Angular',
    'C++',
    'Ruby',
    'Go',
    'PHP',
    'Swift',
    'Kotlin',
    'C#',
    'HTML',
    'CSS',
    'SASS',
    'SQL',
    'GraphQL',
    'Rust',
    'Dart',
    'Scala',
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {languageKeywords.map((keyword, index) => (
        <button
          key={index}
          draggable
          onDragStart={(e) => onDragStart(e, keyword)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full border border-blue-600 hover:bg-blue-600 cursor-grab"
        >
          {keyword}
        </button>
      ))}
    </div>
  );
};

export default LanguageKeywordsButton;
