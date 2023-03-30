import React from 'react'
import { BiChevronsRight } from 'react-icons/bi'
import Item from './Item'

import Title from './Title'

function Rules() {
    return (
        <div className='col-span-1 h-max w-full p-5'>
            <Title titleName="Điều khoản" />
            <ul>
                <li className='mb-[7px]'> 
                    <Item itemName="Điều khoản chung"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Điều khoản giao dịch"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Chính sách thanh toán"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Chính sách bảo mật"/>
                </li>
                <li className='mb-[7px]'>
                    <Item itemName="Câu hỏi thường gặp"/>
                </li>
            </ul>
        </div>
    )
}

export default Rules