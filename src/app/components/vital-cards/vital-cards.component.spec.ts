import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalCardsComponent } from './vital-cards.component';

describe('VitalCardsComponent', () => {
  let component: VitalCardsComponent;
  let fixture: ComponentFixture<VitalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
