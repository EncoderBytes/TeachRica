import React from 'react'
import testiLogo2 from "../../assets/testiLogo2.png"
import serviceOne from "../../assets/service1.png"
import serviceTwo from "../../assets/service2.png"
import serviceThree from "../../assets/service3.png"

const Services = () => {
    return (
        <div className=' flex flex-col items-center justify-center py-24' id='service'>
            <div className="flex gap-2 mb-12">
                <img src={testiLogo2} alt="" className='w-8' />
                <p className="font-bold text-2xl">How Can We Help You?</p>
            </div>

            <div className="flex-col flex w-5/6 m-auto gap-4 sm:flex-row justify-center items-center">
                <div className="sm:w-1/3 w-2/3">
                    <img src={serviceOne} alt="" className='w-96 block m-auto' />
                    <p className='text-2xl font-bold text-start mt-2 p-3'>Home Tuition</p>
                    <p className=" text-sm pl-3">Providing the best quality Home Tuition service the most qualified teachers at your service</p>
                </div>

                <div className="sm:w-1/3 w-2/3">
                    <img src={serviceTwo} alt="" className='w-96 block m-auto' />
                    <p className='text-2xl font-bold text-start mt-2 p-3'>Online Tuition</p>
                    <p className="text-sm pl-3">Get the best quality without compromising the time or location.</p>
                </div>

                <div className="sm:w-1/3 w-2/3">
                    <img src={serviceThree} alt="" className='w-96 block m-auto' />
                    <p className='text-2xl font-bold text-start mt-2 p-3'>Soft Skills Courses</p>
                    <p className="text-sm pl-3">Courses to help your child grow into a confident, smart and well rounded.</p>
                </div>
            </div>

            <button className="text-sm py-3 px-7 text-white bg-blueSecondary rounded-3xl mt-5">Explore More Services</button>

        </div>
    )
}

export default Services