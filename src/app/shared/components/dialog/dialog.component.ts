import { Component, OnInit } from '@angular/core';
import { DialogRef } from "@angular/cdk/dialog";
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  selectedPortal: Portal<any>|null = null

  constructor(public dialogRef:DialogRef) { }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
   
  }

}
