import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSubject = new BehaviorSubject<boolean>(false);
  menuObservable$ = this.menuSubject.asObservable()
  
  constructor() { }

  openMenu() {
    this.menuSubject.next(true)
  }

  closeMenu() {
    this.menuSubject.next(false)
  }
}
