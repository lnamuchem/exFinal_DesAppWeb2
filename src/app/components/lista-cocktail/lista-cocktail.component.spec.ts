import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { Component, OnInit } from '@angular/core';
import { ListaCocktailComponent } from './lista-cocktail.component';

describe('ListaCocktailComponent', () => {
  let component: ListaCocktailComponent;
  let fixture: ComponentFixture<ListaCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
