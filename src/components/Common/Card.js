import React from 'react'
import '@/assets/styles/card.scss';
import ImageCustom from './ImageCustom';

function Card() {
    
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
                        src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg"
                    />
                    <div 
                        className='absolute top-0 background-gradient w-full h-full before:bg-gradient-to-t dark:before:from-[#121825] before:from-[#fafafa] z-[1]'
                    ></div>
                </div>
                <div className='wrapper-control'>
                    <span className='movie-name text-black dark:text-primary-text'>
                        THE ESCAPE ROOM 2 
                        THE ESCAPE ROOM 2 
                        THE ESCAPE ROOM 2 
                        THE ESCAPE ROOM 2 
                        THE ESCAPE ROOM 2 
                        THE ESCAPE ROOM 2 
                    </span>
                    <span className='mt-2 time dark:text-primary-content'>Khởi chiếu ngày 20/11/1999</span>
                </div>
            </div>
        </div>
    )
}

export default Card