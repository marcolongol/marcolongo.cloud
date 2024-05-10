import type { Meta, StoryObj } from '@storybook/angular';

import { WebViewerComponent } from './webviewer.component';

const meta: Meta<WebViewerComponent> = {
  component: WebViewerComponent,
  title: 'WebViewerComponent',
};
export default meta;
type Story = StoryObj<WebViewerComponent>;

export const Fullscreen: Story = {
  decorators: [
    () => ({
      template: `
      <div style="height: 100vh; width: 100vw;">
        <lib-webviewer></lib-webviewer>
      </div>
      `,
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Container: Story = {
  decorators: [
    () => ({
      styles: [
        `
        .container {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: row;
        }

        .left-col {
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .right-col {
          display: flex;
          flex: 1;
          flex-direction: column;
          height: 800px;
        }

      `,
      ],
      template: `
      <div class="container">
        <div class="left-col">
          <h1>Left Column</h1>
        </div>
        <div class="right-col">
          <h1>Right Column</h1>
          <lib-webviewer></lib-webviewer>
        </div>
      </div>
      `,
    }),
  ],
};
