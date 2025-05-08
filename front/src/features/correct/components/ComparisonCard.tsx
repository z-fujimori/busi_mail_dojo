import React from 'react'

const ComparisonCard = (props: {
    text: string,
}) => {
    return (
        <div className="whitespace-pre-wrap text-start lg:text-sm text-xs pt-5 pl-5 pr-3 pb-3 lg:w-[429px] ">
            {props.text}
        </div>
    )
}

export default ComparisonCard