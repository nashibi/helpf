import React from "react";
import Paper from '@material-ui/core/Paper';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'react-google-charts';
import { ThemeProvider } from "@material-ui/styles";

  
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['user', 'admin'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chartx() {
  return <Doughnut data={data} />;
}