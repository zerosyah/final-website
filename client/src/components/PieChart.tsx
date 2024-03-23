import React from 'react'
import { Chart } from "react-google-charts"

export default function PieChart() {
  const data = [
    ["year", "Marks", "percentage"],
    ["2018", 70, 46.7],
    ["2019", 15, 21.4],
    ["2020", 50, 50],
    ["2021", 89, 59.3],
    ["2022", 76, 65],
    ["2023", 65, 72.2],
  ];
  const option = {
    title: "learns Grade",
    curveType: "function",
    legend: { position: "bottom" },
  }
  return (
    <div className="w-full h-fit rounded" >
      <Chart
      chartType="LineChart"
      data={data}
      options={option}
      className='w-full h-fit pb-3 rounded'
    />
    </div>
  )
}

