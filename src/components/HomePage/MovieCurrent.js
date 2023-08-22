"use client"

import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Card from '@/components/Common/Card';
import { dataMovie } from '@/atoms/dashboardState';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import Title from './Title';
import { Triangle } from 'react-loader-spinner';
import { globalState } from '@/atoms/globalState';

function MovieCurrent() {
    const movieData = useRecoilValue(dataMovie);
    const { movieCurrent, loadingFetch } = movieData
  
    return (
       <div className='xl:px-[80px] md:px-[30px] px-[40px]'>
        <Title 
            className="text-center"
            title="Phim Đang Chiếu"
        />
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
            !loadingFetch && movieCurrent && movieCurrent.length > 0 && 
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
                        delay: 5000,
                        disableOnInteraction: false,
                }}
            >
                {
                    movieCurrent.map(mvc => {
                        return <SwiperSlide key={mvc.id}>
                            <Card 
                                btnBooking
                                data={mvc}
                                stringTime={`Từ ${dayjs(mvc.start_date).format("DD/MM")} đến ${dayjs(mvc.end_date).format("DD/MM/YYYY")}`}
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        }
        {
            !loadingFetch && (!movieCurrent || movieCurrent.length <= 0) && <div className='w-full flex justify-center'>
                <h4
                    className={`font-title text-[25px] max-sm:text-[20px] font-bold text-red-600`}
                >
                Hiện không có phim đang chiếu
                </h4>
            </div>
        }
        
        </div>   
    )
}

export default MovieCurrent