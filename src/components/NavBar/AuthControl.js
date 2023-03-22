import React, { useEffect, useState } from 'react'
import ButtonCustom from '../Common/ButtonCustom'

function AuthControl() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(localStorage.getItem('theme') === 'dark' ? true : false)
    }, [])
    
    
    useEffect(() => {
        if(isDarkMode)
            document.getElementsByTagName('html')[0].classList.add("dark");
        else    
            document.getElementsByTagName('html')[0].classList.remove('dark');
    }, [isDarkMode])
    

    return (
        <div className='flex justify-center items-center'>
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
                            {
                                localStorage.setItem('theme', 'light')
                            } else {
                                localStorage.setItem('theme', 'dark')
                            }
                        }} 
                        checked={isDarkMode} 
                        value="" 
                        className="sr-only peer" 
                    />
                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-text"></div>
                </label>
            </div>
        </div>
    )
}

export default AuthControl