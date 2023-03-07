var ethPrice = [1];
var updateTimes = [1];

function updateEthPrice() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      ethPrice = Object.values(data);
    });
  console.log('ep ', ethPrice)
  return ethPrice;
}

function updateEthTime() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      updateTimes = Object.keys(data); //[0].slice(10)
    });
  console.log('et ', updateTimes)
  return updateTimes;
}

function setIntervalImmediately(func, interval) {
  return setInterval(func, interval);
}

setIntervalImmediately(updateEthPrice, 15 * 1000);
setIntervalImmediately(updateEthTime, 15 * 1000)


// вызываем функцию updateEthPrice каждый час
// setInterval(updateEthPrice, 15 * 1000);
// setInterval(updateEthTime, 15 * 1000);
// setInterval(() => console.log(data_Collection), 2000);
// setInterval(() => console.log(data_Collection_1), 2000);