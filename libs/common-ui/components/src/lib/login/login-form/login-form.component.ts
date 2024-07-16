import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import {
  slideRightAnimation,
  slideLeftAnimation,
} from '@marcolongo.cloud/common-ui/animations';

export const STAGE = {
  EMAIL: 1,
  PASSWORD: 2,
  SUBMIT: 3,
} as const;

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  animations: [slideLeftAnimation, slideRightAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  // SECTION: Properties
  // ==========================================================================
  private readonly _currentStage: WritableSignal<(typeof STAGE)[keyof typeof STAGE]> =
    signal(STAGE.EMAIL);
  private readonly fb = new FormBuilder();

  public readonly currentStage = this._currentStage.asReadonly();
  public readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // SECTION: Methods
  public nextStage() {
    const currentStage = this.currentStage();
    switch (currentStage) {
      case STAGE.EMAIL: {
        if (this.form.controls.email.invalid) {
          this.form.controls.email.markAsTouched();
          return;
        }
        this.setStage(STAGE.PASSWORD);
        break;
      }
      case STAGE.PASSWORD: {
        if (this.form.controls.password.invalid) {
          this.form.controls.password.markAsTouched();
          return;
        }
        this.setStage(STAGE.SUBMIT);
        break;
      }
      case STAGE.SUBMIT: {
        break;
      }
    }
  }

  public previousStage() {
    const currentStage = this.currentStage();
    switch (currentStage) {
      case STAGE.EMAIL: {
        break;
      }
      case STAGE.PASSWORD: {
        this.setStage(STAGE.EMAIL);
        break;
      }
      case STAGE.SUBMIT: {
        this.setStage(STAGE.PASSWORD);
        break;
      }
    }
  }

  public setStage(stage: (typeof STAGE)[keyof typeof STAGE]) {
    this._currentStage.set(stage);
  }
}
