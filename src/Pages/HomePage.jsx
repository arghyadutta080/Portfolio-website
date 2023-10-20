import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Home/HeroSection'
import TechStacks from '../Components/Home/TechStacks'
import About from '../Components/Home/About/About'
import Experience from '../Components/Home/Experience'
import Project from '../Components/Home/Projects/Project'
import Contact from '../Components/Home/Contact'
import UpperBox from '../Styles/LandingSection/UpperBox'
import RightBox from '../Styles/LandingSection/RightBox'
import { Toaster } from 'react-hot-toast'

const HomePage = () => {
    return (
        <div className=''>
            <Navbar />
            <HeroSection />
            <TechStacks />
            <About />
            <Experience />
            <Project />
            <Contact />

            <UpperBox />
            <RightBox />

            <Toaster />
        </div>
    )
}

export default HomePage
