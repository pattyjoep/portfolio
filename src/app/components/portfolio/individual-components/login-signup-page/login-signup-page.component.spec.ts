import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupPageComponent } from './login-signup-page.component';

describe('LoginSignupPageComponent', () => {
  let component: LoginSignupPageComponent;
  let fixture: ComponentFixture<LoginSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
