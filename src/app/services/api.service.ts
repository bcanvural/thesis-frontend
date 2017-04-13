import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Job } from '../scenario-one/job';

@Injectable()
export class ApiService {
    private baseUrl = 'http://localhost:5000';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getJob(id: string): Promise<Job> {
        const url = `${this.baseUrl}/job/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().response as Job)
        .catch(this.handleError);
    }
}
