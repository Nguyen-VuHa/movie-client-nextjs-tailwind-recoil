import { ButtonIcon } from '@/components/Common/Button.Custom'
import React, { useEffect, useRef } from 'react'
import { TfiClose } from "react-icons/tfi";
import SideBarButton from './SideBar.Button';
import { GiFilmSpool } from "react-icons/gi";
import { SiThemoviedatabase } from "react-icons/si";
import { MdMovieFilter } from "react-icons/md";
import { GiTheater } from "react-icons/gi";
import ImageCustom from '@/components/Common/Image.Custom';


function SideBar({ isSideBar, onHiden, menuRef }) {
    const sideBarRef = useRef(null)

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target) && sideBarRef.current && !sideBarRef.current.contains(e.target)) {
                onHiden()
            }
        })

        return () => {
            window.removeEventListener("click", () => {})
        }
    }, [])
    

    return (
        <div 
            ref={sideBarRef}
            className={`absolute z-10 right-[-100%] 
            ${isSideBar === 1 && 'sidebar-fade-in'} ${isSideBar === 2 && 'sidebar-fade-out'} 
            top-0 w-[30%] h-[100vh] px-3 py-2 bg-second-bg text-primary drop-shadow-2xl select-none`}
        >
            <div className='flex justify-between items-center'>
                <ButtonIcon 
                    onClick={() => onHiden && onHiden()}
                >
                    <TfiClose size={22} className='hover:text-primary transition-all text-primary-text'/>
                </ButtonIcon>
                <ImageCustom 
                    src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
                    className='w-[150px] h-[35px]'
                />
            </div>
            <div className='p-3 w-full side-bar space-y-3'>
                <SideBarButton 
                    sidebarName="BHD Star"
                    icon={<GiFilmSpool />}
                />
                <SideBarButton 
                    sidebarName="Phim Đang Chiếu"
                    icon={<SiThemoviedatabase />}
                />
                <SideBarButton 
                    sidebarName="Phim Sắp Chiếu"
                    icon={<MdMovieFilter />}
                />
                <SideBarButton 
                    sidebarName="Hệ Thống Rạp"
                    icon={<GiTheater />}
                />
            </div>
        </div>
    )
}

export default SideBar