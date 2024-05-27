import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';


@NgModule({
  declarations: [
    OverviewComponent,
    MetricCardComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
