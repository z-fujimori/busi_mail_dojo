import React from 'react'
import { useLocation } from 'react-router-dom'
import { ReturnText } from './types/returnText';
import Comparison from './components/Comparison';
import NextButton from './components/NextButton';
import PointComment from './components/PointComment';
import Summary from './components/ Summary';

type ResultState = {
    result: {
        text: ReturnText;
    }
}

const Correct = () => {
    const location = useLocation();
    const { result } = location.state as ResultState;

    return (
        <div className="p-4 space-y-4 flex flex-col items-center justify-center">
            <NextButton />

            <Summary summaryText={result.text.summary} />

            <Comparison correctData={result.text} />

            <div></div>
            <PointComment positiveComment={result.text.positivePoint} challengeComment={result.text.challengePoint} />

            <NextButton />
        </div>
    )
}

export default Correct