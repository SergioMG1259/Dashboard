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
  private _colors:OptionFilter[] = []

  set minValue(min:number){this._minValue = min}
  get minValue():number{return this._minValue!}

  set maxValue(max:number){this._maxValue = max}
  get maxValue():number{return this._maxValue!}

  set categories(categories:OptionFilter[]){this._categories = categories}
  get categories(){return this._categories}

  set sizes(sizes:OptionFilter[]){this._sizes = sizes}
  get sizes(){return this._sizes}

  set colors(colors:OptionFilter[]){this._colors = colors}
  get colors(){return this._colors}

  constructor() { }
}