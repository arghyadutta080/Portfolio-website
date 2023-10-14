import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import signature from '../assets/Images/signature_logo.png'
import '../App.css'


export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className=" ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-10 z-20 relative" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className=" p-1.5">
                        <img src={signature} alt="" className=' brightness-200 h-14' />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-9 w-9 text-white" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#about" className="text-2xl font-semibold leading-6 text-white">
                        About
                    </a>
                    <a href="#experience" className="text-2xl font-semibold leading-6 text-white">
                        Experience
                    </a>
                    <a href="#project" className="text-2xl font-semibold leading-6 text-white">
                        Projects
                    </a>
                    <a href="#" className="text-2xl font-semibold leading-6 text-white">
                        Contact
                    </a>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className=" inset-0" />
                <Dialog.Panel className="absolute bg-page inset-y-0 right-0 z-30 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div className="flex items-center justify-between">
                        <a href="#" className=" p-1.5">
                            <img src={signature} alt="" className=' brightness-200 h-10' />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root ">
                        <div className="-my-6 divide-y divide-gray-500/10 ">
                            <div className="space-y-6 pt-8">
                                <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white">
                                    About
                                </a>
                                <a href="#experience" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white">
                                    Experience
                                </a>
                                <a href="#project" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white">
                                    Projects
                                </a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-white">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}