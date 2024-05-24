import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  isMenuOpen:boolean = false
  isMenuCollapsed:boolean = false
  isMenuCollapsedPersistence:boolean = this.isMenuCollapsed
  private resizeSubscription!: Subscription;
  private menuServiceSubscription!: Subscription;

  constructor(private menuService:MenuService) { }

  public onClickCollapseMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.isMenuCollapsedPersistence = this.isMenuCollapsed
  }

  public onClickCloseMenu() {
    this.menuService.closeMenu()
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
          }
        }
      )
    this.menuServiceSubscription = this.menuService.menuObservable$.subscribe(
      isMenuOpen => this.isMenuOpen = isMenuOpen
    )
  }

  ngOnDestroy():void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe()
    }
    if(this.menuServiceSubscription) {
      this.menuServiceSubscription.unsubscribe()
    }
  }

}
