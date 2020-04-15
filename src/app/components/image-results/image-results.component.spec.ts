import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResultsComponent } from './image-results.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ImageResultsComponent', () => {
  let component: ImageResultsComponent;
  let fixture: ComponentFixture<ImageResultsComponent>;
  let store: MockStore<any>;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResultsComponent ,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        NgxPaginationModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
