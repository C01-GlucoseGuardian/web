import {Chart} from "chart.js";

document.addEventListener('DOMContentLoaded', () => {

  const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: true,
        lineTension: 0,
        backgroundColor: '#b3d9ff',
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Aumento della glicemia'
          }
        }],
      }
    }
  });
});