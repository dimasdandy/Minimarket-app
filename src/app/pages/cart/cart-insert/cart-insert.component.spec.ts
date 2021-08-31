import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInsertComponent } from './cart-insert.component';

describe('CartInsertComponent', () => {
  let component: CartInsertComponent;
  let fixture: ComponentFixture<CartInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
