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
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Prediction',
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

    return <Line options={options} data={data} width={550} height={200}/>;
}

export default PredictionChart;
