import { DatePicker } from 'antd'
import React from 'react'

function InputDatePicker({placeholder, value, onChange, ...rest}) {
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
        </>
    )
}

export default InputDatePicker