import type { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';

import { ThemeSelectorComponent } from './theme-selector.component';

const meta: Meta<ThemeSelectorComponent> = {
  component: ThemeSelectorComponent,
  title: 'ThemeSelectorComponent',
};
export default meta;
type Story = StoryObj<ThemeSelectorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
