import React from 'react'
import College from '../../assets/Images/College.jpeg'
import RightCircle from '../../Styles/AboutSection/RightCircle';
import RightBox from '../../Styles/LandingSection/RightBox';

const About = () => {
    return (
        <div className=" z-10 relative px-4 md:px-0 border-t border-transparent" id='about'>
            {/* Section-1 */}
            <div className=" mx-auto max-w-9xl mt-10 md:mt-20">
                <h1 className=' text-white text-4xl lg:text-5xl md:text-4xl font-medium lg:m-0 lg:pb-4 flex flex-row justify-center'>
                    <p className='mx-auto'>About me ... </p>
                </h1>
                <div className="z-10 relative overflow-hidden sm:rounded-0 sm:px-16 md:pt-4 flex flex-col-reverse lg:flex-row lg:justify-evenly lg:pt-0 ">
                    <div className=" relative mt-6 right-0 lg:mt-16 lg:mb-10 md:mb-12 flex flex-row items-center justify-center">
                        <img
                            className="relative max-w-none rounded-3xl h-60 lg:h-80"
                            src={College}
                            alt="App screenshot"
                        />
                    </div>
                    <div className=" mx-auto mt-10 lg:mt-0 max-w-xl flex flex-col justify-center items-center lg:items-end lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                        <h2 className="text-xl font-semibold tracking-tight text-white lg:text-3xl md:text-2xl pb-2 lg:pb-5">
                                EDUCATION
                        </h2>
                        <p className="mt-2 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                            RCC Institute of Information Technology, Kolkata
                        </p>
                        <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                            Batcher in Technology in Computer Science and Engineering
                        </p>
                        <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                            October 2021 - Present
                        </p>
                    </div>
                </div>
            </div>
            {/* section-2 */}
            <div className=" mx-auto max-w-9xl pt-5 md:pt-0">
                <div className="z-10 relative overflow-hidden sm:rounded-0 sm:px-16 md:pt-4 flex flex-col lg:flex-row lg:justify-evenly lg:items-center lg:pt-0 ">
                    <div className=" mx-auto mt-10 lg:mt-0 max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-5 lg:text-left">
                        <h2 className="text-xl font-semibold tracking-tight text-white lg:text-3xl md:text-2xl pb-2 lg:pb-3">
                            INTERESTRS
                        </h2>
                        <p className="mt-3 text-base leading-8 text-white font-medium">
                            With a strong passion for technology and a keen interest in software development, I've been working as a web and app developer since last year, building engaging and interactive websites, web-apps and mobile apps. I specialise in MERN and Django and have used these frameworks to create various applications.
                        </p>
                        <p className=" mt-4 text-base leading-8 text-white font-semibold">
                            I'm excited to continue exploring new technologies and developing my skills as a software developer, and I'm always looking for new challenges and opportunities to learn and grow in this field.
                        </p>
                    </div>
                    <div className="relative right-0 lg:mt-5 lg:mb-5 py-3 md:mb-12 flex flex-row items-center justify-center">
                        <img
                            className="relative max-w-none rounded-xl h-60 lg:h-96"
                            src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
            <RightCircle />
        </div>
    );
}

export default About
