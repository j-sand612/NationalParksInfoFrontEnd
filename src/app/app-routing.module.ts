import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,
  },
  {
      path:"data",
      component: ShowDataComponent,
  },
  {
      path:"**",
      component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
