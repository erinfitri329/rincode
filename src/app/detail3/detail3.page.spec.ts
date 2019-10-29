import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail3Page } from './detail3.page';

describe('Detail3Page', () => {
  let component: Detail3Page;
  let fixture: ComponentFixture<Detail3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
