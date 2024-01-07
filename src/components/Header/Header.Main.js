import React from 'react'
import ImageCustom from '../Common/ImageCustom'
import { ImFilm } from "react-icons/im";
import { CgMenuRight } from "react-icons/cg";
import { RiLoginCircleLine  } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import './header.animation.scss'
import ButtonHeader from './Button';
import SelectMovie from './SelectMovie';
import SignUp from './SignUp';

function HeaderMain() {
  return (
    <div className='flex justify-between items-center px-20 py-3 backdrop-blur header-show'>
        <div className='flex items-center space-x-10'>
            <a href="/" className='show-left-right show-2'>
                <ImageCustom 
                    src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
                    className='w-[150px] h-[40px]'
                />
            </a>
            <SelectMovie />
        </div>
        <div className='flex items-center space-x-2'>
            <SignUp />

            <ButtonHeader
                className="show-right-left show-2 !text-black bg-primary border-primary hover:opacity-80"
            >
                <RiLoginCircleLine />
                <span>Đăng nhập</span>
            </ButtonHeader>
            <div className='w-[1px] h-[20px] bg-primary-text show-right-left show-3'></div>
            <button 
                className={`
                whitespace-nowrap show-right-left show-4
                text-white font-primary font-semibold 
                border-white p-2 text-center 
                inline-flex justify-center items-center`}
            >
                <CgMenuRight size={22} className='hover:text-primary transition-all text-primary-text'/>
            </button>
        </div>  
    </div>
  )
}

export default HeaderMain