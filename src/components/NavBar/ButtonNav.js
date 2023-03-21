import Link from 'next/link'
import React from 'react'

function ButtonNav({ menuName, icon }) {
    return (
        <Link 
            href="#"
            className='
            transition-colors
            group flex flex-col justify-center items-center
            w-[100px] h-full 
            cursor-pointer 
            rounded-[6px]
            hover:bg-color-hover
            '
        >
            { icon }
            <div className='transition-colors text-center text-primary-content text-[12px] font-semibold font-primary group-hover:text-primary-text mt-1'>{ menuName }</div>
        </Link>
    )
}

export default ButtonNav