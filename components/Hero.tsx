'use client';

import React, { useState, ReactNode } from 'react';
import { Spotlight } from './ui/Spotlight'
import { FloatingNav } from './ui/floating-navbar'
import CarouselButtons from './CarouselButtons';
import Image from 'next/image';

interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
}

interface HeroProps {
  navItems?: NavItem[];
}
// The Card and MiniCards components have been moved inside the Hero component

const Hero: React.FC<HeroProps> = ({ navItems = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = 3; // Assuming you have 3 items in your carousel

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const carouselItems = [
    { id: 1, image: '/path/to/image1.jpg', title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, image: '/path/to/image2.jpg', title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, image: '/path/to/image3.jpg', title: 'Item 3', description: 'Description for Item 3' },
  ];

  return (
    <div className="pb-20 pt-36 relative">
      <div className='relative'>
        <FloatingNav 
          className='Nav' 
          navItems={navItems.map(item => ({
            name: item.name,
            link: item.link,
            icon: item.icon as JSX.Element | undefined
          }))} 
        />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-gray-900 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex flex-col items-center relative overflow-hidden">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mb-24">
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-500 max-w-80'>
            Next.js something!
          </h2>
        </div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Info Card 1</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Add your information about something here. This could be a feature, statistic, or any other relevant detail.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Info Card 2</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Add more information about something else here. This could be another feature, benefit, or any other important point.
            </p>
          </div>
        </div>
        <div className="mt-8 w-full max-w-2xl">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Larger Info Card</h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              This is a slightly larger card with more detailed information. You can use this space to highlight key features, provide a summary of your product or service, or include any other important information that deserves more attention.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden mt-8 w-full max-w-4xl mb-8">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <Image src={item.image} alt={item.title} width={400} height={300} className="rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <CarouselButtons 
            itemCount={itemCount}
            currentIndex={currentIndex}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
