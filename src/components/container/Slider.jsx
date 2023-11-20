import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../../Data";

const Slider = () => {
    return (
        <div className="flex items-center justify-center flex-col ">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="w-11/12 m-auto">
                            <div className="flex flex-col items-center justify-center gap-6 bg-white mb-24  rounded-2xl py-16">
                                <img src={item.image} alt="" className="w-16" />
                                <p className="text-2xl font-bold">{item.name}</p>
                                <p className="text-xs font-medium text-center p-2">{item.message}</p>
                                <div className="flex gap-1">
                                    <FaStar className="text-yellow" />
                                    <FaStar className="text-yellow" />
                                    <FaStar className="text-yellow" />
                                    <FaStar className="text-yellow" />
                                    <FaStar className="text-gray" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Slider;