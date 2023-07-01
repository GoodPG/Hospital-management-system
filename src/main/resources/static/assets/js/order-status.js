
  //Active orders chart
  var activeOrdersChart = new Chart(document.getElementById("active-orders"), {
    type: 'doughnut',
    data: {
      labels: ["Low Rider", "Hemp Oil", "Super Skunk", "Ingrid", "UK Cheese"],
      datasets: [
        {
          label: "Population (millions)",
          borderColor: 'transparent',
          backgroundColor: ["#1d911d", "#45e345","#000000","#403f55","#00f300"],
          data: [478,267,734,784,433]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      animation: {
        animateScale: true
      },
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      },
      legend: {
        position: 'left',
        display: false,
      },
    }
  });
