import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'checker-1-1-assessment',
  templateUrl: './checker-1-1-assessment.component.html',
  styleUrls: ['./checker-1-1-assessment.component.css']
})
export class Checker11AssessmentComponent implements OnInit {


  @Input()
  data

  constructor() { }

  ngOnInit() {
  }

}
