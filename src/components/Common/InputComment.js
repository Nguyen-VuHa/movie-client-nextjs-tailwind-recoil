"use client"

import React, { useRef, useState, useEffect } from 'react';
import ButtonCustom from './ButtonCustom';
import ImageCustom from './ImageCustom';

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

    console.log(images)

    const updateImage = (content) => {
        const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
        const match = content.match(imageUrlRegex);

        if (match && match.length > 0) {
            let listImage = images.concat(match[0])
            setImages(listImage)
            let textClear = textComment.replace(match[0], '')
            setTextComment(textClear)
            textCommentRef.current.textContent = textClear
        }
    };


    return (
        <div className='w-full box-content flex'>
            <img  
                className='rounded-[50%] w-[35px] h-[35px] text-center shrink-0' 
                alt="Not Avartar"
                src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1675921656/image_system/v0uc2orsvr1sslulldjd.jpg"
            />
            <div className='w-full'>
                <div 
                    className={`ml-[10px] outline-none border-b-2 pb-1 ${textComment ? 'before:content-none' : 'before:content-[attr(placeholder)]'}  before:color-primary-text before:cursor-text`}
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
                />
                {
                    images.length > 0 && 
                    <div className='flex m-2 p-2 border-2 rounded-sm'>
                        {
                            images.map((img, idx) => {
                                return <div className="w-[50px] h-[50px] rounded-sm overflow-hidden cursor-pointer">
                                    <ImageCustom 
                                        key={idx}
                                        className="w-full h-full rounded-sm"
                                        src={img}
                                    />
                                </div>
                            })
                        }
                    </div>
                }
                {
                    statusFocus 
                    ? <div className='mt-2 ml-[10px]'>
                        <ButtonCustom 
                            buttonName="Hủy"
                            className="out-line bg-[#acacac] hover:bg-[#acacac]  hover:opacity-50 transition-opacity"
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