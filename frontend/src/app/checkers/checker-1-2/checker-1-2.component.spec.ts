/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker12Component } from './checker-1-2.component';

describe('Checker12Component', () => {
  let component: Checker12Component;
  let fixture: ComponentFixture<Checker12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
