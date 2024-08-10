import { Injectable } from '@angular/core';
import { OptionFilter } from '../models/OptionFilter';

@Injectable({
  providedIn: 'root'
})
export class FilterSaveService {
  
  private _minValue:number|null = 10
  private _maxValue:number|null = 90

  private _categories:OptionFilter[] = []
  private _sizes:OptionFilter[] = []

  set minValue(min:number){this._minValue = min}
  get minValue():number{return this._minValue!}

  set maxValue(max:number){this._maxValue = max}
  get maxValue():number{return this._maxValue!}

  set categories(category:OptionFilter[]){this._categories = category}
  get categories(){return this._categories}

  set sizes(size:OptionFilter[]){this._sizes = size}
  get sizes(){return this._sizes}

  constructor() { }
}
