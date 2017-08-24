import { Component, OnInit } from '@angular/core';
import {CheckerService} from "../../service/checker.service";
import {log} from "util";

@Component({
  selector: 'demo-checker',
  templateUrl: './demo-checker.component.html',
  styleUrls: ['./demo-checker.component.css']
})
export class DemoCheckerComponent implements OnInit {

  url:string = "http://www.media.pa.gov/Pages/Health-Details.aspx?newsid=426"

  sentences:Array<any>
  result:any

  isloading:boolean = false

  constructor(
    private checkerService:CheckerService
  ) { }

  ngOnInit() {

  }

  test(){
    this.isloading = true
    this.sentences = null
    this.checkerService.checkerDemo(this.url).subscribe((res)=>{
      this.result = res
      this.isloading = false
    },(err)=>{
    })
  }
}
