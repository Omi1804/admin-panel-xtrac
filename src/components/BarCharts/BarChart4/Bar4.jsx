import React from "react";
import "./Bar4.css";
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
    pv: 39,
  },
  {
    name: "500K-1K",
    pv: 31,
  },
  {
    name: "1.0K-1.5K",
    pv: 27,
  },
  {
    name: "1.5K-2K",
    pv: 20,
  },
  {
    name: "2K-2.5K",
    pv: 13,
  },
  {
    name: "2.5K-3K",
    pv: 8,
  },
  {
    name: ">3K",
    pv: 3,
  },
];

function formatYAxis(tickItem) {
  return `${tickItem}%`;
}

export default function Bar4() {
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
      <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
      <YAxis
        tickLine={false}
        axisLine={false}
        ticks={[0, 10, 20, 30, 40]}
        tickFormatter={formatYAxis}
      />
      <Bar dataKey="pv" fill="#0F1928" barSize={20} radius={[5, 5, 0, 0]} />
    </BarChart>
  );
}
