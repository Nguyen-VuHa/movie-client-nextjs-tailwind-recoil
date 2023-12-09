"use client"

import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from '@/components/Common/Card';
import dayjs from 'dayjs';
import { Triangle } from 'react-loader-spinner';
import Title from './Title';

function MovieCommingSoon() {
    const { movieCommingSoon, loadingFetch } = movieData

    return (
       <div className='xl:px-[80px] md:px-[30px] px-[20px]'>
        <Title 
            className="text-center"
            title="Phim Sắp Chiếu"
        />
        <div className='px-[15px]'>
            {
                loadingFetch && <div className='w-full flex justify-center'>
                    <Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        
                        ariaLabel="triangle-loading"
                        visible={true}
                    />
                </div>
            }
            {
                !loadingFetch && movieCommingSoon && movieCommingSoon.length > 0 && <Swiper
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
            }
            {
                !loadingFetch && (!movieCommingSoon || movieCommingSoon.length <= 0) && <div className='w-full flex justify-center'>
                    <h4
                        className={`font-title text-[25px] max-sm:text-[20px] font-bold text-red-600`}
                    >
                    Hiện không có phim sắp chiếu
                    </h4>
                </div>
            }
        </div>
       </div>
    )
}

export default MovieCommingSoon