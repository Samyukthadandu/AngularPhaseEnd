import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAdminpwdComponent } from './change-adminpwd.component';

describe('ChangeAdminpwdComponent', () => {
  let component: ChangeAdminpwdComponent;
  let fixture: ComponentFixture<ChangeAdminpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAdminpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAdminpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
