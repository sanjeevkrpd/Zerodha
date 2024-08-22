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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  // Transform your data to fit the chart's expected structure
  const chartData = {
    labels: data.map(stock => stock.name), // X-axis labels
    datasets: [
      {
        label: 'Current Value',
        data: data.map(stock => stock.price * stock.qty), // Y-axis data points
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Average Cost',
        data: data.map(stock => stock.avg * stock.qty), // Y-axis data points for avg cost
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
}
