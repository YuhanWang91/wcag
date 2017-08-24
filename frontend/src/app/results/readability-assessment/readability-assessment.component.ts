import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'readability-assessment',
  templateUrl: './readability-assessment.component.html',
  styleUrls: ['./readability-assessment.component.css']
})
export class ReadabilityAssessmentComponent implements OnInit {

  surpriseWords:Array<any>
  averageScore:number
  supriseWordCount:Array<number>
  surpriseWordRatio:number
  sentences:Array<Array<any>>

  @Input()
  set data(value){
    this.surpriseWords = value.supriseWords
    this.averageScore = value.averageScore
    this.supriseWordCount = value.supriseWordCount
    this.surpriseWordRatio = value.surpriseWordRatio
    this.sentences = value.sentences
  }

  constructor() { }

  ngOnInit() {
  }

}
