import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteProductsComponent } from './add-delete-products.component';

describe('AddDeleteProductsComponent', () => {
  let component: AddDeleteProductsComponent;
  let fixture: ComponentFixture<AddDeleteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
