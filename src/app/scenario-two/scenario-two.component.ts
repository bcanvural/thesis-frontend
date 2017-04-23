import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'scenario-two',
    templateUrl: './scenario-two.component.html',
    styleUrls: [ './scenario-two.component.css' ]
})


export class ScenarioTwoComponent implements OnInit {
    title = 'Scenario Two'
    jobid: number;
    method: string;
    skills: Array<string>;

    constructor(private apiService:ApiService){}

    ngOnInit(){
        
    }

    onJobChange(jobid: number): void {
        this.jobid = jobid;
        console.log('onJobChange');
    }
    onMethodChange(method: string): void {
        this.method = method;
        console.log('onMethodChange');
    }
}
