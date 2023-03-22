import React from 'react'

function ButtonCustom({ className, buttonName, onClick }) {
    return (
        <button 
            className={className || ''}
            onClick={() => {
                onClick && onClick()
            }}
        >
            { buttonName }
        </button>
    )
}

export default ButtonCustom