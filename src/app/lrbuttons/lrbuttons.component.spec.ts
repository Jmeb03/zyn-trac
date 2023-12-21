import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrbuttonsComponent } from './lrbuttons.component';

describe('LrbuttonsComponent', () => {
  let component: LrbuttonsComponent;
  let fixture: ComponentFixture<LrbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LrbuttonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LrbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
