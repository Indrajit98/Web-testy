import React from 'react';
import QuizOption from './QuizOption';

const QuizDetails = ({questions}) => {
 
    // console.log(questionsIndex.length)
    
    const {question,options}= questions
    return (
        <div className='border border-orange-600 my-3 p-4'>
            <h2 className='text-xl font-semibold text-slate-600'>Quiz:{}  {question}</h2>
            <div className='p-2' >
                {
                    options.map(option =><QuizOption option={option} key= {option} ></QuizOption> )
                }
            </div>
        </div>
    );
};

export default QuizDetails;