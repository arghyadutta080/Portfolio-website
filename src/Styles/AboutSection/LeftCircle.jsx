import React from 'react'
import Circle from '../../assets/Images/AboutCircle_1.png'

const LeftCircle = () => {
  return (
      <div className=' z-0 absolute lg:top-10 top-[26rem] left-0'>
          <img src={Circle} alt="" className=' lg:h-[65rem] lg:w-[47rem] h-[35rem]' />
      </div>
  )
}

export default LeftCircle
