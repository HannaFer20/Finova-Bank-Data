import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApplication } from './credit-application';

describe('CreditApplication', () => {
  let component: CreditApplication;
  let fixture: ComponentFixture<CreditApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
