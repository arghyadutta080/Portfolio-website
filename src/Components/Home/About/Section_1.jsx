import React, { useState, useEffect } from 'react'
import College from '../../../assets/Images/College.jpeg'
import { IoBookSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Section_1 = () => {

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
        <div className=" mx-auto max-w-9xl mt-10 md:mt-8" ref={ref}>
            <h1 className=' text-white text-4xl lg:text-5xl md:text-4xl font-medium lg:m-0 lg:pb-4 flex flex-row justify-center'>
                <p className='mx-auto'>About me ... </p>
            </h1>
            <div className="z-10 relative overflow-hidden sm:rounded-0 sm:px-16 md:pt-4 flex flex-col-reverse lg:flex-row lg:justify-evenly lg:pt-0">
                <motion.div className=" relative mt-6 right-0 lg:mt-16 lg:mb-10 md:mb-12 flex flex-row items-center justify-center"
                    initial={{ opacity: 0, x: "-20%" }}
                    animate={startAnimation && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        className="relative max-w-none rounded-2xl h-60 lg:h-80"
                        src={College}
                        alt="App screenshot"
                    />
                </motion.div>
                <motion.div className=" mx-auto mt-10 lg:mt-0 max-w-xl flex flex-col justify-center items-center lg:items-end lg:mx-0 lg:flex-auto lg:py-16 lg:text-left"
                    initial={{ opacity: 0, x: "+20%" }}
                    animate={startAnimation && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-xl font-semibold tracking-tight text-white lg:text-3xl md:text-2xl pb-2 lg:pb-5 flex flex-row items-center">
                        <p>EDUCATION</p><IoBookSharp className='text-white inline-block pl-3' size={50} />
                    </h2>
                    <p className="mt-2 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                        RCC Institute of Information Technology, Kolkata
                    </p>
                    <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                        Bachelor in Technology in Computer Science and Engineering
                    </p>
                    <p className="mt-2 lg:mt-1 text-lg lg:text-xl leading-8 text-white font-medium lg:font-semibold text-center">
                        October 2021 - Present
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Section_1
