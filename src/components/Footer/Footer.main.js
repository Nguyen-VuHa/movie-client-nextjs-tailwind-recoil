import React from 'react'
import BHDVN from './BHDVN'
import ConnectBHD from './ConnectBHD'
import CustomerCare from './CustomerCare'
import Rules from './Rules'

function FooterMain() {
    return (
        <footer className='grid grid-cols-4 gap-1 max-md:grid-cols-2 max-sm:grid-cols-1 m-0 px-[150px] max-lg:px-[50px] max-md:px-[50px] max-sm:px-[20px]'>
            <Rules />
            <ConnectBHD />
            <CustomerCare />
            <BHDVN />
        </footer>
    )
}

export default FooterMain