// var now = new Date();
var ctx = document.getElementById("myChart");
Chart.defaults.font.size = 10;

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
console.log("md was made");

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

govno();
setInterval(govno, 10 * 60 * 1000);