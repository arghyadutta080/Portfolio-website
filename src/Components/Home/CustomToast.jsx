import React from 'react'
import { toast } from 'react-hot-toast'
import { BsCheckCircleFill } from 'react-icons/bs'
import { IoMdCloseCircle } from 'react-icons/io'

export const customToast = (status) => {
    return (
        toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-[17rem] w-full bg-[#EAF6FF] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                <div className="flex-1 w-0 py-4 px-1">
                    {
                        status ?
                            <div className="flex flex-row justify-evenly items-center">
                                <BsCheckCircleFill size={27} color='#38D502' />
                                <p className=' font-medium text-[#020422] '>Message sent successfully!</p>
                            </div>
                            :
                            <div className="flex flex-row justify-evenly items-center">
                                <IoMdCloseCircle className='' size={27} color='#FF0000' />
                                <p className=' font-medium text-[#020422] ' >Sorry, your message is not sent</p>
                            </div>
                    }
                </div>
            </div>
        ))
    )
}

