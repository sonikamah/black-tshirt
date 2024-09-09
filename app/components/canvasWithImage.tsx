'use client'; // Required for React hooks in Next.js

import React, { useEffect, useRef, useState } from 'react';

const CanvasWithImage = ({
  onDropKeyword,
  onDragOverCanvas,
  draggingKeyword,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Create an image object
    const img = new Image();
    img.src = '/black.svg'; // Replace with a valid image path or URL

    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.onerror = () => {
      console.error('Failed to load image. Check the image path or URL.');
      context.fillStyle = 'red';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = '20px Arial';
      context.fillStyle = 'white';
      context.fillText('Failed to load image', 20, 50);
    };
  }, []);

  // Handle drop on canvas
  const handleDrop = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const canvasRect = canvas.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    if (draggingKeyword) {
      context.font = '20px Arial';
      context.fillStyle = 'black';
      context.fillText(draggingKeyword, x, y);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      onDrop={handleDrop}
      onDragOver={onDragOverCanvas}
      className="border-2 border-black"
    ></canvas>
  );
};

export default CanvasWithImage;
