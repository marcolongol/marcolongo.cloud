import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { NavItem } from '@marcolongo.cloud/core/utils';
import { spyOn } from 'jest-mock';

import { HeaderComponent } from './header.component';

@Component({
  template: ``,
  standalone: true,
})
class DummyComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  const navItems: NavItem[] = [
    {
      path: 'home',
      component: DummyComponent,
      data: { label: 'Home', icon: 'home' },
    },
    {
      path: 'about',
      component: DummyComponent,
      data: { label: 'About', icon: 'info' },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(navItems)],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const title = 'marcolongo.cloud';
    component.title = title;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  });

  it('should render logo', () => {
    const logo = 'assets/marcolongo.svg';
    component.logo = logo;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img').src).toContain(logo);
  });

  it('should render nav items', () => {
    const compiled = fixture.nativeElement;
    const navItemsElements = compiled.querySelectorAll('a');
    expect(navItemsElements.length).toBe(navItems.length);
    for (const [index, navItemElement] of navItemsElements.entries()) {
      const navItem = navItems[index];
      expect(navItemElement.href).toContain(navItem.path);
      expect(navItemElement.textContent).toContain(navItem.data?.['label']);
    }
  });

  it('should navigate', () => {
    const spy = spyOn(router, 'navigateByUrl');
    const compiled = fixture.nativeElement;
    const linkElements = compiled.querySelectorAll('a');
    for (const linkElement of linkElements) {
      linkElement.click();
    }
    expect(spy).toHaveBeenCalledTimes(linkElements.length);
  });
});
