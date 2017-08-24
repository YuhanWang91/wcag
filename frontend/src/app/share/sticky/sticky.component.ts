import {Component, OnInit, HostListener} from '@angular/core';



@Component({
  selector: 'sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener("scroll",()=>{
      console.log(window);
    })
  }

  @HostListener("window:scroll",["$event"])
  onScroll(){

  }
}
