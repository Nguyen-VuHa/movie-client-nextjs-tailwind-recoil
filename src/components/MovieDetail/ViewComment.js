import React from 'react'
import ParentComment from './ParentComment'
import { useRecoilValue } from 'recoil'
import { commentMovieState } from '@/atoms/movieState'

function ViewComment() {
    const commentMovie = useRecoilValue(commentMovieState)
    const { comments } = commentMovie
    

    return (
        <div className='mt-4 w-full'>
            {
                comments && comments.map(cm => {
                    return <ParentComment key={cm.id} data={cm}/>
                })
            }
        </div>
    )
}

export default ViewComment