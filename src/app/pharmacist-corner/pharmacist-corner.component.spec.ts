import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistCornerComponent } from './pharmacist-corner.component';

describe('PharmacistCornerComponent', () => {
  let component: PharmacistCornerComponent;
  let fixture: ComponentFixture<PharmacistCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
