"use client"
import React, { useEffect, useState } from 'react'
import ImageCustom from '../Common/ImageCustom'
import ButtonNav from './ButtonNav'
import { SiHomebridge } from 'react-icons/si'
import { FaPallet } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'
import './navbar.scss'
import AuthControl from './AuthControl'
import ModalLoginMain from '../Auth/ModalLogin/ModalLogin.main'
import ModalRegisterMain from '../Auth/ModalRegister/ModalRegister.main'
import { useRecoilValue } from 'recoil'
import { modalState } from '@/atoms/modalState'

const ArrayMenu = [
    {
        id: 1,
        menuName: 'Trang chủ',
        link: "/",
        icon: <SiHomebridge size={22} className='dark:fill-primary-content transition-colors group-hover:fill-primary-text'/>,
        iconActive: <SiHomebridge size={22} className='fill-primary-text transition-colors'/>
    },
    {
        id: 2,
        menuName: 'Rạp BHD',
        link: "/system-cinema",
        icon: <FaPallet size={22} className='dark:fill-primary-content transition-colors group-hover:fill-primary-text'/>,
        iconActive: <FaPallet size={22} className='fill-primary-text transition-colors'/>
    },
    {
        id: 3,
        menuName: 'Lịch chiếu',
        link: "/showtimes",
        icon: <AiOutlineFieldTime size={22} className='dark:fill-primary-content transition-colors group-hover:fill-primary-text'/>,
        iconActive: <AiOutlineFieldTime size={22} className='fill-primary-text transition-colors'/>
    },
]

function NavBarMain() {
    const [menuActive, setMenuAcitve] = useState('')

    const { modalLogin, modalRegister } = useRecoilValue(modalState)

    // render: check url window -> set menu active
    useEffect(() => {
        const windowPath = window.location.pathname;

        if(windowPath === '/')
            setMenuAcitve('Trang chủ')
        
        if(windowPath.includes('/system-cinema'))
            setMenuAcitve('Rạp BHD')

        if(windowPath.includes('/showtimes'))
            setMenuAcitve('Lịch chiếu')
    }, [])

    return (
        <>
            {/* Modal login */}
            <ModalLoginMain />
            {/* Modal Register */}
            <ModalRegisterMain />

            <header 
                className={`
                flex justify-around 
                max-md:justify-between 
                items-center px-[15px] py-[10px] 
                shadow-lg dark:shadow-2xl w-full h-[80px] 
                top-0 left-0 bg-white dark:bg-[#121825]
                fixed z-[999]
            `}
            >
                
                {/* Logo */}
                <a href="/" className='max-md:hidden'>
                    <ImageCustom 
                        src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
                        className='mobile:hidden max-md:w-[200px] lg:w-[220px] h-[55px]'
                        
                    />
                </a>
                
                <nav className='flex justify-center items-center flex-shrink-0 h-[100%] w-[auto]'>
                    {
                        ArrayMenu.map(arrM => {
                            return <ButtonNav 
                                key={arrM.id}
                                menuName={arrM.menuName}
                                icon={menuActive === arrM.menuName ? arrM.iconActive : arrM.icon}
                                link={arrM.link}
                                active={menuActive === arrM.menuName}
                                onClick={() => {
                                    setMenuAcitve(arrM.menuName)
                                }}
                            />
                        })
                    }
                </nav>

                {/* Control User */}
                <AuthControl />
            </header>
        </>
        
    )
}

export default NavBarMain