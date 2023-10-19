import React from 'react'
import Ellipse from '../../assets/Images/Ellipse_bottom.png'

const UpperBox = () => {
    return (
        <div className='  z-0 absolute bottom-0 right-0 w-full'>
            <img src={Ellipse} alt="" className='lg:h-[70rem] lg:w-[95rem] h-[30rem] w-full' />
        </div>
    )
}

export default UpperBox