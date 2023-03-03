// Chart.defaults.global.legend.display = false;
// var ctx = document.getElementById("myChart");

let ethPrice_1 = []; // массив для хранения курса ефириума
let updateTimes_1 = []; // массив для хранения времени обновления курса

function updateEthPrice() {
  // делаем запрос на API для получения текущего курса ефириума
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      // добавляем текущую цену в массив ethPrice_1
      if (ethPrice_1.length == 10) {
        if(updateTimes_1.length == 10) {
          ethPrice_1.shift();
          updateTimes_1.shift();
        }
      }
      ethPrice_1.push(Object.values(data));
      // добавляем текущее время в массив updateTimes_1
      updateTimes_1.push(Object.keys(data)[0].slice(10));
      console.log('Eth price updated:', ethPrice_1, updateTimes_1);
      // var myChart = new Chart(ctx, {
      //   type: "line",
      //   data: {
      //     labels: updateTimes_1,
      //     datasets: [
      //       {
      //         label: "Hurricane Price",
      //         data: ethPrice_1,
      //         backgroundColor: "RGBA(255,145,0,1)",
      //         borderColor: "RGBA(255,145,0,1)",
      //         color: '#FFFFFF',
      //         borderWidth: 1,
      //         fill: false,
      //         lineTension: 0.3
      //       }
      //     ]
      //   }
      // });
  });
}

// вызываем функцию updateEthPrice каждый час
setInterval(updateEthPrice, 5 * 1000);
