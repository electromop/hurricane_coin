// Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart");

var mine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var mine_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: mine,
      datasets: [
        {
          label: "Hurricane Price",
          data: mine_1,
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
