import React from "react";
import { Chart } from "react-google-charts";

export const data = [["Continent", "Popularity"]];

export function WorldChart() {
  const options = {
    datalessRegionColor: "#CFD1D4", // Set the color for regions with no data
    region: "world",
    resolution: "continents",
  };

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
