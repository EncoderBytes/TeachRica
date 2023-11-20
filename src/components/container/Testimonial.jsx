import React from 'react'
import testi0 from "../../assets/testi0.png"
import tutor from "../../assets/tutorOne.png"
import testiLogo2 from "../../assets/testiLogo2.png"
import testiLogo1 from "../../assets/testiLogo1.png"
import rectangle8 from "../../assets/Rectangle8.png"
import "./testimonial.css"
import Slider from './Slider'

const Testimonial = () => {
  return (



    <div className='bg-gray h-auto py-28' id='testimonial'>
      <div className="flex items-center justify-center gap-2 ">
        <img src={testi0} alt="" className='w-7' />
        <p className='font-bold text-xl text-center '>What Our Client Say About Us</p>
      </div>

      <div className='text-xs text-center w-4/5 sm:w-3/5 m-auto my-10'>
        Our valuable clients are our assets we value there feedback, suggestions and question. The following are few feedbacks from our clients.
      </div>

      <div className=" py-14">
        <Slider />
        {/* <div className="">hi</div> */}
      </div>

      <div className="h-60 bg-bluePrimary border relative">
        <div className="flex items-center justify-center gap-1 pt-14">
          <img src={testiLogo1} alt="" className='w-6 sm:w-7 ' />
          <p className='font-bold text-lg text-center text-white'>We're here to help! Call Us Today!</p>
        </div>

        <div className=" flex items-center justify-center gap-4 mt-8">
          <button className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl">Register Now</button>
          <button className="text-sm py-3 px-7 bg-gray rounded-3xl">Contact Us</button>
        </div>

        <div className='tutor '>
          <img src={tutor} alt="" />
        </div>
      </div>


      <div className="w-5/6 m-auto items-center sm:flex-row flex flex-col py-28 gap-9">
        <div className=" sm:w-2/3 w-100 ">
          <div className="flex items-center gap-1">
            <img src={testiLogo2} alt="" className='w-6' />
            <p className="font-bold text-lg text-center">Best Tuition Services in Peshawar</p>
          </div>

          <div className=" text-xs mt-5 text-justify p-2">
            Good news for all the parents and students looking for affordable and best tuition services. We offer a full variety of in-home tutoring services in Peshawar. Our qualified, competent, and experienced tutors will visit your home to teach your children. They are experts in numerous academic programs, courses, and grades and have experience in all subject areas.
          </div>
          <button className="text-sm py-3 px-7 m-2 text-white bg-blueSecondary rounded-3xl mt-5">Contact Us</button>
        </div>

        <div className=" mt-3">
          <img src={rectangle8} alt="" className='w-96' />
        </div>
      </div>

    </div>
  )
}

export default Testimonial