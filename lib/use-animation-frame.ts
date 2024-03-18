import { useEffect, useCallback, useRef } from 'react'

const useAnimationFrame = (enableAnimation: boolean, callback: () => void) => {
  const animateId = useRef<number>(0)
  const animate = useCallback(() => {
    callback()
    animateId.current = requestAnimationFrame(animate)
  }, [callback])
  useEffect(() => {
    if (enableAnimation) requestAnimationFrame(animate)
    return () => {
      if (enableAnimation) cancelAnimationFrame(animateId.current)
    }
  }, [animate, enableAnimation])
}
export default useAnimationFrame
