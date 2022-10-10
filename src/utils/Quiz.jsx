import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {

    const quizloader = useLoaderData()
    console.log(quizloader);

    return (
        <div>
            <h1>Indrajit</h1>
        </div>
    );
};

export default Quiz;