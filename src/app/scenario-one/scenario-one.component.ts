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
    displayGraph = false;
    ctxArr: Array<string> = ["mychart", "mychart2", "mychart3", "mychart4", "mychart5"];
    charts: Array<MyChart> = [];
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
         this.apiService.getGraphData(this.jobid, this.method, this.skills)
         .then(json => this.drawGraph(json))
         .catch(error => {
             console.log(error);
             return;
         })
         this.displayGraph = true;
     } else {
         this.displayGraph = false;
     }
  }

  drawGraph(json: any): void {
      var labels = [];
      this.skills.forEach(skill => labels.push(skill.skillName));
      var jobid = json.job_diff.jobid;
      var jobDiffArr = [json.job_diff.cat_1_diff,  json.job_diff.cat_2_diff, json.job_diff.cat_3_diff, json.job_diff.cat_4_diff, json.job_diff.cat_5_diff];
      json.cv_differences.forEach((obj, index) => {
          var cvDiffArr = [obj.cat_1_diff, obj.cat_2_diff, obj.cat_3_diff, obj.cat_4_diff, obj.cat_5_diff];
          if(this.charts.length < json.cv_differences.length) {
              this.charts[index] = new MyChart(this.ctxArr[index], labels, `CV ${obj.cvid}`, cvDiffArr, `Job ${jobid}`, jobDiffArr);
          } else {
              this.charts[index].redrawGraph(this.ctxArr[index], labels, `CV ${obj.cvid}`, cvDiffArr, `Job ${jobid}`, jobDiffArr);
          }
      })
  }
}
