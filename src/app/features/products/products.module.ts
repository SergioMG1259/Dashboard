import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardProductEditableComponent } from './components/card-product-editable/card-product-editable.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    ProductsComponent,
    CardProductEditableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    A11yModule
  ]
})
export class ProductsModule { }
