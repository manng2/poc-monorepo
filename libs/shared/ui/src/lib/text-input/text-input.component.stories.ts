import type { Meta, StoryObj } from '@storybook/angular';

import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'Text Input',
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Text input',
  }
};
