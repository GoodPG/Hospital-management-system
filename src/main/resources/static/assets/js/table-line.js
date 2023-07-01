(function($) {
  'use strict';
  //Trends
  /* Sessions by Channel Trends Charts */
  var trend_1 = [1, 3, 5, 4, 3, 3, 4, 8, 5];
  var trend_2 = [3, 2, 5, 4, 8, 4, 5, 2, 3];
  var trend_3 = [7, 5, 4, 5, 4, 7, 5, 5, 4];
  var trend_4 = [3, 3, 4, 6, 7, 6, 6, 4, 3];
  var trend_5 = [5, 4, 6, 7, 6, 5, 5, 7, 4];
  var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17","Jan-18", "Jan-19"];
  var options = {
    legend: {
    display: false,
    position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
          display: false,
      }]
    },
    elements: {
       point:{
         radius: 0
       }
     }
  };

  new Chart(document.getElementById('trend-01').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#F7931A',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_1
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-02').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#4e8ee8',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_2
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-03').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#3FA30C',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_3
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-04').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#3FA30C',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_4
        }]
    },
    options: options
  });
  new Chart(document.getElementById('trend-05').getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#F7931A',
            backgroundColor: 'transparent',
            borderWidth: 2,
            data: trend_5
        }]
    },
    options: options
  });

})(jQuery);
