"use client"

import React, { useRef, useState } from 'react'
import './_header.scss'
import { Button, ButtonIcon } from '@/components/Common/Button.Custom'
import { CgMenuRight } from "react-icons/cg";
import SideBar from './SideBar';

function HeaderMain() {
    const btnMenuRef = useRef(null)
    const [isSidebar, setIsSidebar] = useState(0)

    return (
        <>
            <SideBar 
                menuRef={btnMenuRef}
                isSideBar={isSidebar}
                onHiden={() => {setIsSidebar(2)}}
            />
            <div className='wrap-header'>
                <div className='flex justify-between items-center'>
                    <div>Logo</div>
                    <div className='flex space-x-1'>
                        <Button
                            className="px-10"
                        >
                            Sign In
                        </Button>
                        <Button outLine className="px-10">
                            Sign Up
                        </Button>
                        <div className='w-[0.5px] bg-primary-text show-right-left show-3'></div>
                        <ButtonIcon 
                            ref={btnMenuRef}
                            onClick={() => {
                                setIsSidebar(1)
                            }}
                        >
                            <CgMenuRight size={22} className='hover:text-primary transition-all text-primary-text'/>
                        </ButtonIcon>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default HeaderMain