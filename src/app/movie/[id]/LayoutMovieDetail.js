import Comment from '@/components/MovieDetail/Comment'
import DetailMovie from '@/components/MovieDetail/DetailMovie'
import ShowTime from '@/components/MovieDetail/ShowTime'
import React from 'react'


function LayoutMovieDetail() {
    return (
        <div>
            <DetailMovie />
            <div className='container grid grid-cols-5 max-sm:grid-cols-1 max-sm:px-[20px]'>
                <div className="col-span-3">
                    <Comment />
                </div>
                <div className="col-span-2">
                    <ShowTime />
                </div>
            </div>
        </div>
    )
}

export default LayoutMovieDetail