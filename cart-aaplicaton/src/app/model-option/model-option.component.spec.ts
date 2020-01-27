import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOptionComponent } from './model-option.component';

describe('ModelOptionComponent', () => {
  let component: ModelOptionComponent;
  let fixture: ComponentFixture<ModelOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
