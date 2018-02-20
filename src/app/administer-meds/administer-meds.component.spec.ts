import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministerMedsComponent } from './administer-meds.component';

describe('AdministerMedsComponent', () => {
  let component: AdministerMedsComponent;
  let fixture: ComponentFixture<AdministerMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministerMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministerMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
