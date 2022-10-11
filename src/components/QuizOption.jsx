import React from "react";

const QuizOption = ({ option,quizResult }) => {
 
  return (
    <div className="flex items-center">
      <div onClick={() =>quizResult(option)} className="my-2 cursor-pointer" >
      <input  className="mr-2 cursor-pointer" id={option} type="radio" name="name"  />
      </div >
      <label className="cursor-pointer" htmlFor={option}>{option}:</label>
    </div>
    
  );
};

export default QuizOption;
