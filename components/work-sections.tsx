'use client'
import Image from 'next/image'
import { useContext, useRef } from 'react'
import { createContext } from 'react'
import { ScrollContext } from './scroll-observer'
type IWorkContext = {
  progress: number
}
export const WorkContext = createContext<IWorkContext>({ progress: 0 })

export const WorkContainer = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer
  let progress = 0
  const numOfPages = 4
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(
      1,
      (Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
    )
    progress = percentY * numOfPages
  }
  return (
    <WorkContext.Provider value={{ progress }}>
      <div
        ref={refContainer}
        className="h-[400vh] relative bg-black text-white"
      >
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0">
            <div className="h-[30vh]  bg-black lg:h-auto" />
            <div className="bg-white h-[70vh] lg:min-h-screen" />
          </div>
        </div>
        <div className="overflow-hidden h-screen sticky top-0">{children}</div>
      </div>
    </WorkContext.Provider>
  )
}

export const WorkSection = ({
  children,
  page
}: {
  children: React.ReactNode
  page: number
}) => {
  const { progress: currentPage } = useContext(WorkContext)
  const progress = currentPage - page
  let opacity = Math.min(1, progress * 4)
  if (progress > 0.85 && page !== 3) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }
  return (
    <div className="absolute top-0 w-full" style={{ opacity: opacity }}>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">{children}</div>
    </div>
  )
}

export const WorkLeft = ({
  children,
  page
}: {
  children: React.ReactNode
  page: number
}) => {
  const { progress: currentPage } = useContext(WorkContext)
  const p = currentPage - page
  const translateY = Math.max(-50, -(p - 0.5) * 50)
  return (
    <div
      style={{ transform: `translateY(${translateY}px)` }}
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
    >
      <div className="leading-10">{children}</div>
    </div>
  )
}
interface Props {
  srcImg?: string
  srcVideo?: string
  page: number
}
export const WorkRight: React.FC<Props> = props => {
  const { srcImg, srcVideo, page } = props
  const { progress: currentPage } = useContext(WorkContext)
  const p = currentPage - page
  const translateY = Math.max(-50, -(p - 0.5) * 50)
  return (
    <div className="bg-white h-screen flex lg:h-full md:items-center justify-center">
      <div
        style={{ transform: `translateY(${translateY}px)` }}
        className="w-full flex-1 px-10 max-w-md pt-10 lg:pt-0 md:px-0"
      >
        <div className="relative">
          {srcVideo && srcImg && (
            <>
              <div
                className={`overflow-hidden rounded-2xl absolute`}
                style={{ width: '84.7%', top: '2%', left: '7.7%' }}
              >
                <video loop playsInline autoPlay muted width="100%">
                  <source src={srcVideo} type="video/mp4" />
                </video>
              </div>
              <div className="">
                <span className="inline-block pt-[192%]"></span>
                <Image
                  src={srcImg}
                  alt="iphone case"
                  width={840}
                  height={1620}
                  layout="reponsive"
                  className={'absolute top-0'}
                />
              </div>
            </>
          )}
          {srcImg && !srcVideo && (
            <div>
              <span className="inline-block pt-[192%]"></span>
              <Image
                src={srcImg}
                alt={srcImg}
                width={840}
                height={1620}
                layout="reponsive"
                className={'absolute top-0'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
