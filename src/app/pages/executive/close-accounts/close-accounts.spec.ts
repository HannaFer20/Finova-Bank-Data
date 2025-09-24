import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAccounts } from './close-accounts';

describe('CloseAccounts', () => {
  let component: CloseAccounts;
  let fixture: ComponentFixture<CloseAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseAccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseAccounts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
