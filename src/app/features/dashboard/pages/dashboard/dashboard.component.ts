import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  isExpanded:boolean = false 
  isMenuOpen:boolean = false

  constructor() { }

  public onClickOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit(): void {
  }

}
