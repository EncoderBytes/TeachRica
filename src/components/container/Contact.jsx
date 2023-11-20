import React from 'react'
import "./contact.css"
import contactLogo from "../../assets/contactLogo.png"
import contactPhone from "../../assets/contactPhone.png"

const Contact = () => {
  return (
    <div className='contact mb-10 relative' id='contact'>
      <div className="pt-20">
        <div className='flex justify-center items-center gap-4 mb-10'>
          <img src={contactLogo} alt="" className='w-7 h-7 flex-shrink-0' />
          <p className='font-extrabold text-2xl'>Contact Us Now</p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <form action="">
            {/*  */}
            <input
              type="text"
              name=""
              id=""
              placeholder='Name'
              className='bg-transparent m-auto border rounded-md border-white mb-4 p-1 pl-2 placeholder-white outline-none' />
            <br />

            {/*  */}
            <input
              type="email"
              name=""
              id=""
              placeholder='Email'
              className='bg-transparent m-auto border rounded-md  border-white mb-4 p-1 pl-2 placeholder-white outline-none' />
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder='Your Message'
              className='bg-transparent m-auto border rounded-md  border-white mb-4 pt-4 pr-4 pl-4 pb-28 placeholder-white outline-none' />
            <br />
            <button type="submit" className='bg-white rounded-3xl py-3 px-8 text-center text-sm w-80 m-auto block font-bold mt-10'>
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="phoneSet">
        <img src={contactPhone} alt="" className='phhhh' />
      </div>
    </div>
  )
}

export default Contact