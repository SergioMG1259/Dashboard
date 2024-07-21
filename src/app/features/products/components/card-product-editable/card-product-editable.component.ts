import { Component, Input, OnInit } from '@angular/core';
import { ProductEditable } from '../../models/ProductEditable';
import { getColorHex } from '../../models/Color';

@Component({
  selector: 'app-card-product-editable',
  templateUrl: './card-product-editable.component.html',
  styleUrls: ['./card-product-editable.component.css']
})
export class CardProductEditableComponent implements OnInit {

  @Input() product!:ProductEditable
  getColorHex = getColorHex

  constructor() { }

  ngOnInit(): void {
  }

}
