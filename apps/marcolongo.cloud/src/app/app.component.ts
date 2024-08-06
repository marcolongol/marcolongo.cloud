import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
} from '@marcolongo.cloud/common-ui/components';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
