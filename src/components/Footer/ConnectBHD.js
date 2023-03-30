import React from 'react'
import Title from './Title'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { SiZalo } from 'react-icons/si'


function ConnectBHD() {
    return (
        <div className='col-span-1 h-max w-full p-5'>
        <Title titleName="Kết nối BHD STAR" />
        <div className='flex'>
            <a 
                href='https://www.facebook.com/BHDStar'
                target="_blank"
                className="
                    group cursor-pointer
                    transition ease-in-out
                    bg-primary-content/20 dark:bg-primary-bg rounded-[50%]
                    p-3
                    hover:-translate-y-1 hover:scale-110 hover:bg-[#3b5999] hover:dark:bg-[#3b5999] duration-500"
                >
                <FaFacebookSquare size={20} className='transition-colors duration-500 fill-[#3b5999] group-hover:fill-white'/>
            </a>
            <a 
                href='https://www.youtube.com/c/BHDStar'
                target="_blank"
                className="
                    group cursor-pointer
                    transition ease-in-out
                    bg-primary-content/20 dark:bg-primary-bg rounded-[50%]
                    p-3
                    hover:-translate-y-1 hover:scale-110 hover:bg-[#cd201f] hover:dark:bg-[#cd201f] duration-500 ml-2"
                >
                <IoLogoYoutube size={20} className='transition-colors duration-500 fill-[#cd201f] group-hover:fill-white'/>
            </a>
            <a 
                href='https://www.instagram.com/bhdstar.cineplex/'
                target="_blank"
                className="
                    group cursor-pointer
                    transition ease-in-out
                    bg-primary-content/20 dark:bg-primary-bg rounded-[50%]
                    p-3
                    hover:-translate-y-1 hover:scale-110 hover:bg-[#e4405f] hover:dark:bg-[#e4405f] duration-500 ml-2"
                >
                <FaInstagram size={20} className='transition-colors duration-500 fill-[#e4405f] group-hover:fill-white'/>
            </a>
            <a 
                href='https://zalo.me/1884424922722396289'
                target="_blank"
                className="
                    group cursor-pointer
                    transition ease-in-out
                    bg-primary-content/20 dark:bg-primary-bg rounded-[50%]
                    p-3
                    hover:-translate-y-1 hover:scale-110 hover:bg-[#006fff] hover:dark:bg-[#006fff] duration-500 ml-2"
                >
                <SiZalo size={20} className='transition-colors duration-500 fill-[#006fff] group-hover:fill-white'/>
            </a>
        </div>
    </div>
    )
}

export default ConnectBHD