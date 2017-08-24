import { Component, OnInit } from '@angular/core';
import {CheckerService} from "../../service/checker.service";

@Component({
  selector: 'checker-dashboard',
  templateUrl: './checker-dashboard.component.html',
  styleUrls: ['./checker-dashboard.component.css']
})
export class CheckerDashboardComponent implements OnInit {


  understandableCheckers =[
    {
      name:"Readability Assessment",
      description:"Check surprise words",
      selected:true
    },
    {
      name:"Text Image",
      description:"Check text image match",
      selected:true
    }
  ]

  perceivableCheckers =[
    {
      name:"1.1 Text alternative",
      description:"check none-text content's text alternative",
      selected:true
    },
    {
      name:"1.2 Time-based Media",
      description:"Provide alternatives for time-based media.",
      selected:true
    },
    {
      name:"1.3 Adaptable",
      description:"check none-text content's text alternative",
      selected:true
    },
    {
      name:"1.4 Text alternative",
      description:"Create content that can be presented in different ways",
      selected:true
    },

  ]

  operableCheckers =[
    {
      name:"2.1 Keyboard Accessible",
      description:"Make all functionality available from a keyboard.",
      selected:true
    },
    {
      name:"2.2 Enough Time",
      description:"Provide users enough time to read and use content.",
      selected:true
    },
    {
      name:"2.3 Seizures",
      description:"Do not design content in a way that is known to cause seizures.",
      selected:true
    },
    {
      name:"2.4 Navigable",
      description:"Provide ways to help users navigate, find content, and determine where they are.",
      selected:true
    },

  ]

  robustCheckers =[
    {
      name:"4.1 Compatible",
      description:"Maximize compatibility with current and future user agents, including assistive technologies.",
      selected:true
    }
  ]

  isLoading:boolean = false
  isShowResult:boolean = false

  result:any

  url:string = "http://www.media.pa.gov/Pages/Health-Details.aspx?newsid=421"
  constructor(
    private checkerService:CheckerService
  ) { }

  ngOnInit() {
  }

  runCheckers(){
    this.isLoading = true
    this.isShowResult = false
    this.checkerService.checker_all(this.url).subscribe((result)=>{
      this.result = result
      this.isShowResult = true
      this.isLoading = false
    })
  }

}
