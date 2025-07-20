import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const FAQs = () => {
  return (
    <div id="faq" className="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32 font-display">
            <h2 className="text-5xl sm:font-semibold mb-14 lg:text-6xl dark:text-white">FAQs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="cursor-pointer flex justify-between items-center" aria-controls="faq-1">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-1" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
                <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="flex justify-between items-center" aria-controls="faq-2">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-2" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="cursor-pointer flex justify-between items-center" aria-controls="faq-3">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-3" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
                <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="flex justify-between items-center" aria-controls="faq-4">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-4" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="cursor-pointer flex justify-between items-center" aria-controls="faq-5">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-5" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
                <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6 dark:bg-gray-600">
                    <div className="flex justify-between items-center" aria-controls="faq-6">
                        <p className="font-semibold text-lg dark:text-white">Is ToDesktop For Me?</p>
                        <IoIosArrowDown className='text-2xl text-gray-500 dark:text-white'/>
                    </div>
                    <div id="faq-6" className="hidden text-lg font-light mt-6 dark:text-white">
                        <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FAQs
