import React from 'react'

export const Button = ({ className, onClick, children, outLine }) => {
    return (
        <div
            className={`flex items-center ${className || ''} 
            space-x-2 px-8 show-right-left show-2 
            text-[13px] ${outLine ? 'text-primary-text border-primary hover:bg-primary hover:text-white' : 'border-primary text-white bg-primary hover:opacity-80'}
            border-[0.5px] rounded-[12px] !transition-all !duration-300
            select-none cursor-pointer`}
            onClick={(e) => onClick && onClick(e)}
        >
            { children }
        </div>
    )
}


const ButtonIconRef = ({ className, onClick, children }, ref) => {
    return <button 
        ref={ref}
        className={` ${className || ''}
        whitespace-nowrap show-right-left show-4
        text-white font-primary font-semibold 
        border-white p-2 text-center !duration-300
        inline-flex justify-center items-center`}
        onClick={(e) => {
            onClick && onClick(e)
        }}
    >
        { children }
    </button>
}

export const ButtonIcon = React.forwardRef(ButtonIconRef)