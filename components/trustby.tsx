'use client'
import React, { useContext } from 'react'
import Brands from './brands'
import { ObserveViewContext } from '@/lib/observe-view-size'
import Testimonials from './testimonial'
import TestimonialWrap from './testimonial-wrap'

const TrustBy = () => {
  const { windowWidth } = useContext(ObserveViewContext)
  return (
    <section
      style={{ alignItems: `${windowWidth >= 2230 ? 'center' : 'unset'}` }}
      className="bg-white  min-h-screen flex flex-col  justify-center gap-16 md:gap-32"
    >
      <div className="flex-1"></div>
      <div>
        <h3 className="text-xl mb-10 font-bold text-center">
          <span>trusted by the apps on your phone</span>
        </h3>
        <Brands />
      </div>
      <div className="container mx-auto  lg:max-w-[70%] lg:px-10">
        <h3 className=" tracking-tight text-center text-3xl lg:text-4xl px-10 !leading-[3.5rem]">
          We believe in good communication and a fully transparent development
          process
        </h3>
      </div>
      <TestimonialWrap>
        <Testimonials />
      </TestimonialWrap>
    </section>
  )
}

export default TrustBy
