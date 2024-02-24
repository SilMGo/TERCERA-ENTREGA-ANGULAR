import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguinAunthComponent } from './loguin-aunth.component';

describe('LoguinAunthComponent', () => {
  let component: LoguinAunthComponent;
  let fixture: ComponentFixture<LoguinAunthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoguinAunthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoguinAunthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
