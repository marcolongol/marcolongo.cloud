import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideSocialAuthServiceConfig } from '@marcolongo.cloud/core/auth';
import {
  type Meta,
  type StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';

import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'LoginComponent',
  decorators: [
    moduleMetadata({
      imports: [SocialLoginModule],
    }),
    applicationConfig({
      providers: [
        provideSocialAuthServiceConfig(),
        provideAnimationsAsync(),
        provideHttpClient(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<LoginComponent>;

export const Primary: Story = {
  args: {},
};
