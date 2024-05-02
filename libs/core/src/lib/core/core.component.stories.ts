import type { Meta, StoryObj } from '@storybook/angular';
import { CoreComponent } from './core.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
