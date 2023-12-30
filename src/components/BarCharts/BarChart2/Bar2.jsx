import React from "react";
import "./Bar2.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "English",
    pv: 82,
    amnt: 0,
  },
  {
    name: "Hindi",
    pv: 55,
    amnt: 20,
  },
  {
    name: "Punjabi",
    pv: 40,
    amnt: 40,
  },
  {
    name: "Spanish",
    pv: 36,
    amnt: 60,
  },
  {
    name: "Japanese",
    pv: 28,
    amnt: 80,
  },
];

export default function Bar2() {
  return (
    <BarChart
      layout="vertical"
      width={370}
      height={300}
      data={data}
      className="Bar2"
      margin={{
        top: 15,
        right: 0,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
      <XAxis
        type="number"
        dataKey="amnt"
        tickLine={false}
        axisLine={false}
        domain={[0, 100]}
      />
      <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} />
      <Bar dataKey="pv" fill="#CFD1D4" barSize={20} radius={[5, 5, 5, 5]} />
    </BarChart>
  );
}
