import React from 'react'
import HeaderMain from './Header/Header.Main'

function BaseLayout({ children }) {
    return (
        <div className='relative w-full min-h-[100vh] overflow-hidden bg-primary-bg'>
            <HeaderMain />
            {children}
            Footer
        </div>
    )
}

export default BaseLayout