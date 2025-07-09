import { useState } from 'react';
import './App.css';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose , IoMdMenu } from "react-icons/io";

function App() {

    const [menu, setMenu] = useState(false);

    function handleMenu(){
      console.log("clicked")
    }

    function handleCross(){
      setMenu(true);
    }

  return (


    <div className="App">
      {/* Navbar */}
      <nav className='p-3 flex bg-white justify-between items-center'>

        {/* Logo */}
        <a href="/#" className='flex gap-2 items-center'>
          <img src="assets/asset 0.png" alt='Logo' className='object-cover max-w-12 max-h-12'/>
          <span className='text-lg font-medium font-display '>ToDesktop</span>
        </a>

        <div className='flex gap-12 hidden md:flex'>
          <a href='/#' className='font-medium hover:text-primary' >Pricing</a>
          <a href='/#' className='font-medium hover:text-primary' >Docs</a>
          <a href='/#' className='font-medium hover:text-primary' >Changelog</a>
          <a href='/#' className='font-medium hover:text-primary' >Blogs</a>
          <a href='/#' className='font-medium hover:text-primary' >Login</a>
        </div>

        <button className='hidden md:flex gap-2 items-center border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-500'>
          <img src='assets/asset 1.svg' alt='icon'></img>
          <span>Electron Developers</span>
          <FaArrowRight/>
        </button>

        <button className='p-2 md:hidden' onClick={handleMenu}>
          <IoMdMenu className='text-gray-600'/>
        </button>


        {/* Hamburger Menu */}
        <div className='fixed bg-white inset-0 p-3'>
            <div className='flex justify-between'>
              {/* Logo */}
              <a href="/#" className='flex gap-2 items-center'>
                <img src="assets/asset 0.png" alt='Logo' className='object-cover max-w-12 max-h-12'/>
                <span className='text-lg font-medium font-display '>ToDesktop</span>
              </a>
              <button className='p-2 md:hidden' onClick={handleCross}>
                {
                  setMenu? () : ()
                }
              </button>
            </div>

        </div>

      </nav>
    </div>
  );
}

export default App;
