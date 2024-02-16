"use client"

import { useEffect, useRef } from 'react'
import { Button } from '../Common/Button.Custom'

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
        <div className="hero-layout z-[1]">
            <div />
            <div 
                ref={backgroudRef}
                className="
                    relative
                    hero-layout-bg
                    before:bg-gradient-to-b before:from-primary-bg
                    after:bg-gradient-to-r after:from-primary-bg
                "
            >
                <div
                    className='
                    absolute top-0 left-0 w-full h-full
                    bg-gradient-to-l from-primary-bg/50'
                />
      
            </div>
        </div>
        <div className='w-full p-[80px] max-sm:p-[40px] z-[2]'>
            <div className="w-full mt-4">
            <div className="w-full h-auto p-5 flex max-sm:flex-col max-sm:p-0">
                <img 
                    className="
                        object-cover 
                         rounded-md h-[450px] max-sm:h-[400px]
                        overflow-hidden shrink-0
                    " 
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg"
                    alt="" 
                />
                <div className="flex flex-col justify-start p-4 leading-normal ml-5 max-sm:m-0 max-sm:p-2">
                    <h2 className="mb-3 text-3xl font-bold tracking-tight text-primary dark:text-primary-content uppercase max-sm:text-center">
                        The Escape Room 2
                    </h2>
                    <div className='w-full flex items-start mb-5'>
                        <h3 className="min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Đạo diễn</h3>
                        <p className="font-normal text-primary-text dark:text-primary-content text-start">
                            Shane Black
                        </p>
                    </div>
                    <div className='w-full flex items-start mb-5'>
                        <h3 className="min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Diễn viên</h3>
                        <p className="font-normal text-primary-text dark:text-primary-content text-start">
                            Daisy Ridley, Adam Driver, Oscar Isaac
                        </p>
                    </div>
                    <div className='w-full flex items-start mb-5'>
                        <h3 className="min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Thể loại</h3>
                        <p className="font-normal text-primary-text dark:text-primary-content text-start">
                            Drama, Horror
                        </p>
                    </div>
                    <div className='w-full flex items-start mb-5'>
                        <h3 className="min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Thời lượng</h3>
                        <p className="font-normal text-primary-text dark:text-primary-content text-start">
                            88 phút
                        </p>
                    </div>
                    <div className='w-full flex items-start mb-2'>
                        <h3 className="min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Đánh giá</h3>
                        <p className="font-normal text-primary-text dark:text-primary-content text-start">
                            8.5 điểm
                        </p>
                    </div>
                    <div className='w-full flex items-start mb-2 max-sm:flex-col'>
                        <h3 className="mb-2 min-w-[120px] shrink-0 text-1xl font-semibold tracking-tight text-primary-text dark:text-primary-content mr-5">Chi tiết</h3>
                        <p className="line-clamp-3 font-normal text-primary-text dark:text-primary-content text-start">
                            Căn Phòng Tử Thần 2: Cái Chết Trở Lại - Escape Room: Tournament of Champions (2021) là bộ phim thuộc thể loại kinh dị, tâm lý Mỹ năm 2021 do Adam Robitel chịu trách nhiệm chỉ đạo, với phần kịch bản được chắp bút bởi Will Honley, Maria Melnik, Daniel Tuch và Oren Uziel.
                            Bộ phim có sự tham gia của Taylor Russell , Logan Miller và Deborah Ann Woll với các vai diễn trong phần phim trước, cùng với đó là Indya Moore , Holland Roden , Thomas Cocquerel và Carlito Olivero.
                        </p>
                    </div>
                    <div className="flex mt-4 space-x-2">
                        <Button className="py-[8px]">
                           Đặt Vé
                        </Button>
                        <Button
                        >
                           Trailer
                        </Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Hero