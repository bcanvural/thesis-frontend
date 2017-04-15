import { Component } from '@angular/core'
import { MyChart } from './myChart';
import { Skill } from './skill';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'scenario-one',
    templateUrl: './scenario-one.component.html',
    styleUrls: ['./scenario-one.component.css']
})

export class ScenarioOneComponent {
    title = 'Scenario 1';
    notEnoughParametersStr = 'Not enough parameters to draw the graphs.';
    SKILL_NUM = 5;
    jobid: number;
    method: string;
    skills: Array<Skill>;
    readyToDraw = false;
    ctxArr: Array<string> = ["mychart", "mychart2", "mychart3", "mychart4", "mychart5"];
    myChart: MyChart;
    myChart2: MyChart;
    myChart3: MyChart;
    myChart4: MyChart;
    myChart5: MyChart;

    constructor(private apiService: ApiService){}

  onJobChange(jobid: number): void {
      this.jobid = jobid;
      this.attemptToDraw();
  }

  onMethodChange(method: string): void {
      this.method = method;
      this.attemptToDraw();
  }

  onSkillChange(skills: Array<Skill>): void {
      this.skills = skills;
      this.attemptToDraw();
  }

  attemptToDraw(): void {
     if (this.method && this.jobid && (this.skills && this.skills.length == this.SKILL_NUM) ) {
         console.log('drawing..');
         this.apiService.getGraphData(this.jobid, this.method, this.skills)
         .then(json => this.drawGraph(json))
         .catch(error => {
             console.log(error);
             return;
         })
         this.readyToDraw = true;
     } else {
         this.readyToDraw = false;
     }
  }

  drawGraph(json: any): void {
      console.log(json);
      var labels = [];
      this.skills.forEach(skill => labels.push(skill.skillName));
      var jobid = json.job_sim.jobid;
      var jobSimArr = [json.job_sim.cat_1_sim,  json.job_sim.cat_2_sim, json.job_sim.cat_3_sim, json.job_sim.cat_4_sim, json.job_sim.cat_5_sim]
      var charts = [this.myChart, this.myChart2, this.myChart3, this.myChart4, this.myChart5]
      json.cv_similarities.forEach((obj, index) => {
          console.log(obj);
          console.log(index);
          var cvSimArr = [obj.cat_1_sim, obj.cat_2_sim, obj.cat_3_sim, obj.cat_4_sim, obj.cat_5_sim];
          charts[index] = new MyChart(this.ctxArr[index], labels, `CV ${obj.cvid}`, cvSimArr, `Job ${jobid}`, jobSimArr);
      })
  }
}
