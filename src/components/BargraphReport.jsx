import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// REGISTER

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BargraphReport = () => {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Revenue",

        data: [
          12000,
          19000,
          15000,
          22000,
          18000,
          25000,
        ],

        backgroundColor: "#B68B1F",

        borderRadius: 8,

        barThickness: 30,
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

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-5 w-full flex justify-start">

      <div className="w-[500px]">

        <h2 className="text-xl font-bold text-[#7B5A11] mb-5">
          Monthly Revenue
        </h2>

        <Bar
          data={data}
          options={options}
        />

      </div>

    </div>
  );
};

export default BargraphReport;