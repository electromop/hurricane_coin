var ethPrice = [];
var updateTimes = [];

var data_Collection = updateEthPrice();
var data_Collection_1 = updateEthTime();

function updateEthPrice() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      // if (ethPrice.length == 10)
      // {
      //   ethPrice.shift();
      // }
      ethPrice = Object.values(data);
    });
  return ethPrice;
}
function updateEthTime() {
  fetch('http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate')
    .then(response => response.json())
    .then(data => {
      updateTimes = Object.keys(data); //[0].slice(10)
    });
  return updateTimes;
}
  
  
  // вызываем функцию updateEthPrice каждый час
  setInterval(updateEthPrice, 60 * 1000);
  setInterval(updateEthTime, 60 * 1000);
  setInterval(() => console.log(data_Collection), 2000);
  setInterval(() => console.log(data_Collection_1), 2000);