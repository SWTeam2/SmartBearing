import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function PredictionChart({ datasetLabel, datasetData }) {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const data = {
        labels: datasetLabel,
        datasets: [
            {
                label: "Prediction",
                data: datasetData,
                borderColor: '#A2A9B0',
                backgroundColor: 'white',
            }
        ],
    };

    return <Line options={options} data={data}/>;
}

export default PredictionChart;
