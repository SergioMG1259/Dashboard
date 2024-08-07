import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  // value:boolean = false
  @Input() value:boolean = false
  @Output() valueChange = new EventEmitter<boolean>()

  constructor() { }

  onClick() { this.valueChange.emit(!this.value) }

  ngOnInit(): void {
  }

}
