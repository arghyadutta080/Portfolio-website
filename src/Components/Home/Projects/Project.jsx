import React, { useEffect, useState } from 'react'
import { Projects } from './ProjectData'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'
import '../../../App.css'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Project = () => {

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
        <div className='flex flex-col items-center md:px-32 lg:px-40 z-20 relative border-transparent' id='project' >
            <h1 className=' text-white mt-16 md:mt-14 lg:mt-5 lg:py-2 flex flex-col justify-center space-y-1'>
                <p className='mx-auto text-xl lg:text-2xl md:text-2xl font-normal'>PROJECTS</p>
                <p className='mx-auto text-3xl lg:text-5xl md:text-4xl font-medium md:w-2/3 w-auto text-center'>Some of my hard work is showcased in ...</p>
            </h1>
            <div className=' flex flex-row justify-around flex-wrap w-full mt-3 md:my-5 z-10 relative' ref={ref}>
                {
                    Projects.map((project, index) => {
                        return (
                            <motion.div key={index} className=' w-[80%] lg:w-[48%] h-60 text-white bg-project flex flex-col justify-between rounded-xl my-3 md:my-5 p-5 '
                            initial={{ opacity: 0, x: `${(index + 1) % 2 === 0 ? "+10%" : "-20%"}` }}
                            animate={startAnimation && { opacity: 1, x: 0 }}
                            transition={{ duration: 1.0, ease: "easeOut" }}
                            >
                                <div className=' flex flex-row justify-between'>
                                    <p className=' text-2xl md:text-3xl font-medium'>${project.title}</p>
                                    <div className=' flex flex-row space-x-5'>
                                        <a href={project.source} target='_blank' rel="noreferrer">
                                            <BsGithub className=' h-7 w-7 md:h-8 md:w-8 hover:scale-125' />
                                        </a>
                                        <a href={project.visit} target='_blank' rel="noreferrer">
                                            <BsGlobe2 className={` h-7 w-7 md:h-8 md:w-8 ${project.visit === "" && "hidden"} hover:scale-125`} />
                                        </a>
                                    </div>
                                </div>
                                <div className=' text-sm md:text-lg font-medium'>
                                    {project.description}
                                </div>
                                <div className=' flex flex-row justify-start space-x-2 lg:space-x-8'>
                                    {
                                        project.tags.map((tech, index) => {
                                            return (
                                                <div key={index} className='' >
                                                    <img src={`https://skillicons.dev/icons?i=${tech}`} alt={`_${tech}`} className=' h-8 lg:h-10' />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Project
