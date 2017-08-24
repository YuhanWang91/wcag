import {
  Component, OnInit, ElementRef, ViewChild, AfterViewInit, trigger, state, style,
  transition, animate
} from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations:[
    trigger('showState',[
      transition("void => showed",[style({
        opacity:0
      }),animate("1000ms ease-in",style({
        opacity:1
      }))])
    ])
  ]
})
export class HomepageComponent implements OnInit, AfterViewInit {

  // @ViewChild("test")
  // test
  //
  // top:number
  // isFixed:boolean = false

  constructor(private elem:ElementRef) {

  }

  ngAfterViewInit(){
    // this.top = this.test.nativeElement.getBoundingClientRect().top
    // this.elem.nativeElement.addEventListener("scroll",()=>{
    //   if (!this.isFixed && this.test.nativeElement.getBoundingClientRect().top - this.top < -20) {
    //     this.test.nativeElement.style.position = "fixed";
    //     this.isFixed = true
    //   }
    // })
  }


  ngOnInit() {

  }

}
