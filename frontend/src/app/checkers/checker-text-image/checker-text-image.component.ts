import { Component, OnInit } from '@angular/core';
import {CheckerService} from "../../service/checker.service";

@Component({
  selector: 'checker-text-image',
  templateUrl: './checker-text-image.component.html',
  styleUrls: ['./checker-text-image.component.css']
})
export class CheckerTextImageComponent implements OnInit {

  url:string = "https://newsela.com/articles/nigerian-school-girls-released/id/30509/"

  result:any

  isloading:boolean = false

  constructor(
    private checkerService:CheckerService
  ) { }

  ngOnInit() {
  }

  test(){
    this.isloading = true
    this.checkerService.checker_text_image(this.url).subscribe((res)=>{
      this.result = {
        score:res.s,
        a: res.a.join(",")
      }
      this.isloading = false
    },(err)=>{
    })

  }

}
