import React from 'react'

// CSS classes for different input states
const classNames = {
    error: "bg-red-50 border-red-500 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500",
    success: "bg-success-text/10 border-success-text text-success-text",
}

// Defining a functional component called InputAreaCustom
function InputAreaCustom(
    { 
        type,            // Type of the input (default is 'text')
        className,       // Additional CSS classes for the textarea element
        placeholder,     // Placeholder text for the textarea
        errorMessage,    // Error message to display (if any)
        value,           // Current value of the textarea
        onChange,        // Function to be executed on textarea value change
        ...rest          // Rest of the props that can be applied to the textarea element
    }, 
    ref              // Forwarded ref for the textarea element
) {
    return (
        <>
            {/* Textarea element */}
            <textarea 
                ref={ref} // Attach the forwarded ref to the textarea
                type={type || 'text'} // If the type prop is not provided, default to 'text'
                className={`
                    ${errorMessage ? classNames.error : value && !errorMessage ? classNames.success : ''} border-[1px]
                    text-sm rounded-sm outline-none font-medium bg-second-bg
                    block w-full p-2.5
                    ${className || ''}`
                } // CSS classes for the textarea, combining the provided className prop with the default classes based on input state
                placeholder={placeholder || 'Nhập text...'} // If the placeholder prop is not provided, use the default value
                value={value} // Current value of the textarea
                onChange={(e) => {
                    onChange && onChange(e.target.value) // Execute the onChange function when the textarea value changes
                }}
                {...rest} // Spread operator to apply any additional props passed to the textarea element
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

// Export the InputAreaCustom component as a React memoized and ref-forwarded component
export default React.memo(React.forwardRef(InputAreaCustom));
