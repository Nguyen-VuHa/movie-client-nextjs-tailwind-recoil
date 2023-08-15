import React from 'react'

function HeroLoading() {
    return (
        <div className="w-full h-auto p-5 flex max-sm:flex-col max-sm:p-0">
        <div 
            className="
                skeleton-box
                object-cover 
                min-w-[300px] max-w-[350px] w-[100%]
                h-[420px] max-sm:h-[400px]
                overflow-hidden shrink-0
                rounded-md 
            " 
        />
        <div className="flex flex-col justify-start p-4 leading-normal ml-5 max-sm:m-0 max-sm:p-2">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-primary-content uppercase max-sm:text-center">
                <div 
                    className='skeleton-box w-full h-[1em]'
                />
            </h2>
            <div className='w-full flex items-start mb-5'>
                <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đạo diễn</h3>
                <div 
                    className='skeleton-box w-80 h-[1em]'
                />
            </div>
            <div className='w-full flex items-start mb-5'>
                <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Diễn viên</h3>
                <div 
                    className='skeleton-box w-72 h-[1em]'
                />
            </div>
            <div className='w-full flex items-start mb-5'>
                <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thể loại</h3>
                <div 
                    className='skeleton-box w-72 h-[1em]'
                />
            </div>
            <div className='w-full flex items-start mb-5'>
                <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Thời lượng</h3>
                <div 
                    className='skeleton-box w-60 h-[1em]'
                />
            </div>
            <div className='w-full flex items-start mb-2'>
                <h3 className="min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Đánh giá</h3>
                <div 
                    className='skeleton-box w-40 h-[1em]'
                />
            </div>
            <div className='w-full flex items-start mb-2 max-sm:flex-col'>
                <h3 className="mb-2 min-w-[120px] shrink-0 text-1xl font-bold tracking-tight text-gray-900 dark:text-primary-content mr-5">Chi tiết</h3>
                <div 
                    className='skeleton-box w-72 h-[1em]'
                />
            </div>
            <div className="flex mt-4">
                <div 
                    className='skeleton-box w-40 h-[2.5em]'
                />
                   <div 
                    className='skeleton-box w-40 h-[2.5em] ml-2'
                />
            </div>
        </div>
    </div>
    )
}

export default HeroLoading