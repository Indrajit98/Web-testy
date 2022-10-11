import React from "react";
import { useLoaderData } from "react-router-dom";

import "./Style/Home.css";
import TopicsName from "./TopicsName";

const Home = () => {
  const loaderData = useLoaderData();
  const topicData = loaderData.data;
  // console.log(topicData);

  return (
    <section className="container px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className=" image bg-no-repeat bg-cover flex justify-center items-center ">
        <h1 className="sm:text-4xl font-bold text-white text-center">
          The online quiz maker that's easy to use, <br /> fun and fully
          customizable
        </h1>
      </div>
      <div className="text-center mt-4 sm:text-5xl font-bold text-slate-600">Quiz Select</div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-4 mb-24 mt-8  ">
        {topicData.map((topicData) => (
          <TopicsName topicData={topicData} key={topicData.id}></TopicsName>
        ))}
      </div>
    </section>
  );
};

export default Home;
