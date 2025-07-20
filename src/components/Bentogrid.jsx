import React from 'react'

const Bentogrid = () => {
  return (
    <div id="bento-grid" className="px-6 pb-32 pt-5 flex flex-col sm:items-center sm:text-center sm:pt-12 lg:px-32">
        <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal dark:text-white">ToDesktop handles the details</h2>
            <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3 grid-auto-rows:96px">
                <div className='row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src="./assets/asset 34.png" alt=""/>
                    </div>
                </div>
                <div className='row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Auto Updates</h3>
                        <p class="text-lg text-center font-light dark:text-black">We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src="./assets/asset 35.png" alt=""/>
                    </div>
                </div>
                <div className='row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Plugins</h3>
                        <img src="./assets/asset 36.png" alt=""/>
                    </div>
                </div>
                <div className='row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Access to Native APIs</h3>
                        <p class="text-lg text-center font-light dark:text-black">ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
                        <img src="./assets/asset 37.png" alt=""/>
                    </div>
                </div>
                <div className='row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Customizable look and feel</h3>
                        <img src="./assets/asset 39.png" alt=""/>
                    </div>
                </div>
                <div className='row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200'>
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                        <h3 className="text-2xl">Native Installers</h3>
                        <p class="text-lg text-center font-light dark:text-black">We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
                        <img src="./assets/asset 40.png" alt=""/>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Bentogrid
