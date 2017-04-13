import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'job',
    styleUrls: ['./job.component.css'],
    templateUrl: './job.component.html'
})

export class JobComponent {
    constructor(private apiService: ApiService){}
    jobPanelHeading = 'Job description'
    jobDescription = 'Job description will be here';

    getJob(jobid: string): void {
        this.apiService.getJob(jobid)
        .then(job => {
            console.log(job.description);
            this.jobDescription = job.description !== undefined ? job.description : `No job with id ${jobid} found.`;
        })
    }

}
