import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@marcolongo.cloud/common-ui';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
