import React from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { FaWandMagicSparkles, FaDownload } from "react-icons/fa6";
import { LuInfinity } from "react-icons/lu";

const Testimonials = () => {
  return (
    <div id="testimonials" className="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
            <h2 className="text-5xl sm:font-semibold mb-14 lg:text-7xl dark:text-white">Customer stories</h2>

            {/* Single review */}
            <div className='rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100'>
                <div className="rounded-xl border flex flex-col lg:flex-row items-end bg-slate-50 hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                <div className="flex flex-col gap-12 p-8">
                    <div className="h-4 w-fit flex gap-2 items-center text-center">
                        <img src="./assets/asset 25.png" alt="" className='h-14 w-14'/>
                        <span className='text-2xl font-semibold'>ClickUp</span>
                    </div>
                    <h3 className="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    <div id="tag-container" className="flex gap-3 flex-wrap">
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Chromeless UI</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Native spellcheck</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Task time in menubar</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Notification count in the dock</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Global hotkey to create task</span>
                        </div>
                    </div>
                    <p className="text-lg font-light text-gray-500">“ToDesktop provided us with a <span className="text-gray-800">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span class="text-gray-800">new and improved features</span> to our customers within days.”</p>
                    <div id="user-card" class="flex gap-4">
                        <div className="w-12">
                            <img src="./assets/asset 44.jpeg" className="rounded-full" alt=""/>
                        </div>
                        <div className="flex flex-col">
                            <h3>Zeb Evans</h3>
                            <p className="text-gray-500">Founder & CEO, <a href="/#" className="anchor-hover">ClickUp</a> </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="./assets/asset 46.png" className="pl-12" alt=""/>
                </div>
                </div>
            </div>

            {/* Grid review */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
                {/*grid review 1  */}
                <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 group ">
                    <div className="rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6 dark:text-black">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-200 flex items-center justify-center rounded-full">
                                <IoCodeSlash className='text-2xl text-purple-500'/>
                            </div>
                            <h3 className="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p className="text-lg font-light font-display">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div className="flex gap-4">
                            <div className="flex">
                                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden ">
                                    <img src="./assets/asset 44.jpeg" className="min-w-16 min-h-16" alt=""/>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden ">
                                    <img src="./assets/asset 46.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="/#" className="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>  
                    </div>
                </div>

                {/* grid review 2 */}
                <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 group ">
                    <div className="dark:text-black rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-pink-200 flex items-center justify-center rounded-full">
                                <FaWandMagicSparkles className='text-2xl text-pink-500'/>
                            </div>
                            <h3 className="text-2xl font-semibold">Clean, less cluttered UI</h3>
                        </div>
                        <p className="text-lg font-light font-display">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div className="flex gap-4">
                            <div className="flex">
                                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 44.jpeg" className="min-w-16 min-h-16" alt=""/>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 46.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="/#" className="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>  
                    </div>
                    
                </div>

                {/* grid review 3 */}
                <div className="rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 group">
                    <div className="dark:text-black rounded-2xl p-6 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                                <LuInfinity className='text-2xl text-yellow-500'/>
                            </div>
                            <h3 className="text-2xl font-semibold">Native APIs</h3>
                        </div>
                        <p className="text-lg font-light font-display">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div className="flex gap-4">
                            <div className="flex">
                                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 44.jpeg" className="min-w-16 min-h-16" alt=""/>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                    <img src="./assets/asset 46.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3>Rick Pastoor</h3>
                                <a href="/#" className="anchor-hover w-fit text-gray-500">Rise</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* promotion black background */}
            <div className="rounded-2xl flex flex-col bg-black lg:flex-row mt-12 pt-2 lg:pt-4">
                <div className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
                    <span className="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
                    <h2 className="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
                    <p className="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                    <button className="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                        <FaDownload className='text-xl'/>
                        <span className='font-display'>Download ToDestop Builder</span>
                    </button>
                    <p className="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>
                <div className="lg:w-1/2">
                    <img src="./assets/asset 47.png" className="pl-12" alt=""/>
                </div>
            </div>
        </div>
  )
}

export default Testimonials
