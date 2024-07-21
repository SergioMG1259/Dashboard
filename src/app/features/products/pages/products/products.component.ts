import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductEditable } from '../../models/ProductEditable';
import { Data, DialogService } from 'src/app/shared/services/dialog.service';
import { Subscription } from 'rxjs';
import { HolaComponent } from 'src/app/shared/components/borrar/hola/hola.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  filterService!:Subscription

  product:ProductEditable = {
    name: 'Classic T-shirt',
    cateogry: 'T-shirt',
    imageURL: 'https://i.pinimg.com/originals/f7/1c/5c/f71c5c1e89dbb27a7e840b6fb60932eb.png',
    stock: 12,
    price: 90,
    discount: true,
    discountPercentage: 17,
    priceFinal: 75,
    colors: ['black','white']
  }

  constructor(private dialogService:DialogService) { }

  openDialog() {
    let hola:Data = {data:{name:'sergio',apellido:'guanilo'}}
    this.filterService = this.dialogService.openDialog(hola,HolaComponent).closed.subscribe((objeto)=>
      {if (objeto)console.log(objeto)});
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.filterService)
      this.filterService.unsubscribe()
    
  }

}
