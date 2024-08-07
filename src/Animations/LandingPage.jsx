import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  return (
      <TypeAnimation
          sequence={[
              'I am Arghya Dutta',
              1000, 
              'I am a Frontend Developer',
              1000, 
              'I am a Backend Developer',
              1000
          ]}
          wrapper="span"
          speed={50}
          className="text-3xl font-semibold tracking-tight text-white lg:text-5xl md:text-5xl"
          repeat={Infinity}
      />
  )
}

export default LandingPage
