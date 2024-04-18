import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-common-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-ui.component.html',
  styleUrl: './common-ui.component.scss',
})
export class CommonUiComponent {}
