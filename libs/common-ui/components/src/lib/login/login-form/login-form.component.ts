import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  signal,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import {
  slideRightAnimation,
  slideLeftAnimation,
} from '@marcolongo.cloud/common-ui/animations';

const STAGE = {
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
  private readonly fb = new FormBuilder();

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  public currentStage: WritableSignal<(typeof STAGE)[keyof typeof STAGE]> = signal(
    STAGE.EMAIL,
  );

  constructor() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
    effect(() => {
      console.log(this.currentStage());
    });
  }
  public nextStage() {
    const currentStage = this.currentStage();
    switch (currentStage) {
      case STAGE.EMAIL: {
        this.currentStage.set(STAGE.PASSWORD);
        break;
      }
      case STAGE.PASSWORD: {
        this.currentStage.set(STAGE.SUBMIT);
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
        this.currentStage.set(STAGE.EMAIL);
        break;
      }
      case STAGE.SUBMIT: {
        this.currentStage.set(STAGE.PASSWORD);
        break;
      }
    }
  }

  public setStage(stage: (typeof STAGE)[keyof typeof STAGE]) {
    this.currentStage.set(stage);
  }
}
