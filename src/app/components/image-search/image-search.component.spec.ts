import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchComponent } from './image-search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ImageSearchComponent', () => {
  let component: ImageSearchComponent;
  let fixture: ComponentFixture<ImageSearchComponent>;
  let store: MockStore<any>;
  const initialState = { images: {}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
