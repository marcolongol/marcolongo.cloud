import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutesFactory } from '../../../shared/helpers';
import { NavItem } from '../../../shared/types';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: 'APP_ROUTES',
      useFactory: appRoutesFactory,
      deps: [[new Optional(), new SkipSelf(), 'APP_ROUTES']],
    },
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public navItems: NavItem[];

  @Input() public title = 'App';

  @Input() public logo = 'assets/logo.svg';

  constructor(@Inject('APP_ROUTES') public routes: NavItem[]) {
    this.navItems = routes;
  }

  ngOnInit(): void {
    console.log('HeaderComponent initialized');
  }
}
