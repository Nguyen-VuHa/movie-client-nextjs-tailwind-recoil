import { DatePicker } from 'antd'
import React from 'react'

function InputDatePicker({placeholder, value, onChange, ...rest}) {
    return (
        <>  
            <DatePicker 
                className='w-full h-[34px] rounded-sm'  
                placeholder={placeholder || 'Select Date Picker'}
                allowClear={false}    
                value={value}
                onChange={(value) => {
                    onChange && onChange(value)
                }}  
                {...rest}
            />
        </>
    )
}

export default InputDatePicker