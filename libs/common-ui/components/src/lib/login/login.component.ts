import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
