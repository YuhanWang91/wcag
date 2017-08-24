/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker23Component } from './checker-2-3.component';

describe('Checker23Component', () => {
  let component: Checker23Component;
  let fixture: ComponentFixture<Checker23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
