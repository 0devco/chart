'use strict';

module.exports = function setup(chartEl) {
  /* import  chart js */
  var Chart = require('chart.js');

  /* https://twitter.com/0devco */

  /* chartEl data access by variable */
  var datasetsArray = [];
  for (var i = 0; i < chartEl.multiple; i++) {
    var dataSet = {
      label: chartEl.label[i],
      data: chartEl.data[i],
      backgroundColor: chartEl.bgColor[i],
      borderColor: chartEl.bdrColor[i],
    };
    datasetsArray.push(dataSet);
  }
  datasetsArray.forEach((d, index) => {
    /* fill flag */
    if (chartEl.fill !== undefined) {
      d['fill'] = (chartEl.fill[index] !== undefined) ? chartEl.fill[index] : true
    }
    /* border dash */
    if (chartEl.bdrDash !== undefined) {
      d['borderDash'] = (chartEl.bdrDash[index] !== undefined) ? [chartEl.bdrDash[index]] : [0]
    }
    /* border width */
    if (chartEl.bdrWidth !== undefined) {
      d['borderWidth'] = (chartEl.bdrWidth[index] !== undefined) ? chartEl.bdrWidth[index] : 1
    }
    /* tension (curve style)*/
    if (chartEl.tension !== undefined) {
      d['tension'] = (chartEl.tension[index] !== undefined) ? chartEl.tension[index] : 0.4
    }
    /* line step style */
    if (chartEl.stepLine !== undefined) {
      d['steppedLine'] = (chartEl.stepLine[index] !== undefined) ? chartEl.stepLine[index] : false
    }


    /* pointBackgroundColor */
    if (chartEl.pointBg !== undefined) {
      d['pointBackgroundColor'] = (chartEl.pointBg[index] !== undefined) ? chartEl.pointBg[index] : chartEl.pointBg[0]
    }
    /* pointRadius */

    if (chartEl.pointRd !== undefined) {
      d['pointRadius'] = (chartEl.pointRd[index] !== undefined) ? chartEl.pointRd[index] : chartEl.pointRd[0]
    }
    /* pointBorderWidth */
    if (chartEl.pointBdrWd !== undefined) {
      d['pointBorderWidth'] = (chartEl.pointBdrWd[index] !== undefined) ? chartEl.pointBdrWd[index] : chartEl.pointBdrWd[0]
    }
    if (chartEl.pointBdrColor !== undefined) {
      d['pointBorderColor'] = (chartEl.pointBdrColor[index] !== undefined) ? chartEl.pointBdrColor[index] : chartEl.pointBdrColor[0]
    }
    /* point hover radius */
    if (chartEl.pointHvRd !== undefined) {
      d['pointHoverRadius'] = (chartEl.pointHvRd[index] !== undefined) ? chartEl.pointHvRd[index] : chartEl.pointHvRd[0]
    }
    /* pointHoverBackgroundColor */
    if (chartEl.pointHvBg !== undefined) {
      d['pointHoverBackgroundColor'] = (chartEl.pointHvBg[index] !== undefined) ? chartEl.pointHvBg[index] : chartEl.pointHvBg[0]
    }
    /* pointHoverBorderColor */
    if (chartEl.pointHvBdrColor !== undefined) {
      d['pointHoverBorderColor'] = (chartEl.pointHvBdrColor[index] !== undefined) ? chartEl.pointHvBdrColor[index] : chartEl.pointHvBdrColor[0]
    }
    /* point style */
    if (chartEl.pointStyle !== undefined) {
      d['pointStyle'] = (chartEl.pointStyle[index] !== undefined) ? chartEl.pointStyle[index] : chartEl.pointStyle[0]
    }
  })
  var is_animated = chartEl.animated === false ? 0 : 1500;
  var is_title = chartEl.title ? true : false;
  var is_legend = chartEl.legend === false ? false : true;
  var is_drawOnChartArea = chartEl.drawOnChartArea === false ? false : true;
  var is_tooltips = chartEl.tooltips === false ? false : true;
  var is_hover = chartEl.tooltips === false ? 'null' : 'point';
  var is_BeginZeroY = chartEl.beginZeroY === true ? true : false;
  var is_BeginZeroX = chartEl.beginZeroX === true ? true : false;
  var is_hideX = chartEl.hideX === true ? false : true;
  var is_hideY = chartEl.hideY === true ? false : true;


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
        display: is_legend,
        position: chartEl.legendPosition || 'top'
      },
      title: {
        display: is_title,
        text: chartEl.title
      },
      tooltips: {
        enabled: is_tooltips,
        // backgroundColor: 'red'
      },
      hover: {
        mode: is_hover
      },
      animation: {
        duration: is_animated
      },
      scales: {
        xAxes: [{
          stacked: chartEl.stackX || false,
          gridLines: {
            display: is_hideX,
            drawBorder: is_hideX,
            drawOnChartArea: is_drawOnChartArea,
            position: 'bottom'
          },
          ticks: {
            beginAtZero: is_BeginZeroX,
            display: is_hideX,
            fontSize: 30,
            fontColor: 'red'
          }
        }],
        yAxes: [{
          stacked: chartEl.stackY || false,
          gridLines: {
            display: is_hideY,
            drawBorder: is_hideY,
            drawOnChartArea: is_drawOnChartArea,
            position: 'left'
          },
          ticks: {
            beginAtZero: is_BeginZeroY,
            display: is_hideY
          }
        }]
      }
    }
  });
};
