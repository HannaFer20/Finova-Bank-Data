import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedServices } from './associated-services';

describe('AssociatedServices', () => {
  let component: AssociatedServices;
  let fixture: ComponentFixture<AssociatedServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociatedServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociatedServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
