"use client"

import React, { useState } from 'react'
import ImageCustom from '@/components/Common/ImageCustom'
import InputComment from '@/components/Common/InputComment'

function ChildrenComment() {
    const [statusComment, setStatusComment] = useState(false)

    return (
        <div className='flex flex-col'>
            <div className='flex items-center'>
                <ImageCustom  
                    className='rounded-[50%] w-[30px] h-[30px] text-center shrink-0' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <span className='ml-2 font-bold text-primary-text'>Nguyễn Vũ Hạ</span>
            </div>
            <div className='mt-2 p-2 rounded-[14px] w-fit dark:text-primary-content bg-[#0000001a] text-[#131313]'>
                20 nhạc cơ ha làm
            </div>
            <div className='mt-2 flex cursor-pointer dark:text-primary-content select-none'>
                <div className='hover:text-primary-text/90 transition-colors'>
                    Thích
                </div>
                <span className='mx-2'> - </span>
                <div 
                    className={`hover:text-primary-text/90 transition-colors ${statusComment && 'text-primary-text'}`}
                    onClick={() => {
                        setStatusComment(!statusComment)
                    }}
                >
                    Phản hồi
                </div>
            </div>
            {
                statusComment && <div className='mt-2'>
                    <InputComment 
                        placeholder="Nhập phản hồi ..."
                    />
                </div>
            }
            
        </div>
    )
}

export default ChildrenComment