/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker24Component } from './checker-2-4.component';

describe('Checker24Component', () => {
  let component: Checker24Component;
  let fixture: ComponentFixture<Checker24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
