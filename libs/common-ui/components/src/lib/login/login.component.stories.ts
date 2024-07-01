import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'LoginComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
};
export default meta;
type Story = StoryObj<LoginComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/login works!/gi)).toBeTruthy();
  },
};
