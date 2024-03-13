'use client'
import { useState } from 'react'
import Image from 'next/image'

const Masthead = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const handleOnLoaded = () => {
    setImageLoaded(true)
  }
  return (
    <div className="min-h-screen top-0  flex flex-col items-center justify-center">
      <video
        loop
        autoPlay
        className="w-full h-full absolute object-cover "
        muted
        playsInline
      >
        <source src="/assets/masthead-bg.mp4" type="video/mp4" />
        <source src="/assets/masthead-bg.webpm" type="video/webpm" />
      </video>
      <div
        className={`z-10 pt-10 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          onLoad={handleOnLoaded}
          src="/assets/logo.svg"
          alt="logo"
          width={128 / 3}
          height={114 / 3}
          className="flex-grow-0"
        />
      </div>
      <div className="p-12 text-white flex-1 flex flex-col z-10 justify-center items-center font-bold drop-shadow-[0px_5px_3px_rgba(0,0,0,0.5)]">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl">
          App Development, done right
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 z-10">
        <Image
          src="/assets/arrow-down.webp"
          alt="arrow down"
          width={188 / 3}
          height={114 / 3}
          className={`${imageLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-1000`}
          onLoad={handleOnLoaded}
        />
      </div>
    </div>
  )
}

export default Masthead
