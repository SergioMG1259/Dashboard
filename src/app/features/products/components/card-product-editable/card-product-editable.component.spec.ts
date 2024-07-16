import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductEditableComponent } from './card-product-editable.component';

describe('CardProductEditableComponent', () => {
  let component: CardProductEditableComponent;
  let fixture: ComponentFixture<CardProductEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
