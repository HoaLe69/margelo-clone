'use client'
import { useContext, useRef } from 'react'
import { ScrollContext } from './scroll-observer'

const opacityOfBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress <= 1) return 1
  return 0.2
}
const Achievements = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  let progress = 0
  const numOfPages = 3

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(clientHeight, scrollY - offsetTop + halfH) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight flex items-center justify-center">
        <div style={{ lineHeight: '1.15' }}>
          <span
            style={{ opacity: opacityOfBlock(progress, 0) }}
            className="inline-block"
          >
            We know our tools inside out.
          </span>
          <br />
          <span
            style={{ opacity: opacityOfBlock(progress, 1) }}
            className="inline-block"
          >
            Out team has contributed 317 commits to React Native core, powering
            thousands of apps workdwide.
          </span>
          <br />
          <span
            style={{ opacity: opacityOfBlock(progress, 2) }}
            className="inline-block"
          >
            We&apos;re maintaining some of the most popular open-source project,
            with over 67 milion downloads.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Achievements
