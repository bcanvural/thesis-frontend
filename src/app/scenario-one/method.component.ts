import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    styleUrls: ['./method.component.css'],
    templateUrl: './method.component.html',
    selector: 'method'
})

export class MethodComponent {
    methods : string[] = ['tfidf', 'tfidf2', 'countvectorizer', 'word2vec'];
    unchecked: string = 'fa fa-circle-o fa-x';
    checked: string = 'fa fa-check-circle-o fa-x'
    checkedClass: string;
    radioClasses: Array<string>;
    @Output() onMethodChange = new EventEmitter<string>();
    constructor(){
        this.resetRadioClasses();
    }
    onClick(method: string, i: number){
        if(this.radioClasses[i] === this.checked){
            this.resetRadioClasses();
            this.onMethodChange.emit("");
        } else {
            this.resetRadioClasses();
            this.radioClasses[i] = this.checked;
            this.onMethodChange.emit(this.methods[i]);
        }
    }
    resetRadioClasses(){
        this.radioClasses = Array(this.methods.length).fill(this.unchecked);
    }
}
