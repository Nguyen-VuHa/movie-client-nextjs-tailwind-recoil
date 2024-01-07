import React from 'react'

const ButtonHeader = ({ className, onClick, children }) => {
    return (
        <div
            className={`flex items-center ${className} 
            space-x-2 px-4 py-1
            text-[13px] text-primary-text 
            border-[0.5px] rounded-[50px] transition-all
            select-none cursor-pointer hover:text-primary hover:border-primary`}
            onClick={(e) => onClick && onClick(e)}
        >
            { children }
        </div>
    )
}

export default ButtonHeader