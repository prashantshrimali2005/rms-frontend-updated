import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

// REGISTER

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {

  const data = {
    labels: [
      "Mobile",
      "Desktop",
      "Tablet",
      "Other",
    ],

    datasets: [
      {
        label: "Users",

        data: [300, 500, 100, 80],

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="flex justify-end w-full p-4">
      
      <div className="w-[260px] bg-white p-4 rounded-2xl shadow-lg">
        
        <Doughnut
          data={data}
          options={options}
        />

      </div>

    </div>
  );
};

export default DoughnutChart;