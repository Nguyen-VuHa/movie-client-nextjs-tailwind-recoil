"use client"

import React, { useEffect, useRef } from 'react'
import './homepage.scss'
import ButtonCustom from '@/components/Common/ButtonCustom'
import ImageCustom from '@/components/Common/ImageCustom'

function Hero() {
    const backgroudRef = useRef(null)

    useEffect(() => {
        if(backgroudRef.current)
        {
            const style = `
                background: url(${'https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg'}) 0% 0% / cover no-repeat;
                width: 100%;
                height: 100%;
                position: relative;
                transition: all 0.5s ease 0s;
            `;

            backgroudRef.current.style = style;
        }
    }, [])
    

    return (
        <section className='wrapper-hero'>
            <div className="hero-layout z-[-1]">
                <div />
                <div 
                    ref={backgroudRef}
                    className="
                        hero-layout-bg
                        before:bg-gradient-to-r dark:before:from-[#121825] before:from-[#fff]
                        after:bg-gradient-to-t dark:after:from-[#121825] after:from-[#fff]
                    "
                />
            </div>
            <div className='w-full p-[80px] max-sm:p-[40px]'>
                <h1
                    className='text-[45px] max-sm:text-[32px] font-bold text-primary-text'
                >
                    Top Phim Trong Tuần
                </h1>
                <div className="w-full mt-4">
                <div className="w-full h-auto p-5 flex max-sm:flex-col max-sm:p-0">
                    <ImageCustom 
                        className="
                            object-cover 
                            min-w-[300px] max-w-[380px] w-[100%]
                            h-[400px] max-sm:h-[400px]
                            overflow-hidden shrink-0
                        " 
                        src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg"
                        alt="" 
                    />
                    
                    {/* <img 
                        className="
                            object-cover 
                            rounded-md h-[400px] max-sm:h-[400px]
                            overflow-hidden shrink-0
                        " 
                        src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg"
                        alt="" 
                    /> */}
                    <div className="flex flex-col justify-start p-4 leading-normal ml-5 max-sm:m-0 max-sm:p-2">
                        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-content uppercase max-sm:text-center">
                            The Escape Room 2
                        </h2>
                        <div className='w-full flex items-start mb-5'>
                            <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đạo diễn</h3>
                            <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                Shane Black
                            </p>
                        </div>
                        <div className='w-full flex items-start mb-5'>
                            <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Diễn viên</h3>
                            <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                Daisy Ridley, Adam Driver, Oscar Isaac
                            </p>
                        </div>
                        <div className='w-full flex items-start mb-5'>
                            <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thể loại</h3>
                            <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                Drama, Horror
                            </p>
                        </div>
                        <div className='w-full flex items-start mb-5'>
                            <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thời lượng</h3>
                            <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                88 phút
                            </p>
                        </div>
                        <div className='w-full flex items-start mb-2'>
                            <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đánh giá</h3>
                            <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                8.5 điểm
                            </p>
                        </div>
                        <div className='w-full flex items-start mb-2 max-sm:flex-col'>
                            <h3 className="mb-2 min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Chi tiết</h3>
                            <p className="line-clamp-3 font-normal text-gray-700/90 dark:text-primary-content text-start max-w-[70%]">
                                Căn Phòng Tử Thần 2: Cái Chết Trở Lại - Escape Room: Tournament of Champions (2021) là bộ phim thuộc thể loại kinh dị, tâm lý Mỹ năm 2021 do Adam Robitel chịu trách nhiệm chỉ đạo, với phần kịch bản được chắp bút bởi Will Honley, Maria Melnik, Daniel Tuch và Oren Uziel.
                                Bộ phim có sự tham gia của Taylor Russell , Logan Miller và Deborah Ann Woll với các vai diễn trong phần phim trước, cùng với đó là Indya Moore , Holland Roden , Thomas Cocquerel và Carlito Olivero.
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <ButtonCustom 
                                buttonName="Đặt vé ngay"
                            />
                            <ButtonCustom 
                                className="ml-2"
                                buttonName="Xem Trailler"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero