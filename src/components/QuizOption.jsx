import React from "react";

const QuizOption = ({ option }) => {
//   console.log(option);
  return (
    <div>
      <input className="mr-2" id="namedInput" type="radio" name="name" />
      <label htmlFor="namedInput">{option}:</label>
    </div>
  );
};

export default QuizOption;
