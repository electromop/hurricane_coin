var ethPrice = [];
var ethTime = [];
var ethPrice_1 = [];
var ethTime_1 = [];

function getEthData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:5000/hurricane/api/v1.0/hurr-rate/last-rate', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      ethPrice = Object.values(data);
      ethTime = Object.keys(data);
      ethPrice_1 = Object.values(data);
      ethTime_1 = Object.keys(data);
      console.log(`Current ETH price: $${ethPrice}`);
      console.log(`Current ETH time: $${ethTime}`);
    } else {
      console.error('Error while fetching ETH price');
    }
  };
  xhr.send();
}

getEthData();

setInterval(getEthData, 2 * 1000);
