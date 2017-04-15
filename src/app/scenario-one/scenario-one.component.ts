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
      var jobid = json.job_sim.jobid;
      var jobSimArr = [json.job_sim.cat_1_sim,  json.job_sim.cat_2_sim, json.job_sim.cat_3_sim, json.job_sim.cat_4_sim, json.job_sim.cat_5_sim];
      json.cv_similarities.forEach((obj, index) => {
          var cvSimArr = [obj.cat_1_sim, obj.cat_2_sim, obj.cat_3_sim, obj.cat_4_sim, obj.cat_5_sim];
          if(this.charts.length < json.cv_similarities.length) {
              this.charts[index] = new MyChart(this.ctxArr[index], labels, `CV ${obj.cvid}`, cvSimArr, `Job ${jobid}`, jobSimArr);
          } else {
              this.charts[index].redrawGraph(this.ctxArr[index], labels, `CV ${obj.cvid}`, cvSimArr, `Job ${jobid}`, jobSimArr);
          }
      })
  }
}
