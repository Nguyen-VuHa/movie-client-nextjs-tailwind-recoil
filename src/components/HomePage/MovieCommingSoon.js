"use client"

import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from '@/components/Common/Card';
import { useRecoilValue } from 'recoil';
import { dataMovie } from '@/atoms/dashboardState';
import dayjs from 'dayjs';

function MovieCommingSoon() {
    const movieData = useRecoilValue(dataMovie);
    const { movieCommingSoon } = movieData

    return (
       <div className='xl:px-[80px] md:px-[30px] px-[40px]'>
        <h1 className='text-center py-5 text-[45px] max-sm:text-[32px] font-bold text-primary-text'>
            _Phim Sắp Chiếu_
        </h1>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            navigation={true}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '@1.50': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
              }}
              autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
              }}
        >
            {
                movieCommingSoon && movieCommingSoon.length > 0 &&
                movieCommingSoon.map(mvcs => {
                    return <SwiperSlide key={mvcs.id}>
                        <Card 
                            data={mvcs}
                            stringTime={`Khởi chiếu ngày ${dayjs(mvcs.start_date).format("DD/MM/YYYY")}`}
                        />
                    </SwiperSlide>
                })
            }
        </Swiper>
       </div>
    )
}

export default MovieCommingSoon