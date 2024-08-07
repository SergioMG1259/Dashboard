import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { FilterComponent } from '../components/filter/filter.component';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  positionStrategy:PositionStrategy|null = null
  overlayRef!: OverlayRef;
  origin!:ElementRef
  classBack:string = 'cdk-overlay-transparent-backdrop'
  isOpen:boolean = false
  private boundKeydownHandler: (event: KeyboardEvent) => void;

  constructor(private overlay:Overlay) {this.boundKeydownHandler = this.handleKeydownOpen.bind(this);}

  get panelOpen(): boolean {
    return this.isOpen;
  }

  openFilter(origin:ElementRef) {
    if (this.isOpen)return
    this.isOpen = true
    this.origin = origin;
    this.updatePositionStrategy();
    this.origin = origin
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: this.classBack,
      positionStrategy: this.positionStrategy!
    })
    const filePreviewPortal = new ComponentPortal(FilterComponent)

    this.overlayRef.attach(filePreviewPortal)

    this.overlayRef.backdropClick().subscribe(() => {this.closeFilter();this.isOpen = false})

    document.addEventListener('keydown', this.boundKeydownHandler);
  }

  updatePositionStrategy() {
    if (window.innerWidth <= 800) {
      this.classBack = 'dialog-bg'
      this.positionStrategy = this.overlay.position().global().right().top();
    } else {
      this.classBack = 'cdk-overlay-transparent-backdrop'
      this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.origin).withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ]);
    }
  }

  closeFilter() {
    if (this.overlayRef) {
      this.overlayRef.detach()
      this.isOpen = false
      document.removeEventListener('keydown', this.boundKeydownHandler);
    }
  }

  updateOverlayPosition() {
    if (this.overlayRef) {
      this.updatePositionStrategy();
      this.overlayRef.updatePositionStrategy(this.positionStrategy!);
    }
  }

  handleScreenResize() {
    if (this.overlayRef && this.isOpen) {
      this.closeFilter();
      this.updateOverlayPosition();
    }
  }

  handleKeydownOpen(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.closeFilter();
    }
  }

}
