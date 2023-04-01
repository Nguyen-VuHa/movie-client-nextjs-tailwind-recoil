import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function ButtonCustom({ className, buttonName, onClick, type, loading, loadingText, ...rest }) {
    return (
        <button 
            {...rest}
            onClick={() => {
                if(!loading)
                    onClick && onClick()
            }}
            type={type || 'button'}
            className={`
            transition-colors 
            whitespace-nowrap
            text-primary-bg font-primary font-semibold bg-primary-text hover:bg-primary-text/90 focus:outline-none rounded-md text-sm px-5 py-2.5 text-center inline-flex justify-center items-center ${className || ''}`}
        >
            { loading ? <div className='flex'>
                <RotatingLines
                    strokeColor="#121825"
                    strokeWidth="5"
                    animationDuration="1"
                    width="22"
                    visible={true}
                />
                { loadingText &&  <p className='text-primary-bg ml-2'>{ loadingText }</p> }
            </div> : buttonName }
        </button>
    )
}

export default ButtonCustom