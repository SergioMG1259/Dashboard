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
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent,
    DialogComponent,
    HolaComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownOptionComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
