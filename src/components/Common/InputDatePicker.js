import { DatePicker } from 'antd'
import React from 'react'

function InputDatePicker({errorMessage, placeholder, value, onChange, ...rest}) {
    return (
        <>  
            <DatePicker 
                className='w-full h-[34px] rounded-sm bg-second-bg bg-none'  
                dropdownClassName='bg-second-bg'
                placeholder={placeholder || 'Select Date Picker'}
                allowClear={false}    
                value={value}
                onChange={(value) => {
                    onChange && onChange(value)
                }}  
                activeBorderColor="red"
                {...rest}
            />
            {
                errorMessage && // Display the error message (if provided)
                <small className="mt-2 italic font-medium text-red-600 dark:text-red-500">
                    {errorMessage}
                </small>
            }
        </>
    )
}

export default InputDatePicker