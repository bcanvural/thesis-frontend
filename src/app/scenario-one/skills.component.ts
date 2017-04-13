import { Component, OnInit } from '@angular/core';
import { Skill } from './skill'

@Component({
    selector: 'skills',
    styleUrls: ['skills.component.css'],
    templateUrl: 'skills.component.html'
})

export class SkillsComponent implements OnInit{
    skills: Skill[];
    ngOnInit(){
        this.skills = new Array<Skill>();
        for(var i = 0; i < 5; i++){
            this.skills.push(new Skill());
        }
    }
}
