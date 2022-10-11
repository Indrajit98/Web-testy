import React from "react";
import { Link } from "react-router-dom";

const TopicsName = ({ topicData }) => {
  // console.log(topicData)

  const { name, logo, id, total } = topicData;
  return (
    <div className="shadow-lg p-4">
      <div>
        <img
          className="bg-slate-200 sm:h-full h-3/4 w-full "
          src={logo}
          alt=""
        />
        <h3 className="font-bold text-slate-600 mt-4">Topic Name: {name}</h3>
        <h4 className="text-slate-500 py-2 text-lg font-medium">
          Total quiz: {total}
        </h4>
        <div className="mt-4">
          <Link
            to={`quiz/${id}`}
            className="bg bg-amber-600 py-2 px-8 mt-18 rounded-md text-white font-bold"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicsName;
