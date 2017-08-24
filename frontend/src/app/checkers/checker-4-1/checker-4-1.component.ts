import { Component, OnInit } from '@angular/core';
import {CheckerService} from "../../service/checker.service";

@Component({
  selector: 'checker-4-1',
  templateUrl: './checker-4-1.component.html',
  styleUrls: ['./checker-4-1.component.css']
})
export class Checker41Component implements OnInit {

  url:string = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca"

  result:any

  isloading:boolean = false

  constructor(
    private checkerService:CheckerService
  ) { }

  ngOnInit() {
  }

  test() {
    this.isloading = true
    this.checkerService.checker_4_1(this.url).subscribe((res) => {
      this.result = res
      this.isloading = false
    }, (err) => {

    })
  }

}
