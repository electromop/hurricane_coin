Chart.defaults.global.legend.display = false;
var now = new Date();

var ctx = document.getElementById("myChart");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function rate() {
  for (let i = 0; i < 5; i++) {
      fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
        .then(function (response) {
          return response.text();
        }).then(function (text) {
          console.log('Get response text: ');
          console.log(text);
        });
      console.log('Rate updated!');
      await sleep(3600 * 1000);
  }
}

rate();

var kurs = [0.0015, 0.008, 0.009, 0.0012, 0.0022, 0.001];
var time = ['13:59', '14:00', '14:01', '14:02', '14:03'];

kurs.push(rate());

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
