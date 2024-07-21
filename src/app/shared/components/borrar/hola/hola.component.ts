import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA } from 'src/app/shared/services/dialogData';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  constructor(public dialogRef: DialogRef,@Inject(DIALOG_DATA) public data: any) { }

  sendData() {
    this.dialogRef.close({name:'scv'})
  }

  ngOnInit(): void {
  }

}
