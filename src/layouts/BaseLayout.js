import React from 'react'
import HeaderMain from './Header/Header.Main'

function BaseLayout({ children }) {
    return (
        <div className='relative w-full h-[100vh] overflow-hidden bg-primary-bg'>
            <HeaderMain />
            <div className='w-full h-full overflow-y-scroll'>
                {children}
                Footer
            </div>
        </div>
    )
}

export default BaseLayout