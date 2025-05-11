import { useEffect, useState } from 'react'
import Question from './components/Question';
import EditForm from './components/EditForm';
import TypeQuestion from './types/question';
import { useNavigate } from 'react-router-dom';

const Mailedit = () => {
    const navigate = useNavigate()

    const [question, setQuestion] = useState<TypeQuestion>();
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchQuestion = async () => {
            setIsLoad(true);
            try {
                const response = await fetch('https://busi-mail-dojo.onrender.com/question');
                if (!response.ok) { throw new Error('Network response was not ok'); }
                const data = await response.json();
                if (data) { setQuestion(data); }
                setIsLoad(false);
            } catch (error) {
                console.error('Error fetching question:', error);
                try {
                    const response = await fetch('https://busi-mail-dojo.onrender.com/question');
                    if (!response.ok) { throw new Error('Network response was not ok'); }
                    const data = await response.json();
                    if (data) { setQuestion(data); }
                    setIsLoad(false);
                } catch (error) {
                    setIsLoad(false);;
                    setIsError(true)
                    console.error('Error fetching question:', error);
                }
            }
        };
        setIsLoad(false);
        fetchQuestion();
    }, []);

    console.log("調子どう？", question)

    return (
        <div>
            {isLoad && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-400 bg-opacity-50 p-8 rounded-lg shadow-lg">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300 mx-auto"></div>
						<p className="text-center text-lg mt-4 text-gray-300">
                        問題取得中
							<span className="animate-dot1">. </span>
							<span className="animate-dot2">. </span>
							<span className="animate-dot3">. </span>
						</p>
					</div>
				</div>
			)}
            {question ? (
                <>
                    <Question question={question} />
                    <EditForm questionId={question.id} />
                </>
            ) : (
                <>
                {isError && (
                    <div>
                        データ読み込みでエラーが発生しました。
                        <div className='text-blue-800' onClick={() => navigate('/')}>
                            再度読み込みを行って下さい。
                        </div>
                    </div>
                )}
                </>
            )}
        </div>
    )
}

export default Mailedit

const styles = `
@keyframes dot1 {
    0%, 0% { opacity: 0; }
    30%, 80% { opacity: 1; }
    90%, 100% { opacity: 0; }
}

@keyframes dot2 {
    0%, 20% { opacity: 0; }
    30%, 70% { opacity: 1; }
    80%, 100% { opacity: 0; }
}

@keyframes dot3 {
    0%, 30% { opacity: 0; }
    40%, 60% { opacity: 1; }
    70%, 100% { opacity: 0; }
}

.animate-dot1 {
    animation: dot1 3s infinite;
}

.animate-dot2 {
    animation: dot2 3s infinite;
}

.animate-dot3 {
    animation: dot3 3s infinite;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);