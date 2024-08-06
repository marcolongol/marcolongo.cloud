import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent user from going to the next stage if the email is invalid', () => {
    component.form.controls.email.setValue('invalid-email');
    component.nextStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.EMAIL);
  });

  it('should allow user to go to the next stage if the email is valid', () => {
    component.form.controls.email.setValue('johndoe@contoso.com');
    component.nextStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.PASSWORD);
  });

  it('should prevent user from going to the next stage if the password is invalid', () => {
    component.setStage(LoginFormComponent.STAGE.PASSWORD);
    component.form.controls.password.setValue('123');
    component.nextStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.PASSWORD);
  });

  it('should allow user to go to the next stage if the password is valid', () => {
    component.setStage(LoginFormComponent.STAGE.PASSWORD);
    component.form.controls.password.setValue('password123');
    component.nextStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.SUBMIT);
  });

  it('should not go to the next stage if the user is already at the submit stage', () => {
    component.setStage(LoginFormComponent.STAGE.SUBMIT);
    component.nextStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.SUBMIT);
  });

  it('should not go to the previous stage if the user is already at the email stage', () => {
    component.setStage(LoginFormComponent.STAGE.EMAIL);
    component.previousStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.EMAIL);
  });

  it('should go to the previous stage if the user is at the password stage', () => {
    component.setStage(LoginFormComponent.STAGE.PASSWORD);
    component.previousStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.EMAIL);
  });

  it('should go to the previous stage if the user is at the submit stage', () => {
    component.setStage(LoginFormComponent.STAGE.SUBMIT);
    component.previousStage();
    expect(component.currentStage()).toBe(LoginFormComponent.STAGE.PASSWORD);
  });
});
