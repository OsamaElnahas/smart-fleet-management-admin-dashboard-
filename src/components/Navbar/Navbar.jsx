import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUser } from "react-icons/fa";


export default function Navbar({ isVisable, handleToggle }) {
  return (
    <div className="navbar flex text-black items-center justify-between  p-4 rounded-md mb-5 shadow-md  hover:shadow-xl transition duration-300 sticky top-0 z-2000 bg-stone-100">
      {!isVisable&&
                <div className="text-[1.5rem] flex items-center gap-5">

                     <span className="text-[1.5rem] text-black cursor-pointer hover:scale-125 transition duration-300" onClick={handleToggle} >
                          <GiHamburgerMenu className="text-2xl" />
                    </span>
                    <div className='logo cursor-pointer'><span className='font-bold'>VEE </span> MANAGE</div>
                </div>
            }
      <div className="user-info flex items-center gap-3 ml-auto">
        <span><FaUser/></span>
        <span className="">Ziad Mahmoud</span>
      </div>
    </div>
  )
}
