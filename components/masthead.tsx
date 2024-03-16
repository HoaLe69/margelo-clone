'use client'
import { useContext, useState, useEffect, useRef } from 'react'
import { ScrollContext } from './scroll-observer'
import Image from 'next/image'

const Masthead = () => {
  const { scrollY } = useContext(ScrollContext)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  const handleOnLoaded = () => {
    setImageLoaded(true)
  }

  useEffect(() => {
    if (elContainer) {
      setProgress(Math.min(1, scrollY / elContainer?.clientHeight))
    }
  }, [scrollY, elContainer])
  return (
    <div
      style={{ transform: `translateY(-${progress * 20}vh)` }}
      ref={refContainer}
      className="min-h-screen top-0 sticky flex flex-col items-center -z-10 justify-center"
    >
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
