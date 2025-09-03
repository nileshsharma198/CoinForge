import { Interaction, Legend, plugins, scales } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from "../../../functions/convertNumber";

function LineChart({ chartData, priceType, multiAxis }) {
  // ✅ shared formatter for all ticks
  const formatTick = (value) => {
    const num = Number(value);

    if (num >= 1000) {
      let formatted = convertNumber(num);
      // remove trailing ".00" (e.g., 108.00K → 108K)
      formatted = formatted.replace(/\.00/, "");
      return "$" + formatted;
    }

    return "$" + num.toLocaleString();
  };

  const options = {
    plugins: {
      legend: {
        display: multiAxis, // shorter syntax
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: multiAxis
      ? {
          y1: {
            type: "linear",
            display: true,
            position: "left",
            ticks: { callback: formatTick },
          },
          y2: {
            type: "linear",
            display: true,
            position: "right",
            grid: { drawOnChartArea: false },
            ticks: { callback: formatTick },
          },
        }
      : {
          y: {
            ticks: { callback: formatTick },
          },
        },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
