import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppenAccounts } from './oppen-accounts';

describe('OppenAccounts', () => {
  let component: OppenAccounts;
  let fixture: ComponentFixture<OppenAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OppenAccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OppenAccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
