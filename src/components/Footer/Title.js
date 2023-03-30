import React from 'react'
import { GiImpactPoint } from 'react-icons/gi'

function Title({ titleName }) {
    return (
        <div className='flex items-center mb-[20px]'>
            <GiImpactPoint className='fill-primary-text mr-2' />
            <h1 
                className='font-primary font-bold text-primary-text 
                text-[20px] uppercase'
            >
                { titleName }
            </h1>
        </div>
    )
}

export default Title