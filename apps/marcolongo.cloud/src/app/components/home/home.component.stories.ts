import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { HomeComponent } from './home.component';

const meta: Meta<HomeComponent> = {
  component: HomeComponent,
  title: 'HomeComponent',
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home works!/gi)).toBeTruthy();
  },
};
