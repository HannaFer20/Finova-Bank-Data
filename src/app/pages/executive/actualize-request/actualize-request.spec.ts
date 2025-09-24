import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizeRequest } from './actualize-request';

describe('ActualizeRequest', () => {
  let component: ActualizeRequest;
  let fixture: ComponentFixture<ActualizeRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizeRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizeRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
