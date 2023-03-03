Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart");

      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: updateTimes,
          datasets: [
            {
              label: "Hurricane Price",
              data: ethPrice,
              backgroundColor: "RGBA(255,145,0,1)",
              borderColor: "RGBA(255,145,0,1)",
              color: '#FFFFFF',
              borderWidth: 1,
              fill: false,
              lineTension: 0.3
            }
          ]
        }
      });