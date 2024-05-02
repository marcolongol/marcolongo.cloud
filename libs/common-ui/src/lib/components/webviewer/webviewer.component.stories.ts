import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { WebViewerComponent } from './webviewer.component';

const meta: Meta<WebViewerComponent> = {
  component: WebViewerComponent,
  title: 'WebViewerComponent',
};
export default meta;
type Story = StoryObj<WebViewerComponent>;

export const Primary: Story = {
  args: {
    file: '',
  },
};

export const Heading: Story = {
  args: {
    file: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/webviewer works!/gi)).toBeTruthy();
  },
};
