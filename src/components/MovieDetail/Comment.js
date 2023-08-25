import React from 'react'
import InputComment from '../Common/InputComment'
import ViewComment from './ViewComment'
import Rating from './Rating'

function Comment() {
    return (
        <div>
            <Rating />
            <InputComment 
                placeholder="Viết bình luận của bạn"
            />
            <ViewComment />
        </div>
    )
}

export default Comment