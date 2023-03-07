// var ctx = document.getElementById('myChart');

// var mine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var mine_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];

// new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     datasets: [
//       {
//         label: "Hurricane Price",
//         data: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'],
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


var now = new Date();

var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
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

// var kurs = [0.0015, 0.008, 0.009, 0.0012, 0.0022, 0.001];
// var time = ['13:59', '14:00', '14:01', '14:02', '14:03'];

function  govno() {
  myChart.destroy();
  myChart = new Chart(ctx, {
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
}
setInterval(govno, 15 * 1000);