'use client';

//import React from 'react';
import React from 'react';

interface CarouselButtonsProps {
  itemCount: number;
  currentIndex: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselButtons: React.FC<CarouselButtonsProps> = ({ itemCount, currentIndex, onPrevClick, onNextClick }) => {
  return (
    <>
      <button 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
        onClick={onPrevClick}
        aria-label="Previous item"
      >
        &lt;
      </button>
      <button 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
        onClick={onNextClick}
        aria-label="Next item"
      >
        &gt;
      </button>
    </>
  );
};

export default CarouselButtons;
