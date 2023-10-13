import React from 'react'
import { Chrono } from "react-chrono";
import rcctechz from '../../assets/Images/rcctechz.png'
import gdsc from '../../assets/Images/gdsc.png'

const Experience = () => {

    const experiences = [
        {
            title: "July 2023 - Present",
            cardTitle: "Google Developer Student Clubs (GDSC) - RCCIIT",
            url: "https://gdsc.community.dev/rcc-institute-of-information-technology-kolkata/",
            cardSubtitle: "GDCS Lead",
            cardDetailedText: "Currently I am leading the GDSC - RCCIIT Chapter. I am responsible for the overall functioning of the club and also for the planning and execution of various events and workshops. ",
            media: {
                type: "IMAGE",
                source: {
                    url: gdsc,
                }
            }
        },
        {
            title: "March 2022 - Sept 2023",
            cardTitle: "RCCTechz - The official coding club of RCCIIT",
            url: "https://rcctechz.vercel.app/",
            cardSubtitle: "Web Development Domain Lead",
            cardDetailedText: "I was the Web Development Domain Lead of RCCTechz. I was responsible for the development and maintainance of the official website of RCCTechz.",
            media: {
                type: "IMAGE",
                source: {
                    url: rcctechz,
                }
            }
        }
    ]

    return (
        <div className=' flex flex-col items-center md:px-32 lg:px-40 border-transparent' id='experience'>
            <h1 className=' text-white text-4xl lg:text-5xl md:text-4xl font-medium lg:mt-10 lg:py-5 flex flex-row justify-center'>
                <p className='mx-auto pb-6'>My Experiences ... </p>
            </h1>
            <div className=' w-full'>
                <Chrono mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: '#AE00FF',
                        secondary: 'white',
                        cardBgColor: '#5351BDE5',
                        titleColor: 'white',
                        titleColorActive: 'white',
                    }}>
                    {
                        experiences.map((experience, index) => {
                            return (
                                <div key={index} className='  w-full h-full flex flex-row justify-between flex-wrap'>
                                    <div className=' h-16 '>
                                        <img src={experience.media.source.url} alt="" className=' rounded-full h-full w-full pb-4 lg:py-0' />
                                    </div>
                                    <div className=' max-w-[21rem] space-y-4'>
                                        <h1 className=' text-white text-lg font-medium'>{experience.cardTitle}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.cardSubtitle}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.title}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.cardDetailedText}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Chrono>
            </div>
        </div>

    )
}

export default Experience
