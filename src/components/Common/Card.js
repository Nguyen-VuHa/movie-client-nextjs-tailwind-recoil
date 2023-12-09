import React from 'react'
import '@/assets/styles/card.scss';
import ImageCustom from './ImageCustom';
import ButtonCustom from './ButtonCustom';

function Card({ data, stringTime, btnBooking }) {

    return (
        <div className='p-2'>
            <div className='layout-card w-full'>
                <div 
                    className='
                        wrapper-poster
                    '
                >
                    <ImageCustom 
                        className="w-full h-full"
                        src={data && data.poster}
                    />
                    <div 
                        className='absolute top-0 background-gradient w-full h-full before:bg-gradient-to-t dark:before:from-[#121825] before:from-[#fafafa] z-[1]'
                    ></div>
                </div>
                <div className='wrapper-control'>
                    <div className='w-full h-full relative'>
                        <div className='info'>
                            <span className='movie-name text-orange-txt dark:text-primary-text h-[50px]'>
                                {data && data.movie_name}
                            </span>
                            <span className='mt-2 time dark:text-primary-content'>{ stringTime }</span>
                        </div>
                        <div className='relative control'>
                            {
                                btnBooking && <ButtonCustom 
                                    className="w-full"
                                    buttonName="Đặt vé"
                                />
                            }
                            <ButtonCustom 
                                className="w-full ml-1"
                                buttonName="Xem trailler"
                                onClick={() => {
                                    setGlobal({
                                        ...global,
                                        isModalTrailer: true,
                                        youtubeId: data?.id_trailer
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card