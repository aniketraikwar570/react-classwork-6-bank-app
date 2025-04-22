import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const dataArr = context.dataset.data;
            const total = dataArr.reduce((acc, val) => acc + val, 0);
            const percentage = ((value / total) * 100).toFixed(2) + "%";

            return `${label}: ${value.toFixed(2)} (${percentage})`;
          },
        },
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
