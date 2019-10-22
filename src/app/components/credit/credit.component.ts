import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormsModule, Validators } from "@angular/forms";
import { Chart } from "chart.js";

@Component({
  selector: "app-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"]
})
export class CreditComponent implements OnInit {
  @ViewChild("doughnutCanvas", { static: false }) doughnutCanvas: ElementRef;
  doughnutChart: any;
  paymentHistory: any;
  utilizationRate: any;
  ageOfCredit: any;
  typeOfCredit: any;
  hardInquires: any;
  visible = true;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  calculateCredit() {
    this.visible = true;
  }
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Payment History",
          "Utilization Rate",
          "Age of Credit",
          "Type of credit",
          "No of hard inquires"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50, 7, 20, 10, 5],
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384"
            ],
            borderWidth: [1, 1, 1, 1, 1]
          }
        ]
      }
    });
  }

  updateChart() {
    this.visible = false;
    this.doughnutChart.data.datasets[0].data[0] = this.paymentHistory;
    this.doughnutChart.data.datasets[0].data[1] = this.utilizationRate;
    this.doughnutChart.data.datasets[0].data[2] = this.ageOfCredit;
    this.doughnutChart.data.datasets[0].data[3] = this.typeOfCredit;
    this.doughnutChart.data.datasets[0].data[4] = this.hardInquires;
    this.doughnutChart.update();
  }
}
