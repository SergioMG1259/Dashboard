import { Injectable } from '@angular/core';
import { Dialog, DialogConfig } from "@angular/cdk/dialog";
import { DialogComponent } from '../components/dialog/dialog.component';
import { DIALOG_DATA } from './dialogData';
import { ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

export interface Data {
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog:Dialog) { }

  openDialog(config?: Data,component?: ComponentType<any>) {

    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-modalbox',
      hasBackdrop: true,
      backdropClass: 'dialog-bg',
      providers: [{provide:DIALOG_DATA, useValue: config?.data}]
      // positionStrategy: this.overlay.position().global().right().top()
    });

    const portal = new ComponentPortal(component!);
    dialogRef.componentInstance!.selectedPortal = portal;

    return dialogRef;
  }
}
