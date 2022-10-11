import React from "react";

const QuizOption = ({ option,quizResult }) => {
 
  return (
    <div className="flex items-center">
      <div onClick={() =>quizResult(option)} className='my-2' >
      <input  className="mr-2" id={option} type="radio" name="name"  />
      </div>
      <label  htmlFor={option}>{option}:</label>
    </div>
    
  );
};

export default QuizOption;
