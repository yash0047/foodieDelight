import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateRestaurantComponent } from './add-update-restaurant.component';

describe('AddUpdateRestaurantComponent', () => {
  let component: AddUpdateRestaurantComponent;
  let fixture: ComponentFixture<AddUpdateRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateRestaurantComponent]
    });
    fixture = TestBed.createComponent(AddUpdateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
