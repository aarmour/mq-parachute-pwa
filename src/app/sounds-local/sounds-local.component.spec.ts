/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoundsLocalComponent } from './sounds-local.component';

describe('SoundsLocalComponent', () => {
  let component: SoundsLocalComponent;
  let fixture: ComponentFixture<SoundsLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
