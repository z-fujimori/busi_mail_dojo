
const PointCommentCard = (props: {
    commentTitle: string,
    commentText: string
}) => {
    return (
        <div className='relative whitespace-pre-wrap border-2 border-gray-300 rounded-lg p-4 h-full'>
            <div className='absolute -top-5 left-7 border-2 border-gray-300 rounded-xl p-1 bg-white font-bold'>{props.commentTitle}</div>
            <div className='mt-3 text-start'>{props.commentText}</div>
        </div>
    )
}

export default PointCommentCard