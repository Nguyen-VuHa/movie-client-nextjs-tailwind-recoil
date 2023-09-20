"use client"

import React, { useState } from 'react'
import ImageCustom from '@/components/Common/ImageCustom'
import InputComment from '@/components/Common/InputComment'
import ChildrenComment from './ChildrenComment'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import commentApi from '@/apis/comment'
import {  AVARTAR_EMPTY, STR_STATUS_SUCCESS } from '@/constants/constants'
dayjs.locale('vi')
dayjs.extend(relativeTime)

function ParentComment({ data }) {
    const [statusComment, setStatusComment] = useState(false)

    const [isShowChildComment, setIsShowChildComment] = useState(false)

    const [childComment, setChildComment] = useState([])

    const getChildComment =  async (parentId) => {
        const result = await commentApi.getChildComment(parentId)

        if (result && result.status == STR_STATUS_SUCCESS) {
            setChildComment(result.data)
        }
    }

    return (
        <div className='flex flex-col w-full overflow-hidden mt-3'>
            <div className='flex items-center'>
                <ImageCustom  
                    className='rounded-[50%] w-[30px] h-[30px] text-center shrink-0' 
                    alt="Not Avartar"
                    src={data?.userImage || AVARTAR_EMPTY}
                />
                <div>
                    <span className='ml-2 font-bold text-primary-text'>{ data?.userComment || 'anonymous' }</span>
                    <span className='ml-2 text-[12px] font-bold text-primary-content'> - </span>
                    <span className='ml-2 text-[12px] font-bold text-primary-content'>{ dayjs(data?.time).fromNow() }</span>
                    <span className='ml-2 text-[12px] font-bold text-primary-content'> - </span>
                    <span className='ml-2 font-bold text-primary-text'>đánh giá { data?.rating } sao</span>
                </div>
            </div>
            <span className='mt-2 p-2 rounded-[14px] max-w-[100%] break-words w-fit dark:text-primary-content bg-[#0000001a] text-[#131313]'>
                { data?.comment || ''}
            </span>
            {
                data && data?.images.length > 0 && <div className='mt-1 p-2 flex flex-wrap ml-[-0.5rem] mt-[-0.5rem]'>
                    {
                        data.images.map((idx, img) => {
                            return <ImageCustom 
                                key={idx}
                                className='text-center shrink-0 w-[70px] h-[100px] ml-2 mt-2' 
                                alt="Not Avartar"
                                src={img}
                            />
                        })
                    }
                </div>
            }
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
                {
                    data?.countReply > 0 && <>
                        <span className='mx-2'> - </span>
                        <div 
                            className={`px-2 rounded hover:bg-primary-content/80 hover:text-primary-text/90 transition-colors ${statusComment && 'text-primary-text'}`}
                            onClick={() => {
                                if (!isShowChildComment) {
                                    getChildComment(data.id)
                                    setIsShowChildComment(true)
                                } else {
                                    setIsShowChildComment(false)
                                }
                            }}
                        >
                            { data?.countReply } phản hồi
                        </div>
                    </>
                }
                
            </div>
            {
                statusComment && <div className='mt-2'>
                    <InputComment 
                        placeholder="Nhập phản hồi với bình luận này ..."
                    />
                </div>
            }
            {
                isShowChildComment && childComment && childComment.length > 0 && <div className='ml-10 mt-4 flex flex-col'>
                    {
                        childComment.map((data) => {
                            return <ChildrenComment key={data.id} data={data}/>
                        })
                    }
                  
                </div>
            }
          
        </div>
    )
}

export default ParentComment