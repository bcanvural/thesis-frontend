import { Component, OnInit } from '@angular/core';
import { Skill } from './skill'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { FocusDirective } from './focus.directive';
import { ViewChildren } from '@angular/core';

@Component({
    selector: 'skills',
    styleUrls: ['skills.component.css'],
    templateUrl: 'skills.component.html'
})

export class SkillsComponent implements OnInit{
    private SKILL_NUM = 5;
    skills: Skill[] = new Array<Skill>();
    inputValues: string[] = new Array<string>();
    @ViewChildren(FocusDirective) vc;
    constructor(private apiService: ApiService){}
    ngOnInit(){
        for(var i=0; i<this.SKILL_NUM; i++){
            this.skills[i] = new Skill();
            this.inputValues[i] = "";
        }
    }
    getSkill(skillName: string, index: number): void {
        this.apiService.getSkill(skillName)
        .then(skill => {
            this.inputValues[index] = skillName;
             if(skill.catid !== undefined) {
                this.skills[index] = skill
                this.vc.forEach(dir => {
                    if (dir.el.nativeElement.getAttribute('index') == (index+1)){
                        dir.focus();
                    }
                })
             }
        });
    }
}
