import { getData } from '@/app/getData';
import Quiz from './quiz';

const QuizPage = async () => {
    const questions = await getData('http://localhost:3000/api/quiz/');

    return <Quiz questions={questions} />;
};
export default QuizPage;
