import React, { useState } from 'react'
import { BsFillSendFill, BsGithub, BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'
import { RiMailSendFill } from 'react-icons/ri'
import { toast } from 'react-hot-toast'
import { BsCheckCircleFill } from 'react-icons/bs'
import { IoMdCloseCircle } from 'react-icons/io'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactDetails({ ...contactDetails, [name]: value });
    }

    const templateParams = {
        from_name: contactDetails.name,
        message: contactDetails.message,
        reply_to: contactDetails.email,
        user_email: contactDetails.email,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactDetails);

        if (contactDetails.name === "" || contactDetails.email === "" || contactDetails.message === "") {
            toast.custom((t) => (
                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-[17rem] w-full bg-[#EAF6FF] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                    <div className="flex-1 w-0 py-4 px-1">
                        <div className="flex flex-row justify-evenly items-center">
                            <IoMdCloseCircle className='' size={27} color='#FF0000' />
                            <p className=' font-medium text-[#020422] ' >Sorry, Message didn't send</p>
                        </div>
                    </div>
                </div>
            ))
            console.log(error)
        } else {
            emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            toast.custom((t) => (
                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-[17rem] w-full bg-[#EAF6FF] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                    <div className="flex-1 w-0 py-4 px-1">
                        <div className="flex flex-row justify-evenly items-center">
                            <BsCheckCircleFill size={27} color='#38D502' />
                            <p className=' font-medium text-[#020422] '>Message sent successfully!</p>
                        </div>
                    </div>
                </div>
            ))
        }
    }


    return (
        <div className=" z-10 relative px-4 border-t border-transparent md:mt-7 lg:mt-16 lg:pb-14 md:pb-10 pb-5 md:px-48" id='contact'>
            <div className=" mx-auto max-w-9xl py-5 md:pt-0">
                <h1 className=' text-white mt-12 md:mt-8 lg:mt-5 lg:py-2 flex flex-col justify-start md:space-y-4 space-y-2 '>
                    <p className=' text-2xl lg:text-3xl md:text-2xl font-medium flex flex-row items-center justify-center md:justify-start md:space-x-4 space-x-1'><p>REACH OUT TO ME!</p> <BsFillSendFill className=' lg:h-7 lg:w-7 md:h-6 md:w-6' color='white' /></p>
                    <p className=' text-xl lg:text-2xl md:text-xl font-normal w-auto text-center md:text-left'>Collaborate on a project or just want to say Hi? My Inbox is open for all</p>
                </h1>
                <div className="z-10 relative overflow-hidden sm:rounded-0 sm:px-0 md:pt-4 flex flex-col lg:flex-row lg:justify-between items-center lg:pt-0 ">
                    <form onSubmit={handleSubmit}
                        className="mx-7 md:mx-auto lg:mx-0 mt-7 lg:mt-9 max-w-lg text-center lg:flex-auto lg:py-5 lg:text-left bg-[#1f2267] px-8 rounded-xl">
                        <div className="my-4 lg:mt-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-white">
                                    Your Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={contactDetails.name}
                                        onChange={handleChange}
                                        id="name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-lg border border-gray-600 p-1.5 text-white shadow-sm sm:text-sm sm:leading-6 bg-[#313491]"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">
                                    Your Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        value={contactDetails.email}
                                        onChange={handleChange}
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-lg border border-gray-600 p-1.5 text-white shadow-sm sm:text-sm sm:leading-6 bg-[#313491]"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="message" className="block text-lg font-medium leading-6 text-white">
                                    Write your message here
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={contactDetails.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="block w-full rounded-lg border border-gray-600 p-1.5 text-white shadow-sm sm:text-sm sm:leading-6 bg-[#313491]"

                                    />
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-row justify-center mt-7 mb-5 md:mt-7 md:mb-2'>
                            <button type='submit' className=' text-white text-lg font-medium bg-[#703FEA] py-2 px-5 rounded-xl flex flex-row  items-center space-x-2'>
                                <p>Send</p>
                                <RiMailSendFill size={25} color='white' />
                            </button>
                        </div>
                    </form>
                    <div className="relative mt-9 right-0 lg:mt-5 lg:mb-5 py-3 md:mb-12 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-normal tracking-tight text-white lg:text-2xl lg:pb-5 pb-3 flex flex-row items-center">
                            <p>Full stack developer | Student | Explorer</p>
                        </h2>
                        <h2 className="text-lg font-normal tracking-tight text-white lg:text-2xl lg:pb-8 pb-5 flex flex-row items-center">
                            <p>Kolkata, West Bengal, India</p>
                        </h2>
                        <div className=' flex flex-row justify-between items-center space-x-8'>
                            <a href="https://github.com/arghyadutta080" target='_blank' rel="noreferrer" className=' bg-black rounded-full'>
                                <BsGithub color='white' size={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/arghya-dutta-developer/" target='_blank' rel="noreferrer" className=' rounded-lg border-2 border-[#1D55EA]'>
                                <BsLinkedin color='#1D55EA' size={35} className='bg-white rounded-md' />
                            </a>
                            <a href="https://twitter.com/Arghya_Dutta08" target='_blank' rel="noreferrer" className=''>
                                <BsTwitter color='#00AEF0' size={35} />
                            </a>
                            <a href="https://www.facebook.com/arghya.dutta.9404" target='_blank' rel="noreferrer" className='bg-white rounded-full border-2 border-[#034BFF]'>
                                <BsFacebook color='#034BFF' size={35} className='' />
                            </a>
                            <a href="https://www.instagram.com/_arghya_dutta_/" target='_blank' rel="noreferrer" className=' bg-[#FF03E8] rounded-xl border-4 border-[#FF03E8]'>
                                <BsInstagram color='white' size={31} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
