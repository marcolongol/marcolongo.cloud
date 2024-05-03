import type { Meta, StoryObj } from '@storybook/angular';

import { WebViewerComponent } from './webviewer.component';

const meta: Meta<WebViewerComponent> = {
  component: WebViewerComponent,
  title: 'WebViewerComponent',
};
export default meta;
type Story = StoryObj<WebViewerComponent>;

export const Primary: Story = {};
