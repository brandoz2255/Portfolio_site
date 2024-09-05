import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FloatingNav } from './ui/floating-navbar'




const Hero = () => {
  return (
    <>
      <FloatingNav navItems={name: string, link: string, icon: ReactNode} />
      
      <div className="pb-20 pt-36 relative">
        <div className='relative'>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex flex-col items-center relative overflow-hidden">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mb-24">
            <h2 className='uppercase tracking-widest text-xs text-center -text-blue-100 max-w-80'>
              Next.js something!
            </h2>
          </div>

          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p>
        </div>
      </div>
    </>
  )
}


export default Hero
