import React from 'react'
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import location from "../../assets/location.png"
import techLogo from "../../assets/techLogo.png"

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTiktok,
  BsYoutube,
  BsLinkedin
} from "react-icons/bs"


const Footer = () => {
  return (
    <div className='h-auto w-full '>

      {/*LInks and Logo  */}
      <div className="flex justify-between w-5/6 m-auto mb-5">
        <div className="flex items-center gap-4">
          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsLinkedin />
          </a>

          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsFacebook />
          </a>

          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsTwitter />
          </a>
        </div>

        <div className="logo">
          <img src={techLogo} alt="" className='cursor-pointer' />

        </div>

        <div className="flex items-center gap-4">
          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsTiktok />
          </a>

          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsInstagram />
          </a>

          <a href="" className='hover:scale-110 text-xl text-bluePrimary'>
            <BsYoutube />
          </a>
        </div>
      </div>

      {/*  pics and email phone etc */}
      <div className="flex items-center justify-between w-3/4 m-auto  mb-5">
        <div className="flex flex-col gap-5 items-center  text-center">
          <img src={email} alt="" className='w-12 block m-auto' />
          <p className='font-bold text-sm'> Email</p>
          <p className='text-xs text-justify'>info@teachrica.com <br /> hr@teachrica.com</p>
        </div>

        <div className="flex flex-col gap-5 items-center  text-center">
          <img src={phone} alt="" className='w-12 block m-auto' />
          <p className='font-bold text-sm'> Phone</p>
          <p className='text-xs text-justify'>0092-3451234567 <br /> 0092-3007654321</p>
        </div>

        <div className="flex flex-col gap-5 items-center  text-center">
          <img src={location} alt="" className='w-12 block m-auto' />
          <p className='font-bold text-sm'> Address</p>
          <p className='text-xs text-justify font-medium'>PTCL Training Center,<br />Bazar Peshawar</p>
        </div>
      </div>

      {/* copyright */}
      <div className="text-xs text-center font-bold h-10">
        Copyright Ⓒ 2023 <span className='text-bluePrimary'>Teachrica</span>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer