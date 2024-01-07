import React, { useEffect, useRef, useState } from 'react'
import { ImFilm } from 'react-icons/im'
import ButtonHeader from './Button'

function SelectMovie() {
    const dropBoxRef = useRef(null)
    const buttonRef = useRef(null)
    const [isDropDown, setIsDropDown] = useState(false)

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if(buttonRef.current && !buttonRef.current.contains(e.target))
            { 
                if(dropBoxRef && !dropBoxRef.current.contains(e.target)) {
                    setIsDropDown(false)
                }
            }
        })
        
        return () => document.removeEventListener('click', () => {})
    }, [])
    

    return (
        <div className='relative'>
            <div ref={buttonRef}>
                <ButtonHeader 
                    className='show-left-right show-1' 
                    onClick={() => {
                        setIsDropDown(!isDropDown)
                    }}
                
                >
                    <ImFilm />
                    <span>Tất cả các phim</span>
                </ButtonHeader>
            </div>
            <div 
                className={`absolute z-[100] top-[110%] invisible opacity-0
                border-b-[2px] border-t-[2px] p-2 border-primary
                left-0 w-[150%] rounded-lg space-y-2 ${isDropDown && 'drop-show'}`}
                ref={dropBoxRef}
            >
                <ButtonHeader className={`${isDropDown && 'show-left-right show-1'}`}>
                    <ImFilm />
                    <span>Phim đang chiếu</span>
                </ButtonHeader>
                <ButtonHeader className={`${isDropDown && 'show-left-right show-2'}`}>
                    <ImFilm />
                    <span>Phim sắp chiếu</span>
                </ButtonHeader>
            </div>
        </div>
    )
}

export default SelectMovie