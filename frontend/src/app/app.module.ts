import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import {CountUpModule} from 'countup.js/countUp.module';


import { AppComponent } from './app.component';
import {MdlModule} from "angular2-mdl";
import { HomepageComponent } from './homepage/homepage.component';
import {routes} from "./routes";
import { PanelComponent } from './share/panel/panel.component';
import { DemoCheckerComponent } from './share/demo-checker/demo-checker.component';
import {CheckerService} from "./service/checker.service";
import { ReadabilityDashboardComponent } from './dashboards/readability-dashboard/readability-dashboard.component';
import { SentenceComponent } from './share/sentence/sentence.component';
import { ParagraphComponent } from './share/paragraph/paragraph.component';
import { CheckerDashboardComponent } from './dashboards/checker-dashboard/checker-dashboard.component';
import { CheckerCategoryComponent } from './share/checker-category/checker-category.component';
import { StickyComponent } from './share/sticky/sticky.component';
import {ChartsModule} from "ng2-charts";
import { ReadabilityAssessmentComponent } from './results/readability-assessment/readability-assessment.component';
import { PerceivableDashboardComponent } from './dashboards/perceivable-dashboard/perceivable-dashboard.component';
import { Checker11Component } from './checkers/checker-1-1/checker-1-1.component';
import { Checker11AssessmentComponent } from './results/checker-1-1-assessment/checker-1-1-assessment.component';
import { Checker12Component } from './checkers/checker-1-2/checker-1-2.component';
import { CheckerTextImageComponent } from './checkers/checker-text-image/checker-text-image.component';
import { Checker13Component } from './checkers/checker-1-3/checker-1-3.component';
import { Checker14Component } from './checkers/checker-1-4/checker-1-4.component';
import { OperableDashboardComponent } from './dashboards/operable-dashboard/operable-dashboard.component';
import { RobustDashboardComponent } from './dashboards/roubust-dashboard/roubust-dashboard.component';
import { Checker21Component } from './checkers/checker-2-1/checker-2-1.component';
import { Checker22Component } from './checkers/checker-2-2/checker-2-2.component';
import { Checker23Component } from './checkers/checker-2-3/checker-2-3.component';
import { Checker24Component } from './checkers/checker-2-4/checker-2-4.component';
import { Checker41Component } from './checkers/checker-4-1/checker-4-1.component';
import { ShowDetailsComponent } from './share/show-details/show-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PanelComponent,
    DemoCheckerComponent,
    ReadabilityDashboardComponent,
    SentenceComponent,
    ParagraphComponent,
    CheckerDashboardComponent,
    CheckerCategoryComponent,
    StickyComponent,
    ReadabilityAssessmentComponent,
    PerceivableDashboardComponent,
    Checker11Component,
    Checker11AssessmentComponent,
    Checker12Component,
    CheckerTextImageComponent,
    Checker13Component,
    Checker14Component,
    OperableDashboardComponent,
    RobustDashboardComponent,
    Checker21Component,
    Checker22Component,
    Checker23Component,
    Checker24Component,
    Checker41Component,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    CountUpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
