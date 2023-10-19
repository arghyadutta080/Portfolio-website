import React from 'react'
import Circle from '../../assets/Images/UpperCircle.png'

const RightBox = () => {
  return (
      <div className='lg:h-[40rem] lg:w-[26rem] h-[24rem] w-[13rem] z-0 absolute bottom-32 right-0 hidden'>
          <img src={Circle} alt="" className='' />
      </div>
  )
}

export default RightBox
