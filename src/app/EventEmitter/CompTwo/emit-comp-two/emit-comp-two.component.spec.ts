import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitCompTwoComponent } from './emit-comp-two.component';

describe('EmitCompTwoComponent', () => {
  let component: EmitCompTwoComponent;
  let fixture: ComponentFixture<EmitCompTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitCompTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
