import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCocktailComponent } from './detalle-cocktail.component';

describe('DetalleCocktailComponent', () => {
  let component: DetalleCocktailComponent;
  let fixture: ComponentFixture<DetalleCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
