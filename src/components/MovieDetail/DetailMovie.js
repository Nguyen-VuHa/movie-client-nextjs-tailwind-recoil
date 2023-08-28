"use client"

import React, { useEffect, useRef } from 'react'
import ButtonCustom from '@/components/Common/ButtonCustom'
import ImageCustom from '@/components/Common/ImageCustom'
import { useRecoilState, useRecoilValue } from 'recoil'
import Breadcrumb from './Breadcrumb'
import { movieState } from '@/atoms/movieState'
import DetailLoading from './DetailLoading'
import { globalState } from '@/atoms/globalState'

function Hero() {
    const dataMovie = useRecoilValue(movieState);
    const [global, setGlobal] = useRecoilState(globalState)
    
    const { detailMovie, loadingDetail } = dataMovie

    const backgroudRef = useRef(null)

    useEffect(() => {
        if(detailMovie && detailMovie.poster && backgroudRef.current) {
            const imagePoster = detailMovie.poster[0]
            const style = `
                background: url(${imagePoster}) 0% 0% / cover no-repeat;
                width: 100%;
                height: 100%;
                position: relative;
                transition: all 0.5s ease 0s;
            `;

            backgroudRef.current.style = style;
        }
    }, [detailMovie])
    

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
                <Breadcrumb />
                <div className="w-full mt-4">
                    {
                        loadingDetail && <DetailLoading />
                    }
                    {
                       !loadingDetail &&
                       <div className="w-full h-auto p-5 flex max-sm:flex-col max-sm:p-0">
                            <ImageCustom 
                                className="
                                    object-cover 
                                    min-w-[300px] max-w-[350px] w-[100%]
                                    h-[420px] max-sm:h-[400px]
                                    overflow-hidden shrink-0
                                    rounded-md
                                " 
                                src={detailMovie?.poster[0] || ""}
                            />
                            <div className="flex flex-col justify-start p-4 leading-normal ml-5 max-sm:m-0 max-sm:p-2">
                                <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-content uppercase max-sm:text-center">
                                    { detailMovie?.movie_name }
                                </h2>
                                <div className='w-full flex items-start mb-5'>
                                    <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đạo diễn</h3>
                                    <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                        { detailMovie?.author.toString() }
                                    </p>
                                </div>
                                <div className='w-full flex items-start mb-5'>
                                    <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Diễn viên</h3>
                                    <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                        { detailMovie?.actor.toString() }
                                    </p>
                                </div>
                                <div className='w-full flex items-start mb-5'>
                                    <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thể loại</h3>
                                    <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                        { detailMovie?.categories.toString() }
                                    </p>
                                </div>
                                <div className='w-full flex items-start mb-5'>
                                    <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thời lượng</h3>
                                    <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                    { detailMovie?.show_time } phút
                                    </p>
                                </div>
                                <div className='w-full flex items-start mb-2'>
                                    <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đánh giá</h3>
                                    <p className="font-normal text-gray-700/90 dark:text-primary-content text-start">
                                        7 điểm
                                    </p>
                                </div>
                                <div className='w-full flex items-start mb-2 max-sm:flex-col'>
                                    <h3 className="mb-2 min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Chi tiết</h3>
                                    <p className="line-clamp-3 font-normal text-gray-700/90 dark:text-primary-content text-start max-w-[70%] max-sm:max-w-[100%]">
                                        { detailMovie?.description }
                                    </p>
                                </div>
                                <div className="flex mt-4">
                                    <ButtonCustom 
                                        buttonName="Đặt vé ngay"
                                    />
                                    <ButtonCustom 
                                        className="ml-2"
                                        buttonName="Trailer"
                                        onClick={() => {
                                            setGlobal({
                                                ...global,
                                                isModalTrailer: true,
                                                youtubeId: detailMovie?.id_trailer
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero