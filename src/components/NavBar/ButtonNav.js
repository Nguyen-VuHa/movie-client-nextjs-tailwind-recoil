import Link from 'next/link'
import React from 'react'

const classTextActive = 'text-primary-text';
const classBackgroundActive = 'dark:bg-color-hover';

function ButtonNav({ menuName, icon, link, active, onClick }) {

    return (
        <Link 
            onClick={() => {
                onClick && onClick();
            }}
            href={link || "#"}
            className={
                `   
                    max-sm:w-[75px]
                    transition-colors
                    group flex flex-col justify-center items-center
                    w-[100px] h-full 
                    cursor-pointer 
                    rounded-[6px]
                    :is(dark:hover:bg-color-hover) ${active ? classBackgroundActive : ''}
                `
            }
        >
            { icon }
            <div 
                className={`
                transition-colors 
                text-center ${active ? classTextActive : 'dark:text-primary-content'} text-[12px] 
                font-semibold font-primary 
                group-hover:text-primary-text mt-1
                `}
            >
                { menuName }
            </div>
        </Link>
    )
}

export default ButtonNav