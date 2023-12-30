import React from "react";
import "./Bar1.css";
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
    name: "500k",
    pv: 10,
  },
  {
    name: "500K-1K",
    pv: 10,
  },
  {
    name: "1.0K-1.5K",
    pv: 50,
  },
  {
    name: "1.5K-2K",
    pv: 40,
  },
  {
    name: "2K-2.5K",
    pv: 30,
  },
  {
    name: "2.5K-3K",
    pv: 20,
  },
  {
    name: ">3K",
    pv: 50,
  },
];

export default function Bar1() {
  return (
    <BarChart
      width={640}
      height={270}
      data={data}
      className="Bar1"
      margin={{
        top: 15,
        right: 20,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip />
      <Bar dataKey="pv" fill="#0F1928" barSize={20} radius={[5, 5, 0, 0]} />
    </BarChart>
  );
}
