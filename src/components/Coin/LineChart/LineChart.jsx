import { Interaction, Legend, plugins, scales } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { convertNumber } from '../../../functions/convertNumber';

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {  // ⚡ fix capitalization (was Interaction)
      mode: "index",
      intersect: false,
    },
    scales: multiAxis
      ? {
          y1: {
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              callback: function (value) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                return "$" + convertNumber(value);
              },
            },
          },
          y2: {
            type: "linear",
            display: true,
            position: "right",
            grid: { drawOnChartArea: false }, // avoid overlapping
            ticks: {
              callback: function (value) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                return "$" + convertNumber(value);
              },
            },
          },
        }
      : {
          y: {
            ticks: {
              callback: function (value) {
                if (priceType === "prices") return "$" + value.toLocaleString();
                return "$" + convertNumber(value);
              },
            },
          },
        },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
