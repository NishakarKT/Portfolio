import React from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";

function Chart() {
    const data = {
        labels: ["", "Sem 1", "Sem 2"],
        datasets: [{
            label: "CGPA",
            data: [0, 9.08, 8.84],
            fill: true,
            borderColor: "#386887"
        }]
    };
    const options = {
        scales: {
            y: {
                suggestedMin: 8.5,
                suggestedMax: 9.5
            }
        },
        animation: { duration: 2000 },
    }
    return (
        <div className="chart">
            <Line data={data} options={options} />
        </div>);
};

export default Chart;
