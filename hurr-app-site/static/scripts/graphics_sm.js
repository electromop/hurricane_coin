// var now = new Date();
var ctx_sm = document.getElementById("myChart_1");
Chart.defaults.font.size = 7;

var myChart_1 = new Chart(ctx_sm, {
    type: "line",
    data: {
      labels: ethTime,
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
console.log("sm was made");

// function govno() {
//   myChart_1.destroy();
//   myChart_1 = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ethTime,
//       datasets: [
//         {
//           label: "Hurricane Price",
//           data: ethPrice,
//           backgroundColor: "RGBA(255,145,0,1)",
//           borderColor: "RGBA(255,145,0,1)",
//           color: '#FFFFFF',
//           borderWidth: 1,
//           fill: false,
//           lineTension: 0.3
//         }
//       ]
//     }
//   });
// }
// setInterval(govno, 2 * 1000);