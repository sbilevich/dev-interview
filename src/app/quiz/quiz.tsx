'use client';

import { FC } from 'react';
import Carousel from '../carousel';
import QuizItem, { Question } from './[id]/page';

type QuestionProps = {
    questions: Question[];
};

const Quiz: FC<QuestionProps> = ({ questions }) => {
    return (
        <Carousel
            items={questions}
            render={(item) => <QuizItem question={item} />}
        />
    );
};

export default Quiz;
