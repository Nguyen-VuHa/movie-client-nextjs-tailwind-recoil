import React, { useState } from 'react'

// CSS classes for different input states
const classNames = {
    error: "bg-red-50 border-red-500 text-primary placeholder-red-700",
    success: "bg-success-text/10 border-success-text text-success-text ",
}

// Defining a functional component called InputCustom
function InputCustom(
    { 
        type,            // Type of the input (default is 'text')
        className,      // Additional CSS classes for the input element
        name,       
        placeholder,     // Placeholder text for the input
        errorMessage,    // Error message to display (if any)
        value,           // Current value of the input
        onChange,   // Function to be executed on input value change
        onBlur,     
        ...rest          // Rest of the props that can be applied to the input element
    }, 
    ref              // Forwarded ref for the input element
) {
    const [isFocus, setIsFocus] = useState(false)

    return (
        <>
            {/* Input element */}
            <input 
                ref={ref} // Attach the forwarded ref to the input
                type={type || 'text'} // If the type prop is not provided, default to 'text'
                className={`
                    ${errorMessage ? classNames.error : value && !errorMessage ? classNames.success : ''} border-b-[1px]
                    text-sm rounded-sm outline-none font-medium text-primary bg-second-bg transition-all
                    ${isFocus || value ? 'border-primary' : 'border-primary-text'}
                    block w-full p-2.5 h-[34px]
                    ${className || ''}`
                } // CSS classes for the input, combining the provided className prop with the default classes based on input state
                name={name} // name element
                placeholder={placeholder || 'Nhập text...'} // If the placeholder prop is not provided, use the default value
                value={value} // Current value of the input
                onChange={(e) => {
                    onChange && onChange(e.target.value) // Execute the onChange function when the input value changes
                }}
                onFocus={() => {
                    setIsFocus(true)
                }}
                onBlur={(e) => {
                    setIsFocus(false)
                    onBlur && onBlur(e)
                }}
                {...rest} // Spread operator to apply any additional props passed to the input element
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

// Export the InputCustom component as a React memoized and ref-forwarded component
export default React.memo(React.forwardRef(InputCustom));
