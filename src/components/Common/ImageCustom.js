// Importing necessary modules and components
import { pushImageApp } from "@/redux/reducers/config.reducer";
import Image from "next/legacy/image";
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

// Defining a functional component called ImageCustom
function ImageCustom({ 
    src,           // Image source URL
    alt,           // Alternate text for the image
    className,     // Additional CSS classes for the container element
    style         // Additional inline styles for the container element
}) {
    const dispatch = useDispatch()

    const configState = useSelector(state => state.configState)
    const { imagesApp } = configState;

    const isImageExists = imagesApp.filter(img => img === src).length > 0
    const [isLoading, setIsLoading] = useState(!isImageExists); // State to track the image loading status

    // Callback function to set isLoading to false when the image is loaded
    const handleImageLoaded = useCallback(() => {
        setIsLoading(false);
        if (!isImageExists) {
            dispatch(pushImageApp(src))
        }
    });
    
    return (
        <div 
            className={`relative ${className} space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center overflow-hidden`}
        >
            {  isLoading && // Display a loading placeholder if the image is still loading
                <div 
                    className={`${isLoading ? `animate-pulse space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center
                    flex items-center justify-center 
                    bg-primary-content rounded dark:bg-gray-700` : ''} ${className ? className : ''}`}
                    style={style}
                >
                    {/* Placeholder SVG for the loading state */}
                    <svg className="w-8 h-8 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                    </svg>
                </div>
            }
            
            {/* The Image component from Next.js to render the actual image */}
            {
                src && <Image
                    loader={() => src} // Loader function that returns the image URL
                    src={isImageExists && isImageExists[0] || src} // Image source URL
                    alt={alt} // Alternate text for the image
                    layout='fill' // Fill the container with the image
                    onLoadingComplete={handleImageLoaded} // Callback when the image finishes loading
                    style={{ backgroundSize: "cover",  opacity: isLoading ? 0 : 1  }} // Conditional style for the image visibility
                    unoptimized // Skip image optimization
                    priority // Mark the image as a priority for preloading
                />
            }
            
       </div>
    )
}

// Export the ImageCustom component as the default export
export default ImageCustom;
