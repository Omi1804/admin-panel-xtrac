import "./Pie.css";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const dataA = [{ name: "Group A", value: 400 }];
const dataB = [{ name: "Group B", value: 300 }];

export default function PieGraph() {
  return (
    <PieChart width={800} height={400}>
      {/* Linear Gradient for Outer Circle */}
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="29.91%" stopColor="#0095FF" stopOpacity={1} />
          <stop offset="73.04%" stopColor="#E6EEFF" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Pie
        data={dataA}
        cx={120}
        cy={200}
        innerRadius={85}
        outerRadius={100}
        fill="url(#colorUv)"
        dataKey="value"
      />

      {/* Linear Gradient for Inner Circle */}
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="13.61%" stopColor="#CFD1D4" stopOpacity={1} />
          <stop offset="85.21%" stopColor="#E6EEFF" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Pie
        data={dataB}
        cx={120}
        cy={200}
        innerRadius={45}
        outerRadius={60}
        fill="url(#colorPv)"
        dataKey="value"
      />
    </PieChart>
  );
}
