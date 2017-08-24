import {Component, OnInit, Input} from '@angular/core';
import {MdlDefaultTableModel} from "angular2-mdl";

@Component({
  selector: 'checker-category',
  templateUrl: './checker-category.component.html',
  styleUrls: ['./checker-category.component.css']
})
export class CheckerCategoryComponent implements OnInit {

  @Input()
  icon:string

  @Input()
  title:string


  @Input()
  set models(models){
    this.tableModel.addAll(models);
    this._models = models;
  }

  private _models: Array<any>;

  tableModel = new MdlDefaultTableModel([
    {
      key:"name",
      name:"Checker Name"
    },
    {
      key:"description",
      name:"Description"
    }
  ])

  constructor() {

  }

  ngOnInit() {
  }

  selectionChanged($event){
    console.log(this._models);
  }

}
