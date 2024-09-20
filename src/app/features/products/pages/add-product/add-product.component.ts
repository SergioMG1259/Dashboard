import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/enums/Categories';
import { Sizes } from 'src/app/core/enums/Sizes';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  aux:any = "2"
  category:string = ''
  sizes = Object.values(Sizes)
  categories = Object.values(Categories)
  
  constructor() { }

  ngOnInit(): void {
  }

}
