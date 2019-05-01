import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ HttpClientModule} from '@angular/common /http'

import {NgProgresModule} from '@ngx-progressbar/core';
import {NgprogressHttpModule} from '@ngx-progressbar/http'
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import {AlertsService} from './alert-service/alerts.service',
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    HttpClientMoodule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule // progress bar to load http requests    
  ],
  providers: [AlertsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
