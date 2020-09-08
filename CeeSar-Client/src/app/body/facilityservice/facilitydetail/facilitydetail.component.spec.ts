import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitydetailComponent } from './facilitydetail.component';

describe('FacilitydetailComponent', () => {
  let component: FacilitydetailComponent;
  let fixture: ComponentFixture<FacilitydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
