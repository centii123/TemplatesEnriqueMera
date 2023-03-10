import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CategoryComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoryComponent,
    DashboardComponent,
    ProductComponent
  ]
})
export class PagesModule { }
