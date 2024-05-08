import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';
import { DEFAULT_ROUTES } from '../../../shared/helpers';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([
          ...DEFAULT_ROUTES,
          {
            path: '**',
            component: HeaderComponent,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title', () => {
    expect(component.title).toBe('marcolongo.cloud');
  });

  it('should have default logo', () => {
    expect(component.logo).toBe('assets/marcolongo.svg');
  });

  it('should have default menu items', () => {
    console.log(component.navItems);
    expect(component.navItems).toEqual(DEFAULT_ROUTES);
  });

  it('should have menu items', () => {
    expect(component.navItems).toBeTruthy();
  });

  it('should navigate to defaultroute', () => {
    const navItem = fixture.nativeElement.querySelector('.header-nav-link');
    navItem.click();
    expect(TestBed.inject(Router).url).toBe('/defaultroute');
  });
});
