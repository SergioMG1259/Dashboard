import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit,AfterViewInit,OnDestroy {

  menuServiceSubscription!:Subscription
  @ViewChild('menu') menu!: ElementRef;

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {

  }
  
  onClickOpenMenu() {
    this.menuService.openMenu()
  }

  ngAfterViewInit(): void {
    this.menuServiceSubscription = this.menuService.menuObservable$.subscribe(
      (isMenuOpen) => {if(!isMenuOpen){this.menu.nativeElement.focus()}}
    )
  }

  ngOnDestroy(): void {
    if(this.menuServiceSubscription)
      this.menuServiceSubscription.unsubscribe()
  }

}
