import React, { useEffect, useState } from 'react'
import { navLinks } from "../../Data"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from "./NavLink";
import MobileNavLinks from './MobileNavLinks';
import { motion } from "framer-motion"
import techLogo from "../../assets/techLogo.png"

const Navbar = () => {
  // toggle state
  const [toggle, setToggle] = useState(false)

  // nav active state
  const [active, setActive] = useState(null)
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 0)
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);


  return (
    // Navbar
    <div className={` ${active ? "shadow-lg " : ""} fixed w-full top-0 left-0 z-20 bg-navClr`} >
      <div>
        <div className=' bg-bluePrimary flex items-center justify-center  h-[1.5rem]'>
          <p className="text-center text-xs text-white"> 15% Discount for new registered student. Avail this amazing opportunity</p>
        </div>
        <div className=" ">
          <div className={`${active ? "py-3 transition-all duration-300" : "py-5 "} container py-4 mx-auto flex items-center justify-between px-1 `}>

            <div className='flex items-center gap-4 w-1/3 ' >
              {/* left icon */}
              <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)} />
              {/* Name */}
              <img src={techLogo} alt="" className='w-28 cursor-pointer' />
            </div>

            {/* Links */}
            <div
              className='sm:flex items-center hidden font-semibold w-2/3 justify-end'>
              {navLinks.map((navLink) => {
                return <NavLink key={navLink.id} {...navLink} 
                />;
              })}
            </div>

            {/*Buttons  */}
            <button className="text-sm bg-blueSecondary text-white rounded-3xl py-3 px-6 outline-none">
              +923046667704
            </button>

            {/* Toggle function */}
            {toggle && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}

                className='fixed h-full w-56 top-0 left-0 z-20 bg-bluePrimary text-white flex flex-col justify-center items-center shadow-lg gap-6 py-8'>
                {navLinks.map((navLink) => {
                  return (
                    <MobileNavLinks
                      key={navLink.id}
                      {...navLink}
                      setToggle={setToggle}
                      spy={true}
                    />
                  );
                })}

                {/* Cross icon */}
                <HiX className='absolute top-6 right-6 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar