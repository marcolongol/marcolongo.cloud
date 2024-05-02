import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { GradientOsComponent } from './gradient-os.component';

const meta: Meta<GradientOsComponent> = {
  component: GradientOsComponent,
  title: 'GradientOsComponent',
};
export default meta;
type Story = StoryObj<GradientOsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/gradient-os works!/gi)).toBeTruthy();
  },
};
