"use client"

import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ImageCustom from '../Common/ImageCustom';


function PromotionAndEvent() {
    return (
        <div className='xl:mx-[80px] md:mx-[30px] mx-[40px] my-[50px] rounded overflow-hidden'>
            <h2 className='text-center pb-5 text-[45px] max-sm:text-[32px] font-bold text-primary-text'>
                _Ưu Đãi Khuyến Mãi_
            </h2>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ImageCustom 
                        className="w-full h-[500px] max-sm:h-[250px]"
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ImageCustom 
                        className="w-full h-[500px] max-sm:h-[250px]"
                        src="https://swiperjs.com/demos/images/nature-2.jpg" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ImageCustom 
                        className="w-full h-[500px] max-sm:h-[250px]"
                        src="https://swiperjs.com/demos/images/nature-3.jpg" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ImageCustom 
                        className="w-full h-[500px] max-sm:h-[250px]"
                        src="https://swiperjs.com/demos/images/nature-4.jpg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PromotionAndEvent