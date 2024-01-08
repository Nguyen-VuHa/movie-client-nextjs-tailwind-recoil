"use client"
import React, { useEffect } from 'react';

// Defining a functional component called ModalCustom
function ModalCustom({ 
    status,          // Boolean indicating whether the modal is open (true) or closed (false)
    onHidden,        // Function to be executed when the modal is hidden (closed)
    children,        // Content to be displayed inside the modal
    maxWidth        // Maximum width of the modal (optional)
}) {

    // useEffect hook to handle the overflow hidden for the <html> tag when the modal is open
    useEffect(() => {
        // Add "overflow-hidden" class to the <html> tag when the modal is open
        if (status) {
            document.getElementsByTagName('html')[0].classList.add("overflow-hidden");
        } else {
            // Remove "overflow-hidden" class from the <html> tag when the modal is closed
            document.getElementsByTagName('html')[0].classList.remove("overflow-hidden");
        }

        // Return a cleanup function to remove "overflow-hidden" class when the component unmounts
        return () => { 
            document.getElementsByTagName('html')[0].classList.remove("overflow-hidden");
        }
    }, [status]);
    
    return (
        <div 
            className={`fixed w-[100vw] h-[100vh] top-0 left-0 z-50 justify-center items-center
            modal-custom
            ${status ? 'show' : '' } 
            overflow-x-hidden overflow-y-auto`}
        >
            {/* The overlay div (clicking this will close the modal) */}
            <div onClick={() => onHidden && onHidden()} className='absolute top-0 left-0 w-full h-full bg-black/30'/>
            <div className={`relative w-full h-full modal-content ${maxWidth || 'max-w-md'} ${status ? 'show' : '' } md:h-auto`}>
                <div className="relative rounded-lg shadow">
                    {/* Close button */}
                    <button onClick={() => onHidden && onHidden()} className="transition-all z-[2] absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    {/* Content inside the modal */}
                    { children }
                </div>
            </div>
        </div> 
    )
}

// Export the ModalCustom component as the default export
export default ModalCustom;
