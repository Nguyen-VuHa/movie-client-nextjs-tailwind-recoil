import Link from 'next/link'
import React from 'react'

function Breadcrumb() {
  return (
    <div className='mb-5'>
        <nav class="justify-between text-primary-text rounded-lg sm:flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
                <li>
                    <div class="flex items-center">
                        <Link 
                            class="transition-all text-[20px] font-bold ml-1 text-primary-text hover:opacity-80 md:ml-2"
                            href={"/"}
                        >
                            Trang Chủ
                        </Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="mx-1 font-bold text-primary-text md:mx-2 text-[20px] ">Avartar #123456677</span>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default Breadcrumb