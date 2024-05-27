import { Component, Input, OnInit } from '@angular/core';
import { MetricCard } from '../../models/metricCard';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent implements OnInit {

  @Input() metric!:MetricCard

  constructor() { }

  ngOnInit(): void {
  }

}
