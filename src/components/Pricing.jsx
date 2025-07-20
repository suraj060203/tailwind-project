import React from 'react'
import { RxCross2, RxCheck } from "react-icons/rx";

const Pricing = () => {
  return (
        <div id="pricing" className="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
            <h2 className="text-5xl sm:font-semibold mb-14 lg:text-7xl dark:text-white">Choose a plan that fits your needs</h2>
            <div className="flex flex-col font-display lg:flex-row mt-6 gap-6">

                {/* Free card */}
                <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 border-black-50 lg:bg-slate-50 font-display">
                    <h3 className="text-4xl font-semibold">Free</h3>
                    <p className="text-lg font-light text-gray-500">For personal use or testing your app before deploying to customers.</p>
                    <p className="uppercase font-semibold text-gray-500">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Run App Locally</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCross2 className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">No Public Distribution</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCross2 className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">No Native Installers</span>
                        </li>
                    </ul>
                    <button className="border border-gray-300 px-8 py-3 text-primary rounded-lg hover:border-gray-400 font-display font-medium">
                        Read Docs
                    </button>
                </div>

                {/* Essential card */}
                <div class="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 border-black-50 lg:bg-slate-50 font-display">
                    <h3 className="text-4xl font-semibold">Essential</h3>
                    <p className="text-lg font-light text-gray-500">For simple desktop apps.</p>
                    <p className="text-lg font-light"><span class="text-2xl font-semibold">$100</span>/month</p>
                    <p className="uppercase font-semibold text-gray-500">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Windows, Mac & Linux</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Automatic Updates</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Native Installers</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Email/chat support</span>
                        </li>
                    </ul>
                    <button className="border border-gray-300 px-8 py-3 text-primary rounded-lg hover:border-gray-400 font-display font-medium">
                        Read Docs
                    </button>
                </div>

                {/* Professional card */}
                <div className="border flex-1 relative rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 border-black-50 lg:bg-slate-50 font-display">
                    <p className="text-blue-700 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-display font-semibold absolute top-0 right-8 -translate-y-1/2">Most Popular</p>
                    <h3 className="text-4xl font-semibold">Professional</h3>
                    <p className="text-lg font-light text-gray-500">For sophisticated desktop apps.</p>
                    <p className="text-lg font-light"><span class="text-2xl font-semibold">$240</span>/month</p>
                    <p className="uppercase font-semibold text-gray-500">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Branded Download Links</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Analytics</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Access to Plugins</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <RxCheck className='text-gray-500 text-2xl'/>
                            <span className="text-lg font-light text-gray-700">Access to Restricted API</span>
                        </li>
                    </ul>
                    <button className="px-8 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 font-display font-medium">
                        Read Docs
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Pricing
