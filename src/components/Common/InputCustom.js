import React from 'react'

function InputCustom({ type, id, className, placeholder, errorMessage }) {
    return (
        <div>
            <input 
                type={type || 'text'}
                id={id || ''}
                className={`border
                text-sm rounded-[6px] outline-none
                block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:bg-gray-600 dark:border-gray-500
                ${className || ''}`}
                placeholder={placeholder || 'Nhập text...'}
            />
            {
                errorMessage && <small className="mt-2 italic text-red-600 dark:text-red-600">
                    { errorMessage }
                </small>
            }
            
        </div>
    )
}

export default InputCustom