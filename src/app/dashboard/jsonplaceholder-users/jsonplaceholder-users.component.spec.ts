import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonplaceholderUsersComponent } from './jsonplaceholder-users.component';

describe('JsonplaceholderUsersComponent', () => {
  let component: JsonplaceholderUsersComponent;
  let fixture: ComponentFixture<JsonplaceholderUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonplaceholderUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonplaceholderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
