import { Component, OnInit } from '@angular/core';
import {CheckerService} from "../../service/checker.service";

@Component({
  selector: 'checker-1-2',
  templateUrl: './checker-1-2.component.html',
  styleUrls: ['./checker-1-2.component.css']
})
export class Checker12Component implements OnInit {

  url:string = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca"

  result:any

  isloading:boolean = false

  constructor(
    private checkerService:CheckerService
  ) {

  }

  ngOnInit() {
  }


  test(){
    this.isloading = true
    this.checkerService.checker_1_2(this.url).subscribe((res)=>{
      this.result = res
      this.isloading = false
    },(err)=>{
    })


  }
}