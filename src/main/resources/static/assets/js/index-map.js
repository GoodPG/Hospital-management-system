(function($) {
  'use strict';

//World Map
  var worldVector = new Datamap({
    element: document.getElementById("world-map"),
    highlightOnHover: false,
    responsive: true,
    fills: {
      defaultFill: 'rgb(199,206,234)',
      USA: "#00f300",
      RUS: "#0000000",
      AUS: "#1d911d",
      IND: "#34334af0",
      BRA: "#45e345bf",
    },
    geographyConfig: {
      highlightFillColor: 'rgb(36, 128, 21)',
      borderColor: 'transparent',
      highlightBorderColor: 'transparent',
      popupOnHover: false
    },
    data: {
      USA: { fillKey: "USA" },
      RUS: { fillKey: "RUS" },
      AUS: { fillKey: "AUS" },
      IND: { fillKey: "IND" },
      BRA: { fillKey: "BRA" },
    }

  });

  $(window).on('resize', function() {
    worldVector.resize();
  });
  })(jQuery);
