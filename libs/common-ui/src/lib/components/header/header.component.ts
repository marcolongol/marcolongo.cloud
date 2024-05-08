import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  SkipSelf,
  Optional,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES, appRoutesFactory, DEFAULT_ROUTES } from '../../../shared/helpers';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: APP_ROUTES,
      useFactory: appRoutesFactory,
      deps: [[new Optional(), new SkipSelf(), APP_ROUTES]],
    },
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() public title = 'App';

  @Input() public logo = 'assets/logo.svg';

  public navItems = inject(APP_ROUTES);

  public _usingDefaultRoutes = false;

  ngOnInit(): void {
    this._usingDefaultRoutes = this.navItems === DEFAULT_ROUTES;
  }
}
