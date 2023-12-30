import "./Bar3.css";
import React from "react";
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
    name: "13-17",
    Male: 29,
    Female: 27,
    amt: 0,
  },
  {
    name: "18-24",
    Male: 35,
    Female: 26,
    amt: 10,
  },
  {
    name: "25-34",
    Male: 12,
    Female: 45,
    amt: 20,
  },
  {
    name: "35-44",
    Male: 32,
    Female: 13,
    amt: 30,
  },
  {
    name: "45-64",
    Male: 22,
    Female: 22,
    amt: 40,
  },
  {
    name: "65+",
    Male: 32,
    Female: 29,
    amt: 50,
  },
];

export default function Bar3() {
  return (
    <BarChart
      width={850}
      height={370}
      data={data}
      className="Bar3"
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 0" vertical={false} />
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <Legend />
      <Bar
        dataKey="Male"
        fill="#0095FF"
        barSize={20}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey="Female"
        fill="#CFD1D4"
        barSize={20}
        radius={[10, 10, 10, 10]}
      />
    </BarChart>
  );
}
