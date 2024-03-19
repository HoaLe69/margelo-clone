import React, { createContext, useState } from 'react'
type IReviewContext = {
  indexActive: number
  setIndexActive: React.Dispatch<React.SetStateAction<number>>
}

export const ReviewContext = createContext<IReviewContext>({
  indexActive: 0,
  setIndexActive: () => {}
})

const TestimonialWrap = ({ children }: { children: React.ReactNode }) => {
  const [indexActive, setIndexActive] = useState<number>(0)
  return (
    <ReviewContext.Provider value={{ indexActive, setIndexActive }}>
      {children}
    </ReviewContext.Provider>
  )
}

export default TestimonialWrap
