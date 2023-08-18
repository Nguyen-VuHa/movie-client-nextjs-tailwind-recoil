import React from 'react'

function Breadcrumb() {
  return (
    <div className='container'>
        <nav class="justify-between px-4 py-3 text-primary-text rounded-lg sm:flex sm:px-5" aria-label="Breadcrumb">
            <ol class="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
                <li>
                <div class="flex items-center">
                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Trang Chủ</a>
                </div>
                </li>
                <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="mx-1 text-sm font-medium text-gray-500 md:mx-2 dark:text-gray-400">Avartar #123456677</span>
                </div>
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default Breadcrumb