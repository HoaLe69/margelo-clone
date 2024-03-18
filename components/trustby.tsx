'use client'
import React, { useContext } from 'react'
import Brands from './brands'
import { ObserveViewContext } from '@/lib/observe-view-size'

const TrustBy = () => {
  const { windowWidth } = useContext(ObserveViewContext)
  return (
    <section
      style={{ alignItems: `${windowWidth >= 2230 ? 'center' : 'unset'}` }}
      className="bg-white  min-h-screen flex flex-col  justify-between"
    >
      <div>
        <h3 className="text-xl mb-10 font-bold text-center">
          <span>trusted by the apps on your phone</span>
        </h3>
        <Brands />
      </div>
    </section>
  )
}

export default TrustBy
