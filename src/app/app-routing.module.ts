import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioOneComponent } from './scenario-one/scenario-one.component'
import { ScenarioTwoComponent } from './scenario-two/scenario-two.component'

const routes: Routes = [
  { path: '', redirectTo: '/scenario-one', pathMatch: 'full' },
  { path: 'scenario-one',  component: ScenarioOneComponent },
  { path: 'scenario-two', component: ScenarioTwoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
