import React, { useState, useEffect } from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Section_2 = () => {

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
        <div className=" mx-auto max-w-9xl pt-5 md:pt-0" ref={ref}>
            <div className="z-10 relative overflow-hidden sm:rounded-0 sm:px-16 md:pt-4 flex flex-col lg:flex-row lg:justify-evenly lg:items-center lg:pt-0 ">
                <motion.div className=" mx-auto mt-7 lg:mt-0 max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-5 lg:text-left"
                    initial={{ opacity: 0, x: "-20%" }}
                    animate={startAnimation && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-xl font-semibold tracking-tight text-white lg:text-3xl md:text-2xl pb-2 lg:pb-3 flex flex-row items-center justify-center lg:justify-start">
                        <p>INTERESTS</p><FaLaptopCode className='text-white inline-block pl-3' size={55} />
                    </h2>
                    <p className="mt-3 text-base leading-8 text-white font-medium">
                        With a strong passion for technology and a keen interest in software development, I've been working as a web and app developer for last 2 years, building engaging and interactive websites, web-apps and mobile apps. I specialise in MERN, Next.js, FastAPI and Firebase-like technologies and have used these to create various applications.
                    </p>
                    <p className=" mt-4 text-base leading-8 text-white font-semibold">
                        I'm excited to continue exploring new technologies and developing my skills as a software developer, and I'm always looking for new challenges and opportunities to learn and grow in this field.
                    </p>
                </motion.div>
                <motion.div className="relative mt-2 right-0 lg:mt-5 lg:mb-5 py-3 md:mb-12 flex flex-row items-center justify-center"
                    initial={{ opacity: 0, x: "+20%" }}
                    animate={startAnimation && { opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        className="relative max-w-none rounded-xl h-60 lg:h-96"
                        src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif"
                        alt="App screenshot"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Section_2