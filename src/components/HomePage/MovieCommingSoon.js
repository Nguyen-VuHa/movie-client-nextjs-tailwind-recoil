"use client"

import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from '@/components/Common/Card';

function MovieCommingSoon() {
    return (
       <div className='xl:px-[80px] md:px-[30px] px-[40px]'>
        <h1 className='text-center py-5 text-[45px] max-sm:text-[32px] font-bold text-primary-text'>
            _Phim Sắp Chiếu_
        </h1>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                '@1.50': {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
              }}
            //   autoplay={{
            //         delay: 3500,
            //         disableOnInteraction: false,
            //   }}
        >
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
       </div>
    )
}

export default MovieCommingSoon