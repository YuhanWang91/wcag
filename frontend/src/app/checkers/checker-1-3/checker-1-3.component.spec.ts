/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker13Component } from './checker-1-3.component';

describe('Checker13Component', () => {
  let component: Checker13Component;
  let fixture: ComponentFixture<Checker13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
