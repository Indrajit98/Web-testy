import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartesianGrid, XAxis, YAxis, AreaChart, Tooltip, Area } from "recharts";

const Statistic = () => {
  const loaderData = useLoaderData();
  const topicData = loaderData.data;

  const [data] = useState(topicData);

  console.log(data);

  return (
    <div className="container mx-auto">
     <div className="flex justify-center mt-8">
     <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="name" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
     </div>
    </div>
  );
};

export default Statistic;
