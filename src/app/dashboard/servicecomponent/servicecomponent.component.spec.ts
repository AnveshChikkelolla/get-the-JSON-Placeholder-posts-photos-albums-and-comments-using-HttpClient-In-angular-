import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecomponentComponent } from './servicecomponent.component';

describe('ServicecomponentComponent', () => {
  let component: ServicecomponentComponent;
  let fixture: ComponentFixture<ServicecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
