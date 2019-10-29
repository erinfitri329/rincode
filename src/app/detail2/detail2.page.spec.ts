import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2Page } from './detail2.page';

describe('Detail2Page', () => {
  let component: Detail2Page;
  let fixture: ComponentFixture<Detail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
