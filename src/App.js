import "./App.css";
import { FaArrowRight } from "react-icons/fa6";
import HambergerMenu from "./components/HambergerMenu";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="p-3 flex bg-white justify-between items-center">
        {/* Logo */}
        <a href="/#" className="flex gap-2 items-center">
          <img
            src="assets/asset 0.png"
            alt="Logo"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="text-lg font-medium font-display ">ToDesktop</span>
        </a>

        <div className="flex gap-12 hidden lg:flex">
          <a href="/#" className="font-medium hover:text-primary">
            Pricing
          </a>
          <a href="/#" className="font-medium hover:text-primary">
            Docs
          </a>
          <a href="/#" className="font-medium hover:text-primary">
            Changelog
          </a>
          <a href="/#" className="font-medium hover:text-primary">
            Blogs
          </a>
          <a href="/#" className="font-medium hover:text-primary">
            Login
          </a>
        </div>

        <button className="hidden lg:flex gap-2 items-center border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-500">
          <img src="assets/asset 1.svg" alt="icon"></img>
          <span>Electron Developers</span>
          <FaArrowRight />
        </button>

        {/* Hamburger Menu Toggle */}
        <button className="lg:hidden mr-0 p-2" onClick={() => setIsOpen(true)}>
          <IoMdMenu />
        </button>
      </nav>
      {/* Fullscreen Menu overlay */}
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
        <div id="hero" className="min-h-screen bg-gradient-to-br from-purple-100 via-orange-100 to-transparent">
          <div id="hero-container" className="max-w-4xl mx-auto px-6 pb-32 flex flex-col">
            {/* Version text */}
            <div id="version-text">
              
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
