Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart_1");

const myChart_1 = new Chart(ctx, {
  type: "line",
  data: {
    labels: updateTimes_1,
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
