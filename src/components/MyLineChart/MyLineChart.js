import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const MyLineChart = () => {
    const data = [
      {
        name: "Point A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Point B",
        uv: 5400,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Point C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Point D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Point E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Point F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Point G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    
    return (
      <div>
        <h1>Hello world!</h1>
        <LineChart width={800} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="green" />
          <Tooltip></Tooltip>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
    
      </div>
    );
};

export default MyLineChart;