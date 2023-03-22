import React from 'react'

function ButtonCustom({ className, buttonName, onClick, type }) {
    return (
        <button 
            onClick={() => {
                onClick && onClick()
            }}
            type={type}
            className={`
            transition-colors 
            whitespace-nowrap
            text-primary-bg font-primary font-semibold bg-primary-text hover:bg-primary-text/90 focus:outline-none rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center ${className || ''}`}
        >
            { buttonName }
        </button>
    )
}

export default ButtonCustom