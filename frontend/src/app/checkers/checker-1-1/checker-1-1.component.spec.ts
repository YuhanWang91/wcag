/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker11Component } from './checker-1-1.component';

describe('Checker11Component', () => {
  let component: Checker11Component;
  let fixture: ComponentFixture<Checker11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
