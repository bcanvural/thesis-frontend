import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScenarioOneComponent } from './scenario-one/scenario-one.component';
import { ScenarioTwoComponent } from './scenario-two/scenario-two.component';
import { JobComponent } from './scenario-one/job.component';
import { SkillsComponent } from './scenario-one/skills.component';
import { FocusDirective } from './scenario-one/focus.directive';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioOneComponent,
    ScenarioTwoComponent,
    JobComponent,
    SkillsComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
