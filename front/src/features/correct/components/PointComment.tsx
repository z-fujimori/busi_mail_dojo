import React from 'react'
import PointCommentCard from './PointCommentCard'

const PointComment = (props: {
    positiveComment: string,
    challengeComment: string
}) => {
    return (
        <div className='flex h-full items-stretch'>
            <div className='w-1/2 m-2'>
                <PointCommentCard commentTitle='よかったポイント' commentText={props.positiveComment} />
            </div>
            <div className='w-1/2 m-2'>
                <PointCommentCard commentTitle='修正のポイント' commentText={props.challengeComment} />
            </div>
        </div>
    )
}

export default PointComment