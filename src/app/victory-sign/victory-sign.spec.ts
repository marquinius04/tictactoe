import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorySign } from './victory-sign';

describe('VictorySign', () => {
  let component: VictorySign;
  let fixture: ComponentFixture<VictorySign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VictorySign],
    }).compileComponents();

    fixture = TestBed.createComponent(VictorySign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
