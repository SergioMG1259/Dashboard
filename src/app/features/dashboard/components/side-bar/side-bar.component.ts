import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit,AfterViewInit {

  tabIndex:number = 0
  isMobile:boolean = false
  isMenuOpen:boolean = false
  isMenuCollapsed:boolean = false
  isMenuCollapsedPersistence:boolean = this.isMenuCollapsed
  private resizeSubscription!: Subscription;
  private menuServiceSubscription!: Subscription;
  @ViewChild('first') first!: ElementRef;

  constructor(private menuService:MenuService,public breakpointObserver: BreakpointObserver,private cd: ChangeDetectorRef) { }

  public onClickCollapseMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.isMenuCollapsedPersistence = this.isMenuCollapsed
  }

  public onClickCloseMenu() {
    this.menuService.closeMenu()
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.resizeSubscription = fromEvent(window,'resize')
    // .pipe(
    //   map((event:Event) => (event.target as Window).innerWidth)
    // )
    // .subscribe(
    //   width => {
    //     if(width <= 450) {
    //       this.isMenuCollapsed = false
    //     } else {
    //       this.isMenuCollapsed = this.isMenuCollapsedPersistence
    //       this.isMenuOpen = false
    //     }
    //   }
    // )

  this.resizeSubscription = this.breakpointObserver.observe(['(max-width: 450px)']).subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.isMenuCollapsed = false
        this.tabIndex = -1
        this.isMobile = true
        this.cd.detectChanges();
      }else {
        this.isMenuCollapsed = this.isMenuCollapsedPersistence
        this.isMenuOpen = false
        this.tabIndex = 0
        this.isMobile = false
      }
  });  
  this.menuServiceSubscription = this.menuService.menuObservable$.subscribe(
    (isMenuOpen) => {
      this.isMenuOpen = isMenuOpen;
      this.cd.detectChanges();
      if(isMenuOpen){
        this.first.nativeElement.focus()
        this.tabIndex = 0
      }else if (!isMenuOpen && this.isMobile){
        this.tabIndex = -1
      }
    }
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
