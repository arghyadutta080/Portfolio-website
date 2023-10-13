import React from 'react'
import Ellipse from '../../assets/Images/Ellipse.png'

const UpperBox = () => {
  return (
    <div className='  z-0 absolute top-0 left-0'>
          <img src={Ellipse} alt="" className='lg:h-[50rem] lg:w-[75rem] h-[30rem] w-[60rem]'/>
    </div>
  )
}

export default UpperBox
