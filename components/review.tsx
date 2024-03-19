import { useCallback, useContext, useState } from 'react'
import { ReviewContext } from './testimonial-wrap'
type Props = {
  by: string
  children: string
  page: number
}
const Review: React.FC<Props> = ({ by, page, children }) => {
  const { indexActive, setIndexActive } = useContext(ReviewContext)
  const handleOnClick = useCallback((page: number) => {
    setIndexActive(page)
  }, [])
  return (
    <div
      onClick={() => handleOnClick(page)}
      style={{ opacity: indexActive === page ? '1' : '0.4' }}
      className=" flex flex-col transition-opacity duration-500 justify-center text-center px-5 md:px-10 lg:px-20"
    >
      <div className="text-xl md:text-2xl lg:leading-[3rem] tracking-tight">
        {children}
      </div>
      <div className="mt-6">— {by}</div>
    </div>
  )
}

export default Review
