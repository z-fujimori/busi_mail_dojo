import React from 'react'

const ComparisonCard = (props: {
    text: string,
}) => {
    return (
        <div className="whitespace-pre-wrap text-start text-sm p-2 w-[439px]">
            {props.text}
        </div>
    )
}

export default ComparisonCard