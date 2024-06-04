import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownOptionComponent } from './components/dropdown-option/dropdown-option.component'


@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent
  ]
})
export class SharedModule { }
