import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  return (
      <TypeAnimation
          sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Arghya Dutta',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am a Full Stack Developer',
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
