import React from 'react'
import aboutImg from "../../assets/aboutImg.png"
import aboutLogo from "../../assets/testi0.png"

const About = () => {
  return (
    <div className='section' id='about'>

      <div className="w-5/6 m-auto items-center sm:flex-row flex flex-col gap-9 p-2 mt-10">
        <div className=" sm:w-2/3 w-100 ">
          <div className="flex items-center gap-3">
            <img src={aboutLogo} alt="" className='w-8' />
            <p className="font-bold text-4xl text-center">About Us</p>
          </div>

          <div className=" text-xs mt-5 text-justify p-1">
            Teachrica offers top-level home tuition services in Peshawar and online tutors throughout the globe. Hire a professional home tutor in Peshawar, either a male or female instructor, for in-home tuition or online at guideway.pk. We teach the concepts so that our students might excel in and out of academic education. Our at-home tutors are accomplished teachers who are prepared to come to your house and instruct your children. They have knowledge of every subject. They present tuition for all the prominent education systems of Peshawar and they can teach all subjects and grades.
          </div>
          <button className="text-sm py-3 m-1 px-7 text-white bg-blueSecondary rounded-3xl mt-5">Contact Us</button>
        </div>

        <div className=" mt-3">
          <img src={aboutImg} alt="" className='w-96' />
        </div>
      </div>
    </div>
  )
}

export default About