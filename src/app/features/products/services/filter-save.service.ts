import { Injectable } from '@angular/core';
import { Categories } from 'src/app/core/enums/Categories';
import { Sizes } from 'src/app/core/enums/Sizes';
import { Colors } from 'src/app/core/enums/Colors';

@Injectable({
  providedIn: 'root'
})
export class FilterSaveService {
  
  private _minValue:number|null = 10
  private _maxValue:number|null = 90

  private _categories:Categories[] = []
  private _sizes:Sizes[] = []
  private _colors:Colors[] = []

  set minValue(min:number){this._minValue = min}
  get minValue():number{return this._minValue!}

  set maxValue(max:number){this._maxValue = max}
  get maxValue():number{return this._maxValue!}

  set categories(categories:Categories[]){this._categories = categories}
  get categories(){return this._categories}

  set sizes(sizes:Sizes[]){this._sizes = sizes}
  get sizes(){return this._sizes}

  set colors(colors:Colors[]){this._colors = colors}
  get colors(){return this._colors}

  constructor() { }
}