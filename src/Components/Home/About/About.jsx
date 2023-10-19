import React from 'react'
import RightCircle from '../../../Styles/AboutSection/RightCircle';
import Section_1 from './Section_1';
import Section_2 from './Section_2';

const About = () => {

    return (
        <div className=" z-10 relative px-4 md:px-0 border-t border-transparent md:mt-12" id='about'>
            {/* Section-1 */}
            <Section_1 />
            {/* section-2 */}
            <Section_2 />
            <RightCircle />
        </div>
    );
}

export default About
