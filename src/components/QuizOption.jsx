import React from "react";

const QuizOption = ({ option,quizResult }) => {
 
  return (
    <div>
      <div onClick={() =>quizResult(option)}>
      <input className="mr-2" id="namedInput" type="radio" name="name"  />
      <label htmlFor="namedInput">{option}:</label>
      </div>
    </div>
    
  );
};

export default QuizOption;
