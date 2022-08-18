import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
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

export default function Chartx() {
  return <Doughnut
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
  />;
}