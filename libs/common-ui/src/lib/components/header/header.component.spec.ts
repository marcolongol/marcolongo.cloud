import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';
import { DEFAULT_ROUTES } from '../../../shared/helpers';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule],
      providers: [provideRouter(DEFAULT_ROUTES)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title', () => {
    expect(component.title).toBe('App');
  });

  it('should have default logo', () => {
    expect(component.logo).toBe('assets/logo.svg');
  });

  it('should have default menu items', () => {
    expect(component.navItems).toEqual(DEFAULT_ROUTES);
  });

  it('should have menu items', () => {
    expect(component.navItems).toBeTruthy();
  });
});
