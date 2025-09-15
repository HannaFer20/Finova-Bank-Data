import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManager } from './login-manager';

describe('LoginManager', () => {
  let component: LoginManager;
  let fixture: ComponentFixture<LoginManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
