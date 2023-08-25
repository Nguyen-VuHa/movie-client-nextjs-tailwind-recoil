"use client"

import React, { useState } from 'react'
import ImageCustom from '@/components/Common/ImageCustom'
import InputComment from '@/components/Common/InputComment'
import ChildrenComment from './ChildrenComment'

function ParentComment() {
    const [statusComment, setStatusComment] = useState(false)

    return (
        <div className='flex flex-col w-full overflow-hidden'>
            <div className='flex items-center'>
                <ImageCustom  
                    className='rounded-[50%] w-[30px] h-[30px] text-center shrink-0' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <span className='ml-2 font-bold text-primary-text'>Nguyễn Vũ Hạ</span>
            </div>
            <span className='mt-2 p-2 rounded-[14px] max-w-[100%] break-words w-fit dark:text-primary-content bg-[#0000001a] text-[#131313]'>
                Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
            </span>
            <div className='mt-1 p-2 flex flex-wrap ml-[-0.5rem] mt-[-0.5rem]'>
                <ImageCustom 
                    className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <ImageCustom 
                    className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <ImageCustom 
                    className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <ImageCustom 
                    className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
                <ImageCustom 
                    className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                    alt="Not Avartar"
                    src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
                />
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
                        placeholder="Nhập phản hồi với bình luận này ..."
                    />
                </div>
            }
            <div className='ml-10 mt-4 flex flex-col'>
                <ChildrenComment />
            </div>
        </div>
    )
}

export default ParentComment