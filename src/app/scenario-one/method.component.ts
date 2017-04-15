import { Component } from '@angular/core';

@Component({
    styleUrls: ['./method.component.css'],
    templateUrl: './method.component.html',
    selector: 'method'
})

export class MethodComponent {
    methods : string[] = ['tfidf', 'tfidf2', 'countvectorizer', 'word2vec'];
    unchecked: string = 'fa fa-circle-o fa-2x';
    checked: string = 'fa fa-check-circle-o fa-2x'
    checkedClass: string;
    radioClasses: Array<string>;
    constructor(){
        this.resetRadioClasses();
    }
    onClick(method: string, i: number){
        if(this.radioClasses[i] === this.checked){
            this.resetRadioClasses();
            this.radioClasses[i] = this.unchecked;
        } else {
            this.resetRadioClasses();
            this.radioClasses[i] = this.checked;
        }
    }
    resetRadioClasses(){
        this.radioClasses = [this.unchecked, this.unchecked, this.unchecked, this.unchecked];
    }

}
