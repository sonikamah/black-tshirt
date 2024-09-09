// ColorButton.js
import React from 'react';
import colorPalette from '../utils/hexcodes'; // Adjust the import path accordingly

const ColorButton = () => {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      {colorPalette.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          className="w-10 h-10 rounded-full border border-gray-300 shadow-md hover:opacity-80"
          title={color} // Tooltip showing the hex code
        />
      ))}
    </div>
  );
};

export default ColorButton;
