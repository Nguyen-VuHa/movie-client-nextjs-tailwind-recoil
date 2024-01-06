import React from 'react'
import ImageCustom from '../Common/ImageCustom'
import { ImFilm } from "react-icons/im";
import { CgMenuRight } from "react-icons/cg";
import { RiLoginCircleLine  } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import './header.animation.scss'

function HeaderMain() {
  return (
    <div className='flex justify-between items-center px-20 py-3 backdrop-blur header-show'>
        <div className='flex items-center space-x-10 show-transform translate-x-[-100px] opacity-0 invisible'>
            <a href="/">
                <ImageCustom 
                    src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
                    className='w-[150px] h-[40px]'
                />
            </a>

            <div 
                className='flex items-center opacity-show
                space-x-2 px-4 py-1
                text-[13px] text-white 
                border-[1px] rounded-[50px] transition-all
                select-none cursor-pointer hover:text-primary hover:border-primary'
            >
                <ImFilm />
                <span>Tất cả các phim</span>
            </div>              
        </div>
        <div className='flex items-center space-x-2 show-transform translate-x-[100px] opacity-0 invisible '>
            <div 
                className='flex items-center opacity-show animation-delay-200
                space-x-2 px-4 py-1 
                text-[13px] text-white 
                border-[1px] rounded-[50px] transition-all
                select-none cursor-pointer hover:text-primary hover:border-primary'
            >
                <FaUserPlus />
                <span>Sign Up</span>
            </div> 
            <div 
                className='flex items-center opacity-show animation-delay-200
                space-x-2 px-4 py-1
                text-[13px] text-black bg-primary border-primary
                border-[1px] rounded-[50px] 
                select-none cursor-pointer hover:opacity-80 transition-all'
            >
                <RiLoginCircleLine />
                <span>Sign In</span>
            </div> 
            <div className='w-[1px] h-[20px] bg-[#acacac] opacity-show animation-delay-200'></div>
            <button 
                className={`
                whitespace-nowrap opacity-show
                text-white font-primary font-semibold 
                border-white p-2 text-center 
                inline-flex justify-center items-center`}
            >
                <CgMenuRight size={22} className='hover:text-primary transition-all'/>
            </button>
        </div>  
    </div>
  )
}

export default HeaderMain