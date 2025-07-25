import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Stepbystep = () => {
  return (
    <div id='steps' className=' flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32'>
      <h2 className='text-5xl sm:font-semibold mb-14'>How it works</h2>
      <div id='step1' className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
            <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 1</span>
            <h3 className='text-4xl'>Bootstrap straight from your web app</h3>
            <p className='text-lg font-mono'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
            <ul className='grid grid-cols-2 gap-2 font-mono'>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Multiple windows</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Menubar/tray menus</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Offline support</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Customisable menus</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Launch on startup</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Tabs (Mac only)</a>
                </li>  
            </ul>
        </div>
        <div className='pt-12'>
            <img src='assets/asset 57.svg' alt='upload-icon'></img>
        </div>
      </div>

      <div id='step2' className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
            <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 2</span>
            <h3 className='text-4xl'>Add desktop code to customise your web app</h3>
            <p className='text-lg font-mono'>No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality.</p>
            <ul className='grid grid-cols-2 gap-2 font-mono'>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Native notifications</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Global keyboard shortcuts</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Application menu</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Context menu</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Dock/Icon</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Isolated browser view</a>
                </li>  
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>File system access</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>…plus more APIs in our docs</a>
                </li>
            </ul>
        </div>
        <div className='pt-12'>
            <img src='assets/asset 57.svg' alt='upload-icon'></img>
        </div>
      </div>

      <div id='step3' className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
            <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 3</span>
            <h3 className='text-4xl'>Publish🚀 </h3>
            <p className='text-lg font-mono'>One-click will publish your desktop app to your customers and give you a download link to put on your website.</p>
            <ul className='grid grid-cols-2 gap-2 font-mono'>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Super-fast global CDN</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Download links on your domain</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Magic universal links</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Download analytics</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Manage version numbers</a>
                </li>
                <li className='flex gap-4'>
                    <FaCheck className='text-gray-500'/>
                    <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Native installers for all platforms</a>
                </li>  
            </ul>
        </div>
        <div className='pt-12'>
            <img src='assets/asset 57.svg' alt='upload-icon'></img>
        </div>
      </div>
    </div>
  )
}

export default Stepbystep
