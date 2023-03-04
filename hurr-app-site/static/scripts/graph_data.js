var ethPrice = [];
var updateTimes = [];

var ethPrice_1 = [];
var updateTimes_1 = [];


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
        console.log('myChart updated:', ethPrice, updateTimes);
      });
      localStorage.setItem(ethPrice, updateTimes);
    ethPrice_1 = ethPrice;
    updateTimes_1 = updateTimes;
    console.log('myChart_1 updated:', ethPrice_1, updateTimes_1)
  }
  
  // вызываем функцию updateEthPrice каждый час
  setInterval(updateEthPrice, 60 * 1000);