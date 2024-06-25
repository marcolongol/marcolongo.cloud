import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { SandboxComponent } from './sandbox.component';

const meta: Meta<SandboxComponent> = {
  component: SandboxComponent,
  title: 'SandboxComponent',
};
export default meta;
type Story = StoryObj<SandboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sandbox works!/gi)).toBeTruthy();
  },
};
