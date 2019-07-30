import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V3WithValidationComponent } from './v3-with-validation.component';

describe('V3WithValidationComponent', () => {
  let component: V3WithValidationComponent;
  let fixture: ComponentFixture<V3WithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V3WithValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V3WithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
