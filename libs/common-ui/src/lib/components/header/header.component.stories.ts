import { provideRouter } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
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

export const Primary: Story = {};

export const Heading: Story = {
  render: () => ({
    props: {
      routerLink: action('routerLink'),
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
