import "./App.css";
import { FaArrowRight, FaFileCode, FaLaptopCode } from "react-icons/fa6";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaHandSparkles } from "react-icons/fa";
import CompaniesContainer from "./components/CompaniesContainer";
import Stepbystep1 from "./components/Stepbystep1";
import Bentogrid from "./components/Bentogrid";
import CompaniesFeatureLine from "./components/CompaniesFeatureLine";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="p-3 flex bg-white justify-between items-center">
        {/* Logo */}
        <a href="/#" className="flex gap-2 items-center flex-1">
          <img
            src="assets/asset 0.png"
            alt="Logo"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="text-lg font-display font-semibold ">ToDesktop</span>
        </a>

        <div className="gap-12 hidden lg:flex">
          <a href="/#" className="font-semibold  hover:text-primary">
            Pricing
          </a>
          <a href="/#" className="font-semibold  hover:text-primary">
            Docs
          </a>
          <a href="/#" className="font-semibold  hover:text-primary">
            Changelog
          </a>
          <a href="/#" className="font-semibold  hover:text-primary">
            Blogs
          </a>
          <a href="/#" className="font-semibold  hover:text-primary">
            Login
          </a>
        </div>

        <div className="lg:flex hidden flex-1 justify-end">
          <button className="flex gap-2 items-center border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-500">
            <img src="assets/asset 1.svg" alt="icon"></img>
            <span>Electron Developers</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Hamburger Menu Toggle */}
        <button className="lg:hidden mr-0 p-2" onClick={() => setIsOpen(true)}>
          <IoMdMenu />
        </button>
      </nav>
      {/* Fullscreen Menu overlay i.e Hamberger menu */}
      {isOpen && (
        <div className="fixed z-10 md:hidden inset-0 bg-white p-3">
          <div className="flex bg-white justify-between">
            {/* Logo */}
              <a href="/#" className="flex gap-2 items-center">
                <img
                  src="assets/asset 0.png"
                  alt="Logo"
                  className="object-cover max-w-12 max-h-12"
                />
                <span className="text-lg font-medium font-display ">ToDesktop</span>
              </a>
              <button
                className="p-2 md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose />
              </button>    
          </div>
          {/* Hambermenu items */}
          <div className="mt-6">
            <a href="/#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Pricing</a>
            <a href="/#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Docs</a>
            <a href="/#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Changelog</a>
            <a href="/#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Blogs</a>
            <a href="/#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Login</a>
          </div>
            {/* Custom separator */}
          <div className="h-[1px] bg-gray-300"></div>
          {/*  */}
          <button className=" mt-5 flex gap-2 items-center px-6 py-4 rounded-lg w-full hover:bg-gray-100">
            <img src="assets/asset 1.svg" alt="icon"></img>
            <span>Electron Developers</span>
          </button>
          
        </div>
      )}

      {/* Main body */}
      <main>
        {/* Hero section */}
        <div id="hero" className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
          <div id="hero-container" className="max-w-4xl mx-auto px-6 pb-32 pt-5 flex flex-col sm:items-center sm:text-center sm:pt-12">
            {/* Version text */}
            <div id="version-text" className="flex items-center my-6 gap-2 border border-yellow-200 hover:border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-[2px] transition group">
              <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                <p className="font-display font-medium text-yellow-600">v0.21.1:<span className="text-yellow-800"> Find-in-page bug fixes</span></p>
                <FaArrowRight className="text-yellow-600 group-hover:translate-x-1 transition duration-300"/>
            </div>

            {/* Hero features */}
            <div className="hidden sm:flex gap-8 my-6">
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <FaFileCode/>
                <p>Code optional</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <FaHandSparkles/>
                <p>Drag & drop builder</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <FaLaptopCode/>
                <p>Windows, Mac, Linux</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-7xl font-display font-semibold leading-snug sm:leading-normal mt-4">Web app to desktop app in minutes</h1>
            <p className="text-xl sm:text-2xl mt-4 sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

            <div id="buttons-container" className="mt-12 flex gap-4 flex-col sm:flex-row">
              <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:opacity-90">Download now</button>
              <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
            </div>
          </div>

          {/* Companies container */}
          <CompaniesContainer/>
        </div>

        {/* Step by step */}
         <Stepbystep1/>

        {/* Bento-grid */}
        <Bentogrid/>

        {/* Companies feature line */}
        <CompaniesFeatureLine/>

        {/* Testimonials */}
        <Testimonials/>

        {/* Pricing */}
        <Pricing/>

        {/* FAQ's */}
        <FAQs/>
      </main>
      <footer class="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32 font-display">
        <div class="rounded-lg border border-gray-100 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
            <a href="/#" class="font-light font-display">Documentation</a>
            <div class="flex gap-8 text-lg">
                <a href="/#" class="text-gray-600 hover:text-gray-900"><i class="fa-brands fa-twitter"></i></a>
                <a href="/#" class="text-gray-600 hover:text-gray-900"><i class="fa-brands fa-github"></i></a>
            </div>
            <a href="/#" id="brand" class="flex gap-2 items-center flex-1">
                <img class="object-cover max-w-12 max-h-12" src="./assets/asset 0.png" alt="Logo"/>
                <span class="text-lg font-medium font-display">ToDesktop</span>
            </a>
        </div>

        <div id="sub-footer" class="flex flex-col gap-6 items-center justify-center my-12">
            <div class="flex gap-2 items-center ">
                <img class="w-4 h-4" src="./assets/asset 48.svg" alt="Y-combinator"/>
                <p class="text-sm text-gray-600">A Y Combinator company.</p>
            </div>
            <p class="text-sm text-gray-400">© 2025 ToDesktop, Inc. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
