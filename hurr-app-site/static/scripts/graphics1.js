Chart.defaults.global.legend.display = false;
var now = new Date();

var ctx = document.getElementById("myChart1");

var kurs = [0.0015, 0.008, 0.009, 0.0012, 0.0022, 0.001];
var time = ['13:59', '14:00', '14:01', '14:02', '14:03'];


var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: time,
    datasets: [
      {
        label: "Hurricane Price",
        data: kurs,
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
