import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  minValue:number = 10
  maxValue:number = 90
  aux:boolean = false

  constructor() {}

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

  ngOnInit(): void {
  }

}
