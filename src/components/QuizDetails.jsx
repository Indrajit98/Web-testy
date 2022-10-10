import React from "react";
import QuizOption from "./QuizOption";

const QuizDetails = ({ questions }) => {
  // console.log(questionsIndex.length)

  const { question, options } = questions;
  return (
    <div className=" my-8 p-4 shadow-lg flex justify-between w-1/2">
      <div>
        <h2 className="text-xl font-semibold text-slate-600">
          Quiz:{} {question}
        </h2>
        <div className="p-2">
          {options.map((option) => (
            <QuizOption option={option} key={option}></QuizOption>
          ))}
        </div>
      </div>
      <div className="cursor-pointer p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuizDetails;
