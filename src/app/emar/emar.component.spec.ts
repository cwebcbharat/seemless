import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmarComponent } from './emar.component';

describe('EmarComponent', () => {
  let component: EmarComponent;
  let fixture: ComponentFixture<EmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
