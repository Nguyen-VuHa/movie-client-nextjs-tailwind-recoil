"use client"

import React from 'react'
import ImageCustom from '../Common/ImageCustom'
import ButtonNav from './ButtonNav'
import { SiHomebridge } from 'react-icons/si'
import { FaPallet } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'

function NavBarMain() {
    return (
        <header className='flex justify-around items-center px-[15px] py-[10px] shadow-2xl w-full h-[80px] absolute top-0 left-0'>
            {/* Logo */}
            <a href="/">
                <ImageCustom 
                    src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
                    className='mobile:hidden md:w-[170px] lg:w-[220px] h-[100%]'
                />
            </a>
            
            <nav className='flex justify-center items-center flex-shrink-0 h-[100%] w-[auto] mx-[20px]'>
                <ButtonNav 
                    menuName="Trang chủ"
                    icon={<SiHomebridge size={22} className='fill-primary-content transition-colors group-hover:fill-primary-text'/>
                    }
                />
                <ButtonNav 
                    menuName="Rạp BHD"
                    icon={<FaPallet size={22} className='fill-primary-content transition-colors group-hover:fill-primary-text'/>
                    }
                />
                <ButtonNav 
                    menuName="Lịch chiếu"
                    icon={<AiOutlineFieldTime size={22} className='fill-primary-content transition-colors group-hover:fill-primary-text'/>
                    }
                />
            </nav>

            {/* Control User */}
            <div>
                <ButtonNav 
                    menuName="User control"
                />
            </div>
        </header>
    )
}

export default NavBarMain