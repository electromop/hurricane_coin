

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