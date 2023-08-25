"use client"

import React, { useRef, useState, useEffect } from 'react';
import ButtonCustom from './ButtonCustom';
import ImageCustom from './ImageCustom';
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from 'react-toastify';

const InputComment = ({ placeholder, onSubmit, clearText }) => {
    const textCommentRef = useRef();

    const [statusFocus, setStatusFocus] = useState(false);
    const [textComment, setTextComment] = useState('');
    const [images, setImages] = useState([]);

    const removeText = () => {
        if(textCommentRef.current)
            textCommentRef.current.textContent = "";
    }

    useEffect(() => {
        if(clearText === true) {
            removeText();
        }
    }, [clearText]);

    const updateImage = (content) => {
        const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
        const match = content.match(imageUrlRegex);

        if (match && match.length > 0 && images.length < 5) {
            let listImage = images.concat({
                src: match[0],
                id: images.length + 1
            })
            setImages(listImage)

            let textClear = textComment.replace(match[0], '')
            textCommentRef.current.textContent = textClear
            setTextComment(textClear)
        }

        if (images && images.length >= 5) {
            toast.warn("Tôi đa 5 hình ảnh cho 1 bình luận.")
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
      const handleDrop = (e) => {
        e.preventDefault();
    };


    return (
        <div className='w-full box-content flex'>
            <ImageCustom  
                className='rounded-[50%] w-[35px] h-[35px] text-center shrink-0' 
                alt="Not Avartar"
                src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
            />
            <div className='w-full'>
                <div 
                    className={`ml-[10px] outline-none border-b-2 pb-1 dark:text-primary-content ${textComment ? 'before:content-none' : 'before:content-[attr(placeholder)] before:color-primary-text before:cursor-text'}`}
                    ref={textCommentRef}
                    contentEditable="true" 
                    role="textbox" 
                    aria-multiline="true" 
                    spellCheck="false"
                    placeholder={placeholder}
                    onInput={(e) => {
                        setTextComment(e.currentTarget.textContent)
                        updateImage(e.currentTarget.textContent);
                    }}
                    onFocus={() => setStatusFocus(true)}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
                {
                    images.length > 0 && 
                    <div className='m-2 p-2 border-2 rounded-sm'>
                        <div className='flex ml-[-3px] mt-[-3px] flex-wrap'>
                            {
                                images.map((img) => {
                                    return <div className="w-[50px] h-[50px] rounded-sm overflow-hidden cursor-pointer relative ml-[3px] mt-[3px]" key={img.id}>
                                        <div className='absolute top-[2px] right-[6px] w-[10px] h-[10px] rounded-[50%] z-[10] hover:opacity-80'
                                            onClick={() => {
                                                let listImage = images.filter(temp => temp.id != img.id)
                                                setImages(listImage)
                                            }}
                                        >
                                            <AiFillCloseCircle 
                                                className='fill-[#FF0000]'
                                            />
                                        </div>
                                        <ImageCustom 
                                            className="w-full h-full rounded-sm"
                                            src={img.src}
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
                {
                    statusFocus 
                    ? <div className='mt-2 ml-[10px]'>
                        <ButtonCustom 
                            buttonName="Hủy"
                            className="hover:opacity-50 transition-opacity !bg-[#acacac]"
                            onClick={() => {
                                setTextComment('');
                                setStatusFocus(false);
                                removeText();
                                setImages([])
                            }}
                        />
                        <ButtonCustom 
                            buttonName="Bình luận"
                            className="ml-1"
                            onClick={() => {
                                onSubmit && onSubmit(textComment);
                                // setTextComment('');
                                // setStatusFocus(false);
                                // removeText();
                            }}
                        />
                    </div>
                    : ''
                }
            
            </div>
        </div>
    );
};

export default InputComment;