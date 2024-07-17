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

  // SECTION: Static Properties
  // ---------------------------------------------------------------------------
  public static readonly STAGE = {
    EMAIL: 1,
    PASSWORD: 2,
    SUBMIT: 3,
  } as const;

  // SECTION: Private Properties
  // ---------------------------------------------------------------------------
  private readonly _fb = new FormBuilder();
  private readonly _currentStage: WritableSignal<
    (typeof LoginFormComponent.STAGE)[keyof typeof LoginFormComponent.STAGE]
  > = signal(LoginFormComponent.STAGE.EMAIL);

  // SECTION: Public Properties
  // ---------------------------------------------------------------------------
  public readonly currentStage = this._currentStage.asReadonly();
  public readonly form = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // SECTION: Methods
  // ==========================================================================
  public nextStage() {
    switch (this.currentStage()) {
      case LoginFormComponent.STAGE.EMAIL: {
        if (this.form.controls.email.invalid) {
          this.form.controls.email.markAsTouched();
          return;
        }
        this.setStage(LoginFormComponent.STAGE.PASSWORD);
        break;
      }
      case LoginFormComponent.STAGE.PASSWORD: {
        if (this.form.controls.password.invalid) {
          this.form.controls.password.markAsTouched();
          return;
        }
        this.setStage(LoginFormComponent.STAGE.SUBMIT);
        break;
      }
      case LoginFormComponent.STAGE.SUBMIT: {
        break;
      }
    }
  }

  public previousStage() {
    switch (this.currentStage()) {
      case LoginFormComponent.STAGE.EMAIL: {
        break;
      }
      case LoginFormComponent.STAGE.PASSWORD: {
        this.setStage(LoginFormComponent.STAGE.EMAIL);
        break;
      }
      case LoginFormComponent.STAGE.SUBMIT: {
        this.setStage(LoginFormComponent.STAGE.PASSWORD);
        break;
      }
    }
  }

  public setStage(
    stage: (typeof LoginFormComponent.STAGE)[keyof typeof LoginFormComponent.STAGE],
  ) {
    this._currentStage.set(stage);
  }
}
