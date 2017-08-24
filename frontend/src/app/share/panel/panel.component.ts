import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input()
  padding = "1rem"

  constructor() { }

  ngOnInit() {
  }

}
