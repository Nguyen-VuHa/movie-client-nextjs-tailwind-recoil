import React, { useEffect, useRef, useState } from 'react'
import { AiFillBell } from "react-icons/ai";
import ImageCustom from '../Common/ImageCustom';

const imageDefault = "https://media.istockphoto.com/id/1311285048/vi/vec-to/avatar-m.jpg?s=170667a&w=0&k=20&c=8RuJ-HbNKnf4SK3Sf9leGyhxuzc73Ipa_vQMajFga3I="
function UserInfo({ user }) {
    const groupBoxRef = useRef(null)
    const buttonMenuRef = useRef(null)
    
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if(buttonMenuRef.current && !buttonMenuRef.current.contains(e.target))
            { 
                if(groupBoxRef && !groupBoxRef.current.contains(e.target)) {
                    setToggleMenu(false)
                }
            }
        });


        return () => document.removeEventListener('click', () => {})
    }, [])

    return (
        <div className='w-full flex justify-end'>
            <div 
                className={`flex cursor-pointer select-none rounded-s-[20px] rounded-e-[20px] border-2 p-[3px]
                hover:bg-[#acacac]/30 transition dark:hover:bg-primary-content/50 relative ${toggleMenu ? 'bg-[#acacac]/30' : ''}`}
            >
                <div 
                    className={`flex items-center w-full ${toggleMenu ? 'hover:opacity-80' : ''}`}
                    ref={buttonMenuRef}
                    onClick={() => {
                        setToggleMenu(!toggleMenu)
                    }}
                >
                    <ImageCustom
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                        src={user.avartar && user.avartar || imageDefault} alt=""
                    />
                    <span className='mx-2 text-[13px] font-bold dark:text-primary-text text-orange-txt truncate max-w-[100px]'>{user.fullname}</span>
                </div>

                <div 
                    ref={groupBoxRef}
                    className={`absolute top-[110%] right-0 bg-white 
                    rounded border-2 w-[250px] p-1 h-auto flex-column
                    ${toggleMenu ? '' : 'hidden'}
                    `}

                >
                    <div className='w-full text-[13px] px-2 py-1 shadow rounded hover:bg-[#acacac]/50 transition'>
                        Control
                    </div>
                    <div className='w-full text-[13px] px-2 py-1 mt-1 shadow hover:bg-[#acacac]/50 transition'>
                        Control
                    </div>
                    <hr className='mt-2'/>
                    <div className='w-full text-[13px] px-2 py-1 mt-1 shadow hover:bg-[#acacac]/50 transition'>
                        Log Out
                    </div>
                </div>
            </div>
            <div 
                className='w-[42px] h-[42px] rounded-[50%] flex justify-center items-center border-2 cursor-pointer ml-1
                    hover:bg-[#acacac]/50 transition dark:hover:bg-primary-content/50'
            >
                <AiFillBell size={20} className='dark:fill-primary-text fill-orange-txt'/>
            </div>
        </div>
    )
}

export default UserInfo