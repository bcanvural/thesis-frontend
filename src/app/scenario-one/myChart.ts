import Chart from 'chart.js'

export class MyChart {
    myChart: Chart;

  constructor(selector: string, labels: Array<string>, label1: string, data1: Array<number>,
    label2: string, data2: Array<number>) {
      this.myChart = new Chart(selector, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [
            {
              label: label1,
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: data1
            },
            {
              label: label2,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: data2
            }
          ]
        },
        options: {
          scale: {
            reverse: true,
            ticks: {
              beginAtZero: true
            }
          }
        }
      });
  }
}