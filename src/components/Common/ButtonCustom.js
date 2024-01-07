// Importing necessary modules and components
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

// Defining a functional component called ButtonCustom
function ButtonCustom({ 
    className,        // Additional CSS classes for the button
    buttonName,       // Text to be displayed on the button
    onClick,          // Function to be executed when the button is clicked
    type,             // Type of the button (default is 'button')
    loading,          // Boolean indicating whether the button is in loading state or not
    loadingText,      // Text to be displayed when the button is in loading state
    ...rest           // Rest of the props that can be applied to the button element
}) {
    return (
        <button 
            {...rest} // Spread operator to apply any additional props passed to the button element
            onClick={() => {
                if (!loading) // If the button is not in loading state, execute the onClick function
                    onClick && onClick();
            }}
            type={type || 'button'} // If the type prop is not provided, default to 'button'
            className={`
                transition-colors 
                whitespace-nowrap
                text-primary-bg font-primary font-semibold bg-primary hover:bg-primary/60 focus:outline-none rounded-md text-sm px-5 py-2 text-center inline-flex justify-center items-center ${className || ''}`
            } // CSS classes for the button, combining the provided className prop with the default classes
        >
            { loading ? // If the button is in loading state, render the loading spinner and loadingText (if available)
                <div className='flex'>
                    <RotatingLines
                        strokeColor="#121825"
                        strokeWidth="5"
                        animationDuration="1"
                        width="22"
                        visible={true}
                    />
                    { loadingText && <p className='text-primary-bg ml-2'>{loadingText}</p> }
                </div>
                : // If the button is not in loading state, render the buttonName
                buttonName 
            }
        </button>
    );
}

// Export the ButtonCustom component as the default export
export default ButtonCustom;
