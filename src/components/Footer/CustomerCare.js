import React from 'react'
import Item from './Item'
import Title from './Title'

function CustomerCare() {
    return (
        <div className='col-span-1 h-max w-full p-5'>
            <Title titleName="CSKH" />
            <ul>
                <li className='mb-[7px]'> 
                    <Item itemName="Hotline: 1900 1006"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Giờ làm việc 8:00 - 22:00 (Tất cả các ngày bao gồm lễ)"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Email hỗ trợ: cgv.cinema.vn@gmail.com"/>
                </li>
            </ul>
        </div>
    )
}

export default CustomerCare