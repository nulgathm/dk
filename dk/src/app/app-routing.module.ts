import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './comps/homepage/homepage.component';
import { OverviewComponent } from './comps/overview/overview.component';

const routes: Routes = [
  {
    path:"homepage", component:HomepageComponent
  },
  {
    path:"overview", component:OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
