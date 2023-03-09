var now = new Date();
// var ctx = document.getElementById("myChart");

var myChart = new Chart(document.getElementById("myChart"), {
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
  myChart = new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
      labels: ethTime,
      datasets: [
        {
          label: "Hurricane Price",
          data: ethPrice_1,
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