import { Component, Input, OnInit } from '@angular/core';
import { MetricCard } from '../../models/metricCard';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent implements OnInit {
  
  iconsDictionary: Record<string, string> = {
    products: "bx-package",
    sales: "bx-purchase-tag",
    customers: "bx-group",
    revenues: "bx-money"
  };
  
  @Input() metric!:MetricCard

  constructor() { }

  ngOnInit(): void {
  }

}
