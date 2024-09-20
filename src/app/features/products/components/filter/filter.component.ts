import { Component, OnInit } from '@angular/core';
import { FilterSaveService } from '../../services/filter-save.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FilterService } from '../../services/filter.service';
import { getColorHex } from '../../models/Color';
import { Categories } from 'src/app/core/enums/Categories';
import { Sizes } from 'src/app/core/enums/Sizes';
import { Colors } from 'src/app/core/enums/Colors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  minValueOrigin:number = 10
  maxValueOrigin:number = 90

  minValue:number|null = 10
  maxValue:number|null = 90

  // categoryList:OptionFilter[] = [
  //   { title: 'T-shirt' },
  //   { title: 'Shirt' },
  //   { title: 'Sweater' },
  //   { title: 'Hoodie' },
  //   { title: 'Blazer' },
  // ];

  categoryList = Object.values(Categories)

  // sizesList:OptionFilter[] = [
  //   { title: 'S' },
  //   { title: 'M' },
  //   { title: 'L' },
  //   { title: 'XL' },
  // ]
  sizesList = Object.values(Sizes)

  // colorList:OptionFilter[] = [
  //   {title: 'black'},
  //   {title: 'white'},
  //   {title: 'blue'},
  //   {title: 'green'},
  //   {title: 'gray'}
  // ]
  colorList = Object.values(Colors)

  categoryModel!: SelectionModel<Categories>
  sizeModel!: SelectionModel<Sizes>
  colorModel!: SelectionModel<Colors>

  getColorHex = getColorHex

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

  onCheckboxChangeCategory(category:Categories){
    this.categoryModel.toggle(category)
    this.filterSaveService.categories = this.categoryModel.selected
  }

  onCheckboxChangeSize(size:Sizes){
    this.sizeModel.toggle(size)
    this.filterSaveService.sizes = this.sizeModel.selected
  }

  onCheckboxChangeColor(color:Colors){
    this.colorModel.toggle(color)
    this.filterSaveService.colors = this.colorModel.selected
  }

  getMatchingInstances(saved: any[], options: any[]): any[] {
    return saved.map(savedItem => options.find(option => option === savedItem))
                .filter((item) => item !== undefined);
  }

  reset() {
    this.categoryModel.clear()
    this.sizeModel.clear()
    this.colorModel.clear()
    this.filterSaveService.categories = this.categoryModel.selected
    this.filterSaveService.sizes = this.sizeModel.selected
    this.filterSaveService.colors = this.colorModel.selected
    this.minValue = this.minValueOrigin
    this.maxValue = this.maxValueOrigin
    this.filterSaveService.minValue = this.minValueOrigin
    this.filterSaveService.maxValue = this.maxValueOrigin
  }

  close() {
    this.filterService.closeFilter()
  }

  ngOnInit(): void {
    this.categoryModel = new SelectionModel<Categories>(
      true,
      this.getMatchingInstances(this.filterSaveService.categories, this.categoryList)
    )
    this.sizeModel = new SelectionModel<Sizes>(
      true,
      this.getMatchingInstances(this.filterSaveService.sizes, this.sizesList)
    )
    this.colorModel = new SelectionModel<Colors>(
      true,
      this.getMatchingInstances(this.filterSaveService.colors, this.colorList)
    )
  }
}