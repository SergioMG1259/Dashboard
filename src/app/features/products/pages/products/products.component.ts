import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductEditable } from '../../models/ProductEditable';
import { Data, DialogService } from 'src/app/shared/services/dialog.service';
import { Subscription } from 'rxjs';
import { HolaComponent } from 'src/app/shared/components/borrar/hola/hola.component';
import { FilterService } from '../../services/filter.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild('overlayButton', {read: ElementRef}) private _button!: ElementRef;
  filterDialogService!:Subscription
  filterResizeSub!:Subscription

  isFilterOpen:boolean = false

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

  constructor(private dialogService:DialogService,private filterService:FilterService, 
    public breakpointObserver: BreakpointObserver) { }

  openDialog() {
    let hola:Data = {data:{name:'sergio',apellido:'guanilo'}}
    this.filterDialogService = this.dialogService.openDialog(hola,HolaComponent).closed.subscribe((objeto)=>
      {if (objeto)console.log(objeto)});
  }

  openFilter() {
    if (this.filterService.panelOpen == false) {
      this.filterService.openFilter(this._button)
    }else {
      this.filterService.closeFilter()
    }
      
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.filterDialogService)
      this.filterDialogService.unsubscribe()
    if(this.filterResizeSub)
      this.filterResizeSub.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.filterResizeSub = this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((state: BreakpointState) => {
      this.filterService.handleScreenResize();
    });
  }

}
