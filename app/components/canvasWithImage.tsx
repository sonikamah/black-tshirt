'use client'; // Required for React hooks in Next.js

import React, { useEffect, useRef } from 'react';

const CanvasWithImage = ({ draggedItems, onDrop, onDragOverCanvas, id }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Create and load image
    const img = new Image();
    img.src = '/black.svg'; // Ensure this path is correct

    img.onload = () => {
      imageRef.current = img;
      drawCanvas();
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

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear canvas and draw background image
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (imageRef.current) {
      context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Draw all dragged items
    draggedItems.forEach(({ keyword, color, x, y }) => {
      context.font = '20px Arial';
      context.fillStyle = color;
      context.fillText(keyword, x, y);
    });
  };

  useEffect(() => {
    drawCanvas();
  }, [draggedItems]);

  return (
    <canvas
      id={id}
      ref={canvasRef}
      width={500}
      height={500}
      onDrop={onDrop}
      onDragOver={onDragOverCanvas}
      className="border-2 border-black"
    ></canvas>
  );
};

export default CanvasWithImage;
