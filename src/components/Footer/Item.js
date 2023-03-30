import React from 'react'
import { BiChevronsRight } from 'react-icons/bi'

function Item({ itemName }) {
    return (
        <div className='group cursor-pointer flex items-center transition-all hover:pl-2 py-1'>
            <BiChevronsRight className='mr-1 flex-shrink-0 fill-primary-bg dark:fill-primary-content group-hover:fill-primary-text' />
            <p className='font-primary text-primary-bg dark:text-primary-content font-bold text-[16px] group-hover:text-primary-text '>{ itemName }</p>
        </div>
    )
}

export default Item