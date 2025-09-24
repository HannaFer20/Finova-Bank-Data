import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutiveMain } from './ejecutive-main';

describe('EjecutiveMain', () => {
  let component: EjecutiveMain;
  let fixture: ComponentFixture<EjecutiveMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjecutiveMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjecutiveMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
