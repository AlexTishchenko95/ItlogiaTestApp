import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaChooseComponent } from './pizza-choose.component';

describe('PizzaChooseComponent', () => {
  let component: PizzaChooseComponent;
  let fixture: ComponentFixture<PizzaChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
