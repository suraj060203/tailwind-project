import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const HambergerMenu = () => {

  const[isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='md:hidden mr-0 p-2' onClick={()=> setIsOpen(true)}>
        <IoMdMenu/>
      </button>
      
      {/* Fulscreen overlay */}
      <div>
        {
          isOpen && (
              <div className="fixed inset-0 " >
                    <button className='absolute top-4 right-4 text-3xl ' onClick={() => setIsOpen(false)} >
                      <IoMdClose/>
                    </button>
                    <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="/about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
              </div>
            )
        }
        

      </div>
    </div>
  )
}


export default HambergerMenu
