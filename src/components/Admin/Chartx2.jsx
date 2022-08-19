import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Box from '@mui/material/Box';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'Admin',
    'User',
    
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 1,
      borderWidth: 1,
    }
  ],
};

export default function Chartx2() {
  return (
    <Box  sx={{ p: 2, border: 2,
        borderColor: 'grey.500',
        borderRadius:'16px' }}>
            <label style={{color:'#ffffff'}}>
                امار کابران 
            </label>
        <Doughnut
            
            data={data}
            options={
            {

                plugins: {
                legend: {
                    labels: {
                    color: "#fff",
                    generateLabels(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                        const { labels: { pointStyle } } = chart.legend.options;

                        return data.labels.map((label, i) => {
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);

                            return {
                            text: label + '-' + chart.data.datasets[0].data[i],
                            fillStyle: style.backgroundColor,
                            strokeStyle: style.borderColor,
                            lineWidth: style.borderWidth,
                            pointStyle: pointStyle,
                            hidden: !chart.getDataVisibility(i),

                            index: i
                            };
                        });
                        }
                        return [];
                    },
                    },
                    display: true,
                    position: "bottom",
                    align: "center",
                    fontFamily: "Arial",
                }
                }
            }
            }
        />
        </Box>
  )
}