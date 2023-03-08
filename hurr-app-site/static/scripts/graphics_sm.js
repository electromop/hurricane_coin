var now = new Date();
var ctx = document.getElementById("myChart_1");

var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ethTime,
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

function govno() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ethTime,
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
}
setInterval(govno, 2 * 1000);