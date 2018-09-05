'use strict';

module.exports = function setup(chartEl) {
  /* import  chart js */
  var Chart = require('chart.js');
  /* chartEl data access by variable */
  var datasetsArray = [];
  for (var i = 0; i < chartEl.multiple; i++) {
    var dataSet = {
      label: chartEl.label[i],
      data: chartEl.data[i],
      backgroundColor: chartEl.bgColor[i],
      borderColor: chartEl.bdrColor[i],
      borderWidth: chartEl.bdrWidth[i]
    };
    datasetsArray.push(dataSet);
  }
  let is_animated =  (chartEl.animated === false) ? 0 : 1500
  let is_title = chartEl.title ? true : false
  let is_legend = (chartEl.legend === false) ? false : true
  let is_drawOnChartArea = (chartEl.drawOnChartArea === false) ? false :true
  let is_tooltips = (chartEl.tooltips === false) ? false : true
  let is_BeginZeroY = (chartEl.beginZeroY === true) ? true : false
  let is_BeginZeroX = (chartEl.beginZeroX === true) ? true : false

  /* create chart */
  var chartID = document.getElementById(chartEl.id);
  var ctx = chartID.getContext("2d");
  var createChart = new Chart(ctx, {
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
        display: is_legend
      },
      title: {
        display: is_title,
        text: chartEl.title
      },
      tooltips: {
        enabled: is_tooltips
      },
      animation: {
        duration: is_animated
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: true,
            drawBorder: true,
            drawOnChartArea: is_drawOnChartArea,
            position: 'bottom'
          },
          ticks: {
            beginAtZero: is_BeginZeroX
          }
        }],
        yAxes: [{
          gridLines: {
            display: true,
            drawBorder: true,
            drawOnChartArea: is_drawOnChartArea,
            position: 'left'
          },
          ticks: {
            beginAtZero: is_BeginZeroY
          }
        }]
      }
    }
  });
};
