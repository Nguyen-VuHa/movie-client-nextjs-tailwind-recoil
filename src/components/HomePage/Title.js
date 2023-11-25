import React from 'react'

function Title({ title, className }) {
    return (
        <h1
            className={`font-title text-[45px] max-sm:text-[28px] font-bold text-primary-text ${className || ''}`}
        >
            { title }
        </h1>
    )
}

export default Title