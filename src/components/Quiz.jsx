import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const quizLoader = useLoaderData()
    const quiz = quizLoader.data
    const {name, questions,total} = quiz
    // console.log(quiz);
    return (
        <div>
            <h3 className='text-center font-bold text-3xl text-slate-600'>Quiz of {name} {total}</h3>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                {
                    questions.map(question => <QuizDetails key={question.id} questions={question} ></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;