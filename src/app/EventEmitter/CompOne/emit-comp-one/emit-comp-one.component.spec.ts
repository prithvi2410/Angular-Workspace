import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitCompOneComponent } from './emit-comp-one.component';

describe('EmitCompOneComponent', () => {
  let component: EmitCompOneComponent;
  let fixture: ComponentFixture<EmitCompOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitCompOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
