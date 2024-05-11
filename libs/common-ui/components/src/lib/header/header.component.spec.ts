import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

@Component({
  template: ``,
  standalone: true,
})
class DummyComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([
          {
            path: 'home',
            data: { label: 'Home', icon: 'home' },
            component: DummyComponent,
          },
          {
            path: 'about',
            data: { label: 'About', icon: 'info' },
            component: DummyComponent,
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

  it('should have correct menu items', () => {
    expect(component.navItems).toEqual([
      { path: 'home', label: 'Home', icon: 'home' },
      { path: 'about', label: 'About', icon: 'info' },
    ]);
  });
});
