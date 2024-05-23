import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() isMenuOpen:boolean = false
  @Output() isMenuOpenChange:EventEmitter<boolean> = new EventEmitter<boolean>()
  isMenuCollapsed:boolean = false
  isMenuCollapsedPersistence:boolean = this.isMenuCollapsed
  private resizeSubscription!: Subscription;

  constructor() { }

  public onClickCollapseMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.isMenuCollapsedPersistence = this.isMenuCollapsed
  }

  public onClickCloseMenu() {
    this.isMenuOpen = false
    this.isMenuOpenChange.emit(this.isMenuOpen)
  }

  ngOnInit(): void {
    this.resizeSubscription = fromEvent(window,'resize')
      .pipe(
        map((event:Event) => (event.target as Window).innerWidth)
      )
      .subscribe(
        width => {
          if(width <= 450) {
            this.isMenuCollapsed = false
          } else {
            this.isMenuCollapsed = this.isMenuCollapsedPersistence
            this.isMenuOpen = false
            this.isMenuOpenChange.emit(this.isMenuOpen)
          }
        }
      )
  }

  ngOnDestroy():void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
