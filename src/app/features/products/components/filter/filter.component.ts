import { Component, OnInit } from '@angular/core';
import { FilterSaveService } from '../../services/filter-save.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { OptionFilter } from '../../models/OptionFilter';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  minValue:number|null = 10
  maxValue:number|null = 90

  categoryList:OptionFilter[] = [
    { title: 'T-shirt' },
    { title: 'Shirt' },
    { title: 'Sweater' },
    { title: 'Hoodie' },
    { title: 'Blazer' },
  ];

  sizesList:OptionFilter[] = [
    { title: 'S' },
    { title: 'M' },
    { title: 'L' },
    { title: 'XL' },
  ]

  categoryModel!: SelectionModel<OptionFilter>;
  sizeModel!: SelectionModel<OptionFilter>;

  constructor(private filterSaveService:FilterSaveService,private filterService:FilterService) {
    this.minValue = this.filterSaveService.minValue
    this.maxValue = this.filterSaveService.maxValue
  }

  saveMinValue() {
    this.filterSaveService.minValue = this.minValue!
  }
  saveMaxValue() {
    this.filterSaveService.maxValue = this.maxValue!
  }

  onCheckboxChangeCategory(category:OptionFilter){
    this.categoryModel.toggle(category)
    this.filterSaveService.categories = this.categoryModel.selected
  }

  onCheckboxChangeSize(size:OptionFilter){
    this.sizeModel.toggle(size)
    this.filterSaveService.sizes = this.sizeModel.selected
  }

  getMatchingInstances(saved: OptionFilter[], options: OptionFilter[]): OptionFilter[] {
    return saved.map(savedItem => options.find(option => option.title === savedItem.title))
                .filter((item): item is OptionFilter => item !== undefined);
  }

  reset() {
    this.categoryModel.clear()
    this.sizeModel.clear()
    this.filterSaveService.categories = this.categoryModel.selected
    this.filterSaveService.sizes = this.sizeModel.selected
  }

  close() {
    this.filterService.closeFilter()
  }

  ngOnInit(): void {
    this.categoryModel = new SelectionModel<OptionFilter>(
      true,
      this.getMatchingInstances(this.filterSaveService.categories, this.categoryList)
    );
    this.sizeModel = new SelectionModel<OptionFilter>(
      true,
      this.getMatchingInstances(this.filterSaveService.sizes, this.sizesList)
    );
  }

  // p(){return this.model.toggle()}
  // _input(input:string) {
  //   let priceGap = 10
  //   console.log(this.minValue + ' - '+ this.maxValue)
  //   if((this.maxValue - this.minValue <= priceGap) && this.maxValue <= 100) {
  //     if(input == 'max') {
  //       if(this.minValue > 0) {
  //         if(this.minValue > priceGap) {
  //           this.minValue = this.maxValue - priceGap
  //         }else {
  //           this.minValue = 0
  //         }
          
          
  //       }  
  //     }
  //     else {
  //       if(this.maxValue < 100 - priceGap) {
  //         this.maxValue = this.minValue + priceGap
          
  //       }else {
  //         this.maxValue = 100
  //       }
          
  //     }
  //   }
  // }

  // progressLeft():string {
  //   if (this.minValue >= 0) {
  //     return (this.minValue/100)*100 + '%'
  //   }
  //   return 0 + '%'
  // }

  // progressRight():string {
  //   if(this.maxValue <= 100) {
  //     return 100-(this.maxValue/100)*100 + '%'
  //   }
  //   return 0 + '%'
  // }
}