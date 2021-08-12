import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatteningComponent } from './flattening.component';

describe('FlatteningComponent', () => {
  let component: FlatteningComponent;
  let fixture: ComponentFixture<FlatteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatteningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
