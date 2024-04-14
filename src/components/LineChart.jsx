import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {

 const chartRef = useRef(null);

 useEffect(() => {
   const chart = chartRef.current;
   if (!chart) {
     return;
   }

   const ctx = chart.ctx;
   const gradient = ctx.createLinearGradient(0, 0, 0, 400);
   gradient.addColorStop(0, "rgba(51, 51, 51, 0.5)");
   gradient.addColorStop(1, "rgba(51, 51, 51, 0.1)");

   chart.data.datasets[0].backgroundColor = gradient;
   chart.update();
 }, []);
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // 30 days
    datasets: [
      {
        label: "Forex Signal",
        data: [
          100, 107, 90, 110, 95, 120, 130, 110, 115, 105, 120, 125, 130, 120,
          110, 115, 125, 130, 135, 125, 120, 130, 140, 130, 135, 140, 145, 135,
          140, 150,
        ],
        fill: true,
        backgroundColor: "rgba(51, 51, 51, 0.2)", // Initial background color
        borderColor: "#333333",
        borderWidth: 2,
        tension: 0.2, // Lower tension for sharper peaks
        pointRadius: 0,
      },
    ],
  };

const options = {
  scales: {
    y: {
      beginAtZero: false, // Adjusted to better represent typical forex data
    },
    x: {
      grid: {
        display: false, // Remove x-axis grid lines
      },
      ticks: {
        maxRotation: 0, // Prevents the labels from being slanted
        minRotation: 0, // Ensures labels are fully horizontal
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  elements: {
    point: {
      radius: 0, // Hides the points on the line for a cleaner look
    },
  },
};

  return <Line ref={chartRef} data={data} options={options} />;

};

export default LineChart;
