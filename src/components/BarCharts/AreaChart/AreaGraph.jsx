import "./areaGraph.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 10.3,
  },
  {
    name: "Feb",
    uv: 15.5,
  },
  {
    name: "May",
    uv: 15.5,
  },
  {
    name: "June",
    uv: 10.5,
  },
  {
    name: "July",
    uv: 15,
  },
];

function formatYAxis(tickItem) {
  return `${tickItem}.0M`;
}

export default function AreaGraph() {
  return (
    <AreaChart
      width={400}
      height={300}
      data={data}
      className="AreaGraph"
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#339AF0" stopOpacity={0.5} />
          <stop offset="50%" stopColor="#009EF7" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
      <YAxis
        tickLine={false}
        axisLine={false}
        domain={[0, 20]}
        ticks={[0, 5, 10, 15, 20]}
        tickFormatter={formatYAxis}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#339AF0"
        strokeWidth={3}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}
