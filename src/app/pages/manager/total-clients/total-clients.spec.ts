import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClients } from './total-clients';

describe('TotalClients', () => {
  let component: TotalClients;
  let fixture: ComponentFixture<TotalClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
