import React from 'react';
import LandingPage from '../../Animations/LandingPage';
import myImg from '../../assets/Images/Arghya.jpeg'
import Resume from '../../assets/Docs/Resume.pdf'

const HeroSection = () => {
    const handleDownload = () => {
        window.open(Resume)
    }

    return (
        <div className=" z-10 relative">
            <div className="mx-auto max-w-9xl">
                <div className="relative overflow-hidden sm:rounded-0 sm:px-16 md:pt-4 flex flex-col-reverse lg:flex-row lg:justify-evenly lg:pt-0 ">
                    <div className=" mx-auto mt-10 lg:mt-0 max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-white lg:text-5xl md:text-5xl pb-2 lg:pb-5">
                            Hello Everyone!!
                        </h2>
                        <LandingPage />
                        <p className="mt-8 px-2 text-lg leading-8 text-white font-semibold">
                            This is my Portfolio website.
                        </p>
                        <p className=" text-lg px-2 leading-8 text-white font-semibold">
                            Let us take a walk through to know more about me.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a href="#contact" className="text-sm px-6 py-2 font-semibold leading-6 border-2 border-[#4155D9] bg-[#4155D9] text-white rounded-md hover:border-2 hover:border-gray-300 hover:text-[#4155D9] hover:bg-white">
                                Contact me
                            </a>
                            <button className="text-sm font-bold leading-6 text-white border-2 border-[#F4E9FF] px-6 py-2 rounded-md hover:border-gray-400 hover:text-gray-400"
                                onClick={handleDownload} >
                                My Resume
                            </button>
                        </div>
                    </div>
                    <div className="relative mt-6 right-0 lg:mt-8 lg:mb-8 md:mb-12 flex flex-row items-center justify-center">
                        <img
                            className="relative max-w-none rounded-full h-60 lg:h-80"
                            src={myImg}
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;