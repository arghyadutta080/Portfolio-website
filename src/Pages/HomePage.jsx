import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Home/HeroSection'
import UpperBox from '../Styles/LandingSection/UpperBox'
import TechStacks from '../Components/Home/TechStacks'
import RightBox from '../Styles/LandingSection/RightBox'
import About from '../Components/Home/About'
import LeftCircle from '../Styles/AboutSection/LeftCircle'
import Experience from '../Components/Home/Experience'
import Project from '../Components/Home/Projects/Project'
import Contact from '../Components/Home/Contact'

const HomePage = () => {
    return (
        <div className=''>
            <Navbar />
            <HeroSection />
            <TechStacks/>
            <About />
            <Experience />
            <Project />
            <Contact />
            
            <UpperBox /> 
            <RightBox /> 
            {/* <LeftCircle /> */}
        </div>
    )
}

export default HomePage
