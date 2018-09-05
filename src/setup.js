'use strict';
module.exports = function setup(chartEl) {
  /* import  chart js */
  let Chart = require('chart.js')
/* chartEl data access by variable */
let datasetsArray = []
for (let i = 0; i < chartEl.multiple ; i++) {
  let dataSet = {
    label: chartEl.label[i],
    data: chartEl.data[i],
    backgroundColor: chartEl.bgColor[i],
    borderColor: chartEl.bdrColor[i],
    borderWidth: chartEl.bdrWidth[i],
  }
  datasetsArray.push(dataSet)
}


  /* create chart */
  let chartID = document.getElementById(chart_el.id);
  var ctx = chartID.getContext("2d")
  var createChart = new Chart(ctx,{
    type: chartEl.type,
    /* data part */
    data: {
      labels: chartEl.labels,
      datasets: datasetsArray
    },
    /* options part */
    options: {
      responsive: true,
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'This is title'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: true,
					  drawBorder: true,
					  drawOnChartArea: false,
            position: 'bottom'
          },
          ticks: {},
        }],
        yAxes: [{
          gridLines: {
            display: true,
					  drawBorder: true,
					  drawOnChartArea: false,
            position: 'left'
          },
          ticks: {},
        }]
      }
    }

  })
};
