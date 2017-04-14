import { Component, OnInit } from '@angular/core';
import { Skill } from './skill'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'skills',
    styleUrls: ['skills.component.css'],
    templateUrl: 'skills.component.html'
})

export class SkillsComponent implements OnInit{
    private SKILL_NUM = 5;
    skills: Skill[] = new Array<Skill>();
    showTable: boolean = false;
    noSkillsText: string = 'No skills added yet.';
    recomendedSkills: Observable<Skill[]>;
    private searchTerms = new Subject<string>();

    constructor(private apiService: ApiService){}

    ngOnInit(){
        for(var i=0; i<this.SKILL_NUM; i++){
            this.skills[i] = new Skill();
        }
        this.recomendedSkills = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => {
            if (term.length >= 3) {
                 return this.apiService.searchSkill(term);
            } else {
                return Observable.of<Skill[]>([])
            }
    })
      .catch(error => {
        console.log(error);
        return Observable.of<Skill[]>([]);
      });
    }

    recSelected(rec: Skill): void{
        console.log('rec selected');
    }

    recSkills(term: string): void {
        this.searchTerms.next(term);
    }
}
