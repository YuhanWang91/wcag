/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker21Component } from './checker-2-1.component';

describe('Checker21Component', () => {
  let component: Checker21Component;
  let fixture: ComponentFixture<Checker21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
