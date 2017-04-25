import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyChart } from '../common-components/myChart';

@Component({
  selector: 'cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {

  @Input() jobid: number;
  @Input() method: string;
  graph: MyChart;
  graphstr = "cv-detail";
  cvDescription: string;
  hideCvDescription = true;
  constructor(private apiService: ApiService){}

  getCV(cvid: string): void{
      this.apiService.getEdisonGraphCV(cvid, this.jobid, this.method)
      .then(json => {
          this.drawGraph(json);
          this.apiService.getCV(cvid).then(cv => this.cvDescription = cv.description)
          this.hideCvDescription = false;
      }).catch(e => console.log(e));
  }

  drawGraph(json: any): void{
      var labels = Object.keys(json.skill_differences);
      var cvDiffArr = [];
      var jobDiffArr = [];
      labels.forEach(label => {
          cvDiffArr.push(json.skill_differences[label])
          jobDiffArr.push(json.job_diff[label])
      });
      if(!this.graph){
          this.graph = new MyChart(this.graphstr, labels, `CV ${json.cvid}`, cvDiffArr, `Job ${this.jobid}`, jobDiffArr)
      } else {
          this.graph.redrawGraph(this.graphstr, labels, `CV ${json.cvid}`, cvDiffArr, `Job ${this.jobid}`, jobDiffArr);
      }
  }

}
