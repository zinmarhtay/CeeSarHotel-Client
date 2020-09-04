import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddrinkComponent } from './fooddrink.component';

describe('FooddrinkComponent', () => {
  let component: FooddrinkComponent;
  let fixture: ComponentFixture<FooddrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
