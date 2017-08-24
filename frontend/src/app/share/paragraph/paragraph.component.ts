import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input()
  title

  constructor() { }

  ngOnInit() {
  }

}
