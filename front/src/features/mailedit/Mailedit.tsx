import React, { useEffect, useState } from 'react'
import Question from './components/Question';
import EditForm from './components/EditForm';
import TypeQuestion from './types/question';

const Mailedit = () => {
    const [question, setQuestion] = useState<TypeQuestion>();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch('http://localhost:3000/question');
                if (!response.ok) { throw new Error('Network response was not ok'); }
                const data = await response.json();
                if (data) { setQuestion(data); }
            } catch (error) {
                console.error('Error fetching question:', error);
                try {
                    const response = await fetch('http://localhost:3000/question');
                    if (!response.ok) { throw new Error('Network response was not ok'); }
                    const data = await response.json();
                    if (data) { setQuestion(data); }
                } catch (error) {
                    console.error('Error fetching question:', error);
                }
            }
        };
        fetchQuestion();
    }, []);

    return (
        <div>
            <Question question={question} />
            <EditForm />
        </div>
    )
}

export default Mailedit