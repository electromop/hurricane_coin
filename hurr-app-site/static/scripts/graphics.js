Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart");

var newPrice = ethPrice;
var newTime = updateTimes;

console.log(newPrice, newTime);


function Grath() {
const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: newTime,
      datasets: [
        {
          label: "Hurricane Price",
          data: newPrice,
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

setInterval(Grath, 3 * 1000);
