Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart");

let ethPrice = [23223, 2312121, 32322, 34435, 55342, 5342313, 23424]; // массив для хранения курса ефириума
let updateTimes = []; // массив для хранения времени обновления курса

const newLocal = new Chart(ctx, {
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
function updateEthPrice() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      if (ethPrice.length == 10)
      {
            ethPrice.shift();
            updateTimes.shift();
      }
      ethPrice.push(Object.values(data));
      updateTimes.push(Object.keys(data)[0].slice(10));
      console.log('Eth price updated:', ethPrice, updateTimes);
    });
    var myChart = newLocal;
}

// вызываем функцию updateEthPrice каждый час
setInterval(updateEthPrice, 60 * 1000);
