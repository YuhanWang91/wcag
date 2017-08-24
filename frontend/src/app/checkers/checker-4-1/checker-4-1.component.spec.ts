/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker41Component } from './checker-4-1.component';

describe('Checker41Component', () => {
  let component: Checker41Component;
  let fixture: ComponentFixture<Checker41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
