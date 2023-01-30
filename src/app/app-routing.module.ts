import { PageRoutingModule } from './pages/page-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './no-found/no-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'**', component:NoFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule, 
    PageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
