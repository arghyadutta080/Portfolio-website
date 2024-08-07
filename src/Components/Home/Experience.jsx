import React, { useEffect, useState } from 'react'
import RightBox from '../../Styles/CareerSection/RightBox';
import LeftBox from '../../Styles/CareerSection/LeftBox';
import rcctechz from '../../assets/Images/rcctechz.png'
import gdsc from '../../assets/Images/gdsc.png'
import noobcode from '../../assets/Images/noobcode.png'
import ekko from '../../assets/Images/ekko.jpg'
import fibo from '../../assets/Images/fibo.jpg'
import { Chrono } from "react-chrono";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import '../../App.css'

const Experience = () => {

    const experiences = [
        {
            title: "May 2024 - July 2024",
            cardTitle: "FIBO",
            url: "https://www.linkedin.com/company/ekko-network",
            cardSubtitle: "SDE Intern",
            cardDetailedText: "Handle the development and deployment of frontend of the product and focused on responsive UI development, integrating PWA functionality and state management.",
            media: {
                type: "IMAGE",
                source: {
                    url: fibo,
                }
            }
        },
        {
            title: "April 2024 - May 2024",
            cardTitle: "Ekko Network",
            url: "https://www.linkedin.com/company/ekko-network",
            cardSubtitle: "SDE Intern (Full-Stack)",
            cardDetailedText: "Handle the development of frontend & backend of product. Participate in code review, and research new tools and technologies to enhance development process.",
            media: {
                type: "IMAGE",
                source: {
                    url: ekko,
                }
            }
        },
        {
            title: "July 2023 - August 2024",
            cardTitle: "Google Developer Student Clubs (GDSC) - RCCIIT",
            url: "https://gdsc.community.dev/rcc-institute-of-information-technology-kolkata/",
            cardSubtitle: "GDSC Lead",
            cardDetailedText: "I am led the GDSC - RCCIIT Chapter. I was responsible for the overall functioning of the club and also for the planning and execution of various events and workshops. ",
            media: {
                type: "IMAGE",
                source: {
                    url: gdsc,
                }
            }
        },
        {
            title: "February 2023 - July 2023",
            cardTitle: "NoobCode Community",
            url: "https://noobcode-website.vercel.app/",
            cardSubtitle: "Community Strategy advisor",
            cardDetailedText: "I served the Community as a Strategy advisor. I was responsible for thinking about different strategic actions during the planning and execution of various events for community growth.",
            media: {
                type: "IMAGE",
                source: {
                    url: noobcode,
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

    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div className=' flex flex-col items-center md:px-32 lg:px-40 border-transparent z-10 relative lg:mb-20 lg:mt-8' id='experience'>
            <h1 className=' text-white text-4xl lg:text-5xl md:text-4xl font-medium mt-14 lg:mt-2 lg:py-5 flex flex-row justify-center'>
                <p className='mx-auto pb-6'>My Experiences ... </p>
            </h1>
            <div className=' w-full z-10 relative' ref={ref}>
                <Chrono mode="VERTICAL_ALTERNATING" borderLessCards={true} allowDynamicUpdate = {true}
                    theme={{
                        primary: '#AE00FF',
                        secondary: 'white',
                        cardBgColor: 'transparent',
                        titleColor: 'white',
                        titleColorActive: 'white',
                    }}>
                    {
                        experiences.map((experience, index) => {
                            return (
                                <motion.div key={index} className=' z-10 w-full h-full flex flex-row justify-evenly flex-wrap rounded-xl bg-experience py-4 px-3 md:px-1'
                                    initial={{ opacity: 0, x: `${(index + 1) % 2 === 0 ? "+20%" : "-20%"}` }}
                                    animate={startAnimation && { opacity: 1, x: 0 }}
                                    transition={{ duration: 1.0, ease: "easeOut" }}
                                >
                                    <a href={experience.url} target='_blank' className=' h-16 '>
                                        <img src={experience.media.source.url} alt="" className=' rounded-full h-full w-full pb-4 lg:py-0 hover:scale-75' />
                                    </a>
                                    <div className=' max-w-[21rem] space-y-4'>
                                        <h1 className=' text-white text-lg font-medium'>{experience.cardTitle}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.cardSubtitle}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.title}</h1>
                                        <h1 className=' text-white text-sm font-medium'>{experience.cardDetailedText}</h1>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </Chrono>
            </div>
            <RightBox />
            <LeftBox />
        </div>

    )
}

export default Experience
