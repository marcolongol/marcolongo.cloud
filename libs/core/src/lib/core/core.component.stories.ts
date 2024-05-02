import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { CoreComponent } from './core.component';

const meta: Meta<CoreComponent> = {
  component: CoreComponent,
  title: 'CoreComponent',
};
export default meta;
type Story = StoryObj<CoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/core works!/gi)).toBeTruthy();
  },
};
