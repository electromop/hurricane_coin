Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart_1");

let ethPrice_1 = [];
let updateTimes_1 = [];
const myChart_1 = newChart(ctx, {});

function updateEthPrice() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      if (ethPrice.length == 10)
      {
            ethPrice.shift();
            updateTimes.shift();
      }
      ethPrice_1.push(Object.values(data));
      updateTimes_1.push(Object.keys(data)[0].slice(10));
      console.log('myChart updated:', ethPrice, updateTimes);
    
    });
    myChart_1 = new Chart(ctx, {
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
}

// вызываем функцию updateEthPrice каждый час
setInterval(updateEthPrice, 60 * 1000);
