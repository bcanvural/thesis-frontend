import { Component } from '@angular/core'
import { MyChart } from './myChart';


@Component({
  selector: 'scenario-one',
  templateUrl: './scenario-one.component.html',
  styleUrls: ['./scenario-one.component.css']
})

export class ScenarioOneComponent {
  title = 'Scenario 1';
  ctxArr: Array<string> = ["mychart", "mychart2", "mychart3", "mychart4", "mychart5"];
  myChart: MyChart;
  myChart2: MyChart;
  myChart3: MyChart;
  myChart4: MyChart;
  myChart5: MyChart;

  onClick(): void {
     this.myChart = new MyChart(this.ctxArr[0], ["Eating", "Drinking", "Sleeping", "Designing", "Coding"], "CV1", [65, 59, 90, 81, 56], "Job", [28, 48, 40, 19, 96])
     this.myChart2 = new MyChart(this.ctxArr[1], ["Eating", "Drinking", "Sleeping", "Designing", "Coding"], "CV1", [65, 59, 90, 81, 56], "Job", [28, 48, 40, 19, 96])
     this.myChart3 = new MyChart(this.ctxArr[2], ["Eating", "Drinking", "Sleeping", "Designing", "Coding"], "CV1", [65, 59, 90, 81, 56], "Job", [28, 48, 40, 19, 96])
     this.myChart4 = new MyChart(this.ctxArr[3], ["Eating", "Drinking", "Sleeping", "Designing", "Coding"], "CV1", [65, 59, 90, 81, 56], "Job", [28, 48, 40, 19, 96])
     this.myChart5 = new MyChart(this.ctxArr[4], ["Eating", "Drinking", "Sleeping", "Designing", "Coding"], "CV1", [65, 59, 90, 81, 56], "Job", [28, 48, 40, 19, 96])

  }

}
