'use client'
import { createContext, useCallback, useEffect, useState } from 'react'

type IScrollContext = {
  scrollY: number
}
export const ScrollContext = createContext<IScrollContext>({ scrollY: 0 })

const ScrollObserver = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState<number>(0)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}
export default ScrollObserver
