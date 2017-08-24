import {Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {DemoCheckerComponent} from "./share/demo-checker/demo-checker.component";
import {ReadabilityDashboardComponent} from "./dashboards/readability-dashboard/readability-dashboard.component";
import {CheckerDashboardComponent} from "./dashboards/checker-dashboard/checker-dashboard.component";
import {PerceivableDashboardComponent} from "./dashboards/perceivable-dashboard/perceivable-dashboard.component";
import {Checker11Component} from "./checkers/checker-1-1/checker-1-1.component";
import {Checker12Component} from "./checkers/checker-1-2/checker-1-2.component";
import {CheckerTextImageComponent} from "./checkers/checker-text-image/checker-text-image.component";
import {Checker13Component} from "./checkers/checker-1-3/checker-1-3.component";
import {Checker14Component} from "./checkers/checker-1-4/checker-1-4.component";
import {OperableDashboardComponent} from "./dashboards/operable-dashboard/operable-dashboard.component";
import {RobustDashboardComponent} from "./dashboards/roubust-dashboard/roubust-dashboard.component";
import {Checker21Component} from "./checkers/checker-2-1/checker-2-1.component";
import {Checker22Component} from "./checkers/checker-2-2/checker-2-2.component";
import {Checker23Component} from "./checkers/checker-2-3/checker-2-3.component";
import {Checker24Component} from "./checkers/checker-2-4/checker-2-4.component";
import {Checker41Component} from "./checkers/checker-4-1/checker-4-1.component";
/**
 * Created by tony on 4/20/17.
 */
export let routes:Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"checker",
    children:[

      {
        path:"1-1",
        component:Checker11Component
      },
      {
        path:"1-2",
        component:Checker12Component
      },
      {
        path:"1-3",
        component:Checker13Component
      },
      {
        path:"1-4",
        component:Checker14Component
      },
      {
        path:"2-1",
        component:Checker21Component
      },
      {
        path:"2-2",
        component:Checker22Component
      },
      {
        path:"2-3",
        component:Checker23Component
      },
      {
        path:"2-4",
        component:Checker24Component
      },
      {
        path:"4-1",
        component:Checker41Component
      },
      {
        path:"text-image",
        component:CheckerTextImageComponent
      },
      {
        path:"demo",
        component:DemoCheckerComponent
      },
    ]
  },
  {
    path:"readability-dashboard",
    component:ReadabilityDashboardComponent
  },
  {
    path:"perceivable-dashboard",
    component:PerceivableDashboardComponent
  },
  {
    path:"operable-dashboard",
    component:OperableDashboardComponent
  },
  {
    path:"robust-dashboard",
    component:RobustDashboardComponent
  },
  {
    path:"checker-dashboard",
    component:CheckerDashboardComponent
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"/"
  }
]
