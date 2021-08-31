import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListDetailComponent } from './cart-list-detail.component';

describe('CartListDetailComponent', () => {
  let component: CartListDetailComponent;
  let fixture: ComponentFixture<CartListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
