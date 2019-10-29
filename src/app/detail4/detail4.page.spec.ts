import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail4Page } from './detail4.page';

describe('Detail4Page', () => {
  let component: Detail4Page;
  let fixture: ComponentFixture<Detail4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
