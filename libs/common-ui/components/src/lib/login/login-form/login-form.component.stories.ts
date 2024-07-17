import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';

import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'LoginFormComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
};

export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Primary: Story = {
  args: {},
};
