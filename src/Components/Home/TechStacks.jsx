import React from 'react'
import LeftCircle from '../../Styles/AboutSection/LeftCircle';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const TechStacks = () => {

    const techStacks = ["vscode", "c", "cpp", "python", "html", "css", "javascript", "react", "redux", "bootstrap", "tailwind", "nodejs", "express", "django", "mongodb", "firebase", "replit", "git", "github", "netlify", "vercel", "postman"]

    return (
        <div className=" px-5 lg:px-56 md:px-48 pb-10 pt-12 lg:pt-7 flex flex-col z-10 relative ">
            <h1 className=' z-10 text-white text-2xl lg:text-3xl font-medium m-auto lg:m-0'>Technologies I am familiar with ...</h1>
            <div className=' z-10 bg-[#191B54] flex justify-around flex-wrap lg:pl-14 pl-10 lg:py-4 py-3 rounded-3xl mt-5'>
                <AliceCarousel
                    autoPlay
                    autoPlayInterval={800}
                    infinite
                    items={techStacks.length}
                    disableButtonsControls
                    disableDotsControls
                    mouseTracking
                    itemsInSlide={8}
                    responsive={{
                        // copilot complete these sequences
                        0: { items: 1 },
                        170: { items: 2 },
                        350: { items: 3 },
                        550: { items: 4 },
                        750: { items: 5 },
                        950: { items: 6 },
                        1150: { items: 7 },
                        1350: { items: 8 },
                    }} >
                    {
                        techStacks.map((skill, index) => {
                            return (
                                <div key={index} className='mx-2' >
                                    <img src={`https://skillicons.dev/icons?i=${skill}`} alt={`_${skill}`} className=' h-10 lg:h-12' />
                                </div>

                            )
                        })
                    }
                </AliceCarousel>
            </div>
            <LeftCircle />
        </div>
    )
}

export default TechStacks
