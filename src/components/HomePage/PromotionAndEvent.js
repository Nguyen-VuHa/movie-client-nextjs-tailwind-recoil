"use client"

import React, { useState } from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import ImageCustom from '../Common/ImageCustom';
import Title from './Title';


function PromotionAndEvent() {

    const [listBanner, setListBanner] = useState([
        process.env.NEXT_PUBLIC_API_URL + 'public/banner-1.jpg',
        process.env.NEXT_PUBLIC_API_URL + 'public/banner-2.jpg',
        process.env.NEXT_PUBLIC_API_URL + 'public/banner-3.jpg',
        process.env.NEXT_PUBLIC_API_URL + 'public/banner-4.jpg',
        process.env.NEXT_PUBLIC_API_URL + 'public/banner-5.jpg',
    ])
    
    return (
        <div className='xl:mx-[80px] md:mx-[30px] mx-[40px] my-[50px] rounded overflow-hidden'>
            <Title 
                className="text-center"
                title="Ưu Đãi Khuyến Mãi"
            />
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {
                    listBanner.map((banner, index) => {
                        return <SwiperSlide key={index}>
                            <ImageCustom 
                                className="w-full h-[500px] max-sm:h-[250px]"
                                src={banner}
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default PromotionAndEvent