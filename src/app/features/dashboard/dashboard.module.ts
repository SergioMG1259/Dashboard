import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    A11yModule
  ]
})
export class DashboardModule { }
