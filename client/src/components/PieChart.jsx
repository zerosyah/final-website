import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        labels: ['Mat', 'Eng', 'Zul', 'His', 'Phy', 'lit', 'LSc', 'LO', 'ACC', 'GEO', 'BS','DRM', 'TRS', 'CS' ],
        datasets: [{
            data: [30, 50, 10, 15, 20, 25, 30, 35, 40, 40, 50, 50, 60, 30],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE54',
                'orange',
                'Pink',
                'cyan',
                'grey',
                'black',
                'gold',
                'green',
                'red',
                'blue',

            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE54',
                'orange',
                'Pink',
                'cyan',
                'grey',
                'black',
                'gold',
                'green',
                'red',
                'blue',
            ],
        }]
    }
    const ChartOptions ={
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: 'white',
                usePointStyle: true,
                display: false,
            }
        }
    }
  return (
    <div className=" mt-5 w-64 h-48 flex items-center self-center ">
        <Doughnut data={data} className='w-64 flex flex-1 gap-4' options={ChartOptions}/>
    </div>
  )
}
