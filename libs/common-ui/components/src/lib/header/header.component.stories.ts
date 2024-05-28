import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'lib-blank',
  template: '',
})
class BlankComponent {}

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'HeaderComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([
          {
            path: 'home',
            data: { label: 'Home', icon: 'fa-home' },
            component: BlankComponent,
          },
          {
            path: 'about',
            data: { label: 'About', icon: 'fa-info-circle' },
            component: BlankComponent,
          },
        ]),
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const home = await canvas.findByText('Home');
    const about = await canvas.findByText('About');
    home.click();
    about.click();
  },
};
