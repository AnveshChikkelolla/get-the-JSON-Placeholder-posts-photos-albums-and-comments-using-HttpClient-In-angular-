import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdercommentsComponent } from './placeholdercomments.component';

describe('PlaceholdercommentsComponent', () => {
  let component: PlaceholdercommentsComponent;
  let fixture: ComponentFixture<PlaceholdercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholdercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholdercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
