import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownOptionComponent } from './components/dropdown-option/dropdown-option.component';
import { DialogComponent } from './components/dialog/dialog.component'
import { PortalModule } from '@angular/cdk/portal';
import { HolaComponent } from './components/borrar/hola/hola.component';


@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent,
    DialogComponent,
    HolaComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent
  ]
})
export class SharedModule { }
