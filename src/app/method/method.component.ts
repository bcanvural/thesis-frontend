import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    styleUrls: ['./method.component.css'],
    templateUrl: './method.component.html',
    selector: 'method'
})

export class MethodComponent {
    methods : string[] = ['tfidf', 'countvectorizer', 'word2vec', 'word2vec2', 'count-pca'];
    unchecked: string = 'fa fa-circle-o fa-x';
    checked: string = 'fa fa-check-circle-o fa-x'
    checkedClass: string;
    radioClasses: Array<string>;
    @Output() onMethodChange = new EventEmitter<string>();
    tooltipTexts = ['TFIDF measure among jobs, cvs, and categories all together.',
     'TFIDF measure among jobs, cvs, and categories all together, using term frequency',
     'Word2vec model with cosine similarity among document feature vectors',
     'Word2vec model with cosine similarity among document feature vectors with normalization',
     'Countvectorizer method with PCA dimensionality reduction applied'];
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
