import { Component, OnInit } from '@angular/core';
import { MetricCard } from '../../models/metricCard';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  aux:number = 3
  metricCards: MetricCard[] = [
    {
      category: "products",
      amount :  110,
      percentage: 17,
      direction: "down"
    },
    {
      category: "sales",
      amount :  1380,
      percentage: 17,
      direction: "up"
    },
    {
      category: "customers",
      amount :  1790,
      percentage: 17,
      direction: "up"
    },
    {
      category: "revenues",
      amount :  9205,
      percentage: 17,
      direction: "up"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
