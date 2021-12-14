const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
   type: "line",
   data: {
      labels: [
         "01am",
         "04am",
         "07am",
         "01pm",
         "04pm",
         "07pm",
         "10pm",
      ],
      datasets: [
         {
            label: "% humidity",
            data: [2, 3, 3, 2, 2, 3, 5],
            backgroundColor: [
               "rgba(54, 162, 235, 0.2)",
               "#4279e0",
            ],
            borderColor: [
               "#4279e0",
               "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
            fill: true,
            responsive:true,
         },
      ],
   },
   options: {
      maintainAspectRatio:false,
      scales: {
         y: {
            beginAtZero: true,
         },
      },
   },
});
