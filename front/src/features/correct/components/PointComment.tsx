import React from 'react'
import PointCommentCard from './PointCommentCard'

const PointComment = (props: {
    positiveComment: string,
    challengeComment: string
}) => {
    return (
        <div className='lg:flex lg:h-full w-11/12 items-stretch'>
            <div className='lg:w-1/2 p-2'>
                <PointCommentCard commentTitle='よかったポイント' commentText={props.positiveComment} />
            </div>
            <div className='lg:w-1/2 p-2 lg:mt-0 mt-5'>
                <PointCommentCard commentTitle='修正のポイント' commentText={props.challengeComment} />
            </div>
        </div>
    )
}

export default PointComment