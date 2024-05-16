import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { SqliComponent } from './sqli.component';

const meta: Meta<SqliComponent> = {
  component: SqliComponent,
  title: 'SqliComponent',
};
export default meta;
type Story = StoryObj<SqliComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sqli works!/gi)).toBeTruthy();
  },
};
