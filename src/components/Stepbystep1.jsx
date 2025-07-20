import React, { useEffect, useRef } from 'react';
import { FaCheck } from "react-icons/fa6";

const Stepbystep1 = () => {
  const step3Ref = useRef(null);
  const rocketRef = useRef(null);

  useEffect(() => {
  const target = step3Ref.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && rocketRef.current) {
        rocketRef.current.classList.remove('animate-rocket');
        void rocketRef.current.offsetWidth; // restart animation
        rocketRef.current.classList.add('animate-rocket');
      }
    },
    { threshold: 0.6 }
  );

  if (target) {
    observer.observe(target);
  }

  return () => {
    if (target) observer.unobserve(target);
  };
}, []);

  return (
    <div id='steps' className='flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32'>
      <h2 className='text-5xl sm:font-semibold mb-14 dark:text-white'>How it works</h2>

      {/* Step 1 */}
      <div id='step1' className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
          <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 1</span>
          <h3 className='text-4xl dark:text-white'>Bootstrap straight from your web app</h3>
          <p className='text-lg font-mono'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
          <ul className='grid grid-cols-2 gap-2 font-mono'>
            {["Multiple windows", "Menubar/tray menus", "Offline support", "Customisable menus", "Launch on startup", "Tabs (Mac only)"].map((text, i) => (
              <li key={i} className='flex gap-4'>
                <FaCheck className='text-gray-500' />
                <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-12'>
          <img src='assets/asset 57.svg' alt='upload-icon' />
        </div>
      </div>

      {/* Step 2 */}
      <div id='step2' className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
          <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 2</span>
          <h3 className='text-4xl dark:text-white'>Add desktop code to customise your web app</h3>
          <p className='text-lg font-mono'>No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality.</p>
          <ul className='grid grid-cols-2 gap-2 font-mono'>
            {["Native notifications", "Global keyboard shortcuts", "Application menu", "Context menu", "Dock/Icon", "Isolated browser view", "File system access", "…plus more APIs in our docs"].map((text, i) => (
              <li key={i} className='flex gap-4'>
                <FaCheck className='text-gray-500' />
                <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-12'>
          <img src='assets/asset 57.svg' alt='upload-icon' />
        </div>
      </div>

      {/* Step 3 */}
      <div id='step3' ref={step3Ref} className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-1/2'>
          <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 3</span>
          <h3 className='text-4xl dark:text-white'>
            Publish <span ref={rocketRef} className='inline-block transition-transform' id='rocket'>🚀</span>
          </h3>
          <p className='text-lg font-mono'>One-click will publish your desktop app to your customers and give you a download link to put on your website.</p>
          <ul className='grid grid-cols-2 gap-2 font-mono'>
            {["Super-fast global CDN", "Download links on your domain", "Magic universal links", "Download analytics", "Manage version numbers", "Native installers for all platforms"].map((text, i) => (
              <li key={i} className='flex gap-4'>
                <FaCheck className='text-gray-500' />
                <a href='/#' className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-12'>
          <img src='assets/asset 57.svg' alt='upload-icon' />
        </div>
      </div>
    </div>
  );
};

export default Stepbystep1;
