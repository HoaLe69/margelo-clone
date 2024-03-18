'use client'
import useAnimationFrame from '@/lib/use-animation-frame'
import Image from 'next/image'
import { useCallback, useRef, useContext } from 'react'
import { ObserveViewContext } from '@/lib/observe-view-size'

const SliderContainer = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)
  const refScrollX = useRef<number>(0)
  const { windowWidth } = useContext(ObserveViewContext)
  const enableAnimation = windowWidth <= 2236

  useAnimationFrame(
    enableAnimation,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent
      if (elContainer && elContent) {
        refScrollX.current += 1
        elContainer.scrollLeft = refScrollX.current
        if (elContent.clientWidth <= elContainer.scrollLeft) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <div
      ref={refContainer}
      className={`slider__container whitespace-nowrap pointer-events-none overflow-x-hidden max-w-full ${className}`}
    >
      <div
        ref={refContent}
        className="slider__content inline-flex items-center"
      >
        {children}
      </div>

      <div
        style={{ display: enableAnimation ? 'inline-flex' : 'none' }}
        className="slider__content inline-flex items-center"
      >
        {children}
      </div>
    </div>
  )
}

export default SliderContainer
interface Props {
  name: string
  width: number
}
export const SliderItem: React.FC<Props> = ({ name, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center mx-4"
      style={{ width }}
    >
      <Image
        src={`/assets/trustby/${name}.webp`}
        alt={name}
        width={150}
        height={80}
      />
    </div>
  )
}
