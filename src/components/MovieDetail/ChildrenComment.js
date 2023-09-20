"use client"

import React, { useState } from 'react'
import ImageCustom from '@/components/Common/ImageCustom'
import InputComment from '@/components/Common/InputComment'
import dayjs from 'dayjs'
import { AVARTAR_EMPTY } from '@/constants/constants'

function ChildrenComment({ data }) {
    const [statusComment, setStatusComment] = useState(false)

    return (
        <div className='flex flex-col mb-2'>
            <div className='flex items-center'>
                <ImageCustom  
                    className='rounded-[50%] w-[30px] h-[30px] text-center shrink-0' 
                    alt="Not Avartar"
                    src={data?.userImage || AVARTAR_EMPTY}
                />
                <span className='ml-2 font-bold text-primary-text'>{data?.userComment}</span>
                <span className='ml-2 text-[12px] font-bold text-primary-content'> - </span>
                <span className='ml-2 text-[12px] font-bold text-primary-content'>{ dayjs(data?.time).fromNow() }</span>
            </div>
            <div className='mt-2 p-2 rounded-[14px] w-fit dark:text-primary-content bg-[#0000001a] text-[#131313]'>
                {data?.comment}
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