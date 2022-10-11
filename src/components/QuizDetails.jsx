import React from "react";
import { toast } from "react-toastify";
import QuizOption from "./QuizOption";
import Swal from 'sweetalert2'


const QuizDetails = ({ questions }) => {
  // console.log(questionsIndex.length)

  const { question, options,correctAnswer } = questions;

  //  console.log(correctAnswer)
  // console.log(question); 
  const questionReplace = question.replace('<p>', ' ' )
  const againQuestionReplace = questionReplace.replace('</p>', '')
  console.log(againQuestionReplace);
 
  
  const quizResult = (Ans) =>{
    // console.log(Ans);
    if(Ans === correctAnswer){
       return toast.success('correct ans',{autoClose:2000})
    }
    else{
       return toast.error('Ans is not correct',{autoClose:2000})
    }
   
  }
  const showCorrectAns = ( ) =>{
    console.log(correctAnswer);
    Swal.fire(`Correct Answer`,correctAnswer )
  }
 
  

  return (
    <div className=" my-8 p-4 shadow-lg sm:flex sm:justify-between lg:w-3/4 w-full">
      <div>
        <h2 className="sm:text-xl font-semibold text-slate-600">
          Quiz:{} {againQuestionReplace}
        </h2>
        <div className="p-2 ">
          {options.map((option) => (
            <QuizOption option={option} key={option} quizResult={quizResult}></QuizOption>
          ))}
        </div>

      </div>
      <div className="cursor-pointer sm:p-4" onClick={showCorrectAns}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuizDetails;
