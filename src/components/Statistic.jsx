import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Style/Statistic.css";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const Statistic = () => {
  const loaderData = useLoaderData();
  const topicData = loaderData.data;

  const [data] = useState(topicData);

  // console.log(data);

  return (
    <div className="container mx-auto">
      <div className="flex mx-auto justify-center mt-8 static">
        <ResponsiveContainer className=" static">
          <AreaChart
            className="static"
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
