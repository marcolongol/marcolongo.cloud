import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { NotFoundComponent } from './not-found.component';

const meta: Meta<NotFoundComponent> = {
  component: NotFoundComponent,
  title: 'NotFoundComponent',
};
export default meta;
type Story = StoryObj<NotFoundComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/not-found works!/gi)).toBeTruthy();
  },
};
