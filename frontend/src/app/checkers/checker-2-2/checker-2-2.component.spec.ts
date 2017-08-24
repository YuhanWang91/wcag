/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checker22Component } from './checker-2-2.component';

describe('Checker22Component', () => {
  let component: Checker22Component;
  let fixture: ComponentFixture<Checker22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checker22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checker22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
