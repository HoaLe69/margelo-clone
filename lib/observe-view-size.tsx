'use client'
import React, { useState, createContext, useEffect, useCallback } from 'react'

type IObserveViewContext = {
  windowWidth: number
}
export const ObserveViewContext = createContext<IObserveViewContext>({
  windowWidth: 0
})
const ObserveViewportSize = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  return (
    <ObserveViewContext.Provider value={{ windowWidth }}>
      {children}
    </ObserveViewContext.Provider>
  )
}

export default ObserveViewportSize
