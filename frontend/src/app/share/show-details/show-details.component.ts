import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input()
  title

  isShowDetail:boolean = false
  constructor() { }

  ngOnInit() {
  }

  showDetail(){
    this.isShowDetail = true
  }

}
