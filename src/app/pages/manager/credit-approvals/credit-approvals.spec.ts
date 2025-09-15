import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApprovals } from './credit-approvals';

describe('CreditApprovals', () => {
  let component: CreditApprovals;
  let fixture: ComponentFixture<CreditApprovals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditApprovals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditApprovals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
