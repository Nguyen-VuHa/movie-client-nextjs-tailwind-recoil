import React from 'react'

const classNames = {
    error: "bg-red-50 border-red-500 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500",
    success: "bg-success-text/10 border-success-text text-success-text ",
}

function InputCustom({ type, id, className, placeholder, errorMessage, value, onChange, ...rest }, ref) {
    return (
        <>
            <input 
                ref={ref}
                type={type || 'text'}
                // id={id || ''}
                className={`${errorMessage ? classNames.error : value && !errorMessage ? classNames.success : ':is(dark:placeholder-gray-400) dark:text-white dark:border-gray-500'} border
                text-sm rounded-[6px] outline-none font-medium
                block w-full p-2.5 dark:bg-gray-600
                ${className || ''}`}
                placeholder={placeholder || 'Nhập text...'}
                value={value}
                onChange={(e) => {
                    onChange && onChange(e.target.value)
                }}
                {...rest}
            />
            {
                errorMessage && <small className="mt-2 italic font-medium text-red-600 dark:text-red-500">
                    { errorMessage }
                </small>
            }
        </>
    )
}

export default React.memo(React.forwardRef(InputCustom))