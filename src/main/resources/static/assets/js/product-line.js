(function($) {
  'use strict';

  $("#news-flash").webTicker();
//Real time rating chart
var ratingCtx = document.getElementById("crypto-rating-graph").getContext("2d");
var gradientStrokePrimary = ratingCtx.createLinearGradient(0, 0, 0, 450);
gradientStrokePrimary.addColorStop(0, '#45e345');

var gradientFillPrimary = ratingCtx.createLinearGradient(0, 0, 0, 450);
gradientFillPrimary.addColorStop(0, "#e0ffef");
gradientFillPrimary.addColorStop(1, "#e0ffef");

var time = ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM",
  "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"
];

var data = {

  labels: ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"],
  datasets: [{
    label: "Price",
    borderColor: gradientStrokePrimary,
    pointBorderWidth: 9,
    pointRadius: 9,
    pointBorderColor: 'transparent',
    pointHoverRadius: 8,
    pointHoverBorderWidth: 3,
    pointHoverBackgroundColor: 'white',
    pointHoverBorderColor: '#45e345',
    pointBackgroundColor: 'transparent',
    fill: true,
    backgroundColor: gradientFillPrimary,
    borderWidth: 2,
    data: [65, 59, 80, 81, 56, 55, 40, 70, 56, 76, 51, 59]
  }]
};
var options = {
  animation: false,
  scaleOverride: true,
  scaleSteps: 10,
  scaleStepWidth: 10,
  scaleStartValue: 0,
  elements: {
    line: {
        tension: 0
    }
  },
  legend: {
    display: false,
    position: "top"
  },
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              padding: 20
          },
      }],
      xAxes: [{

          ticks: {
              padding: 20,
              beginAtZero: true,
          }
      }]
  }
};

var realTimeChart = new Chart(ratingCtx, {
  type: 'line',
  data: data,
  options: options,
});

//Line Chart
var ctx = document.getElementById('line-chart').getContext("2d");
var gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);
gradientStroke.addColorStop(0, '#000000');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill.addColorStop(0, "#45e34585");
gradientFill.addColorStop(1, "#45e34585");

// all data (line chart)
var data_1 = [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600];
var data_2 = [4100, 3800, 3200, 3400, 2700, 2600, 3300, 3000, 2900];
var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17","Jan-18", "Jan-19"];

var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: labels,
      datasets: [{

          label: "Orders",
          borderColor: gradientStroke,
          pointBorderColor: gradientStroke,
          pointBackgroundColor: gradientStroke,
          pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: gradientStroke,
          pointBorderWidth: 1,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 1,
          data: data_1
      }]
  },
  options: {
      legend: {
      display: true,


      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 200,
            padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false
          }

      }],
      xAxes: [{
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
      }]
    }
  }
});


})(jQuery);
