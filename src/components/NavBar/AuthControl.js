import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ButtonCustom from '../Common/ButtonCustom'
import { TiThMenu } from 'react-icons/ti'

function AuthControl() {
    const groupBoxRef = useRef(null);
    const buttonMenuRef = useRef(null);
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false)

    useLayoutEffect(() => {
        setIsDarkMode(localStorage.getItem('theme') === 'dark' ? true : false)
    }, [])
    
    
    useEffect(() => {
        if(isDarkMode)
            document.getElementsByTagName('html')[0].classList.add("dark");
        else    
            document.getElementsByTagName('html')[0].classList.remove('dark');
    }, [isDarkMode]);


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if(buttonMenuRef.current && !buttonMenuRef.current.contains(e.target))
            { 
                if(groupBoxRef && !groupBoxRef.current.contains(e.target)) {
                    setToggleMenu(false);
                }
            }
        });


        return () => document.removeEventListener('click', () => {});
    }, [])
    
    

    return (
        <div className='flex justify-center items-center lg:flex relative' ref={groupBoxRef}>
            <div className='max-md:flex hidden'>
                <button 
                    ref={buttonMenuRef}
                    onClick={() => {
                        setToggleMenu(!toggleMenu);
                    }}
                    className={`
                    group
                    transition-all
                    whitespace-nowrap
                    w-[50px] h-[50px]
                    text-primary-bg font-primary font-semibold 
                    border-primary-text border-[1px] 
                    hover:bg-primary-text/90 focus:outline-none 
                    ${toggleMenu ? 'border-primary-text bg-primary-text/90 hover:opacity-80' : ''}
                    rounded-md text-sm p-2 text-center 
                    inline-flex justify-center items-center`}
                >
                    <TiThMenu 
                        size={22} 
                        className={`transition-all duration-300
                        group-hover:fill-primary-bg 
                        ${toggleMenu ? 'fill-primary-bg dark:fill-primary-bg' : 'dark:fill-primary-text fill-primary-text'}
                        `} 
                    />
                </button>
            </div>
            <div 
                className={`flex justify-center items-center lg:flex
                ${toggleMenu ? 'max-md:absolute' : 'max-md:hidden'} max-md:top-[110%] max-md:right-0
                max-md:border-[1px] max-md:p-3 max-md:rounded-[6px]
                bg-white dark:bg-primary-bg max-md:shadow-xl
                `}
            >
                <ButtonCustom 
                    buttonName="Đăng nhập"
                />
                <ButtonCustom 
                    className='ml-1'
                    buttonName="Đăng ký"
                />

                <div className="h-[25px] w-[2px] mx-2 bg-primary-text border-0 dark:bg-gray-700" />

                <div className='flex justify-center items-center'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            onChange={() => {
                                setIsDarkMode(!isDarkMode)
                                if(isDarkMode)
                                    localStorage.setItem('theme', 'light')
                                else
                                    localStorage.setItem('theme', 'dark')
                            }} 
                            checked={isDarkMode} 
                            value="" 
                            className="sr-only peer" 
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-text"></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AuthControl