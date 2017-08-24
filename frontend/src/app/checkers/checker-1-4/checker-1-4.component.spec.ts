/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker14Component } from './checker-1-4.component';

describe('Checker14Component', () => {
  let component: Checker14Component;
  let fixture: ComponentFixture<Checker14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
