import React from 'react'
import Item from './Item'
import Title from './Title'

function BHDVN() {
    return (
        <div className='col-span-1 h-max w-full p-5'>
            <Title titleName="BHD Việt Nam" />
            <ul>
                <li className='mb-[7px]'> 
                    <Item itemName="Giới thiệu"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Tiện ích Online"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Thẻ quà tặng"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Tuyển dụng"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Liên hệ quảng cáo BHD"/>
                </li>
            </ul>
        </div>
    )
}

export default BHDVN