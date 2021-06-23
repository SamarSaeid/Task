import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCardViewComponent } from './grocery-card-view.component';

describe('GroceryCardViewComponent', () => {
  let component: GroceryCardViewComponent;
  let fixture: ComponentFixture<GroceryCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
