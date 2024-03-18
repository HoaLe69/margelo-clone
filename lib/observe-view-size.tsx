'use client'
import React, { useState, createContext, useEffect, useCallback } from 'react'

type IObserveViewContext = {
  windowWidth: number
}
export const ObserveViewContext = createContext<IObserveViewContext>({
  windowWidth: window.innerWidth
})
const ObserveViewportSize = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    if (typeof window != 'undefined') {
      window.addEventListener('resize', handleResize, { passive: true })
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  return (
    <ObserveViewContext.Provider value={{ windowWidth }}>
      {children}
    </ObserveViewContext.Provider>
  )
}

export default ObserveViewportSize
