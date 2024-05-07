import { provideRouter } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { HeaderComponent } from './header.component';
import { DEFAULT_ROUTES } from '../../../shared/helpers';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'HeaderComponent',
  decorators: [
    applicationConfig({
      providers: [provideRouter(DEFAULT_ROUTES)],
    }),
  ],
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
    title: 'App',
    logo: 'assets/logo.svg',
  },
};

export const Heading: Story = {
  args: {
    title: 'App',
    logo: 'assets/logo.svg',
  },
  render: () => ({
    props: {
      routerLink: action('routerLink'),
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('App')).toBeTruthy();
    expect(canvas.getByAltText('logo')).toBeTruthy();
    expect(canvas.getByText('Home')).toBeTruthy();
    expect(canvas.getByText('About')).toBeTruthy();
    // click on Home
    expect(canvas.getByText('Home').click());
  },
};
