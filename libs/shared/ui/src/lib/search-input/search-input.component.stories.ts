import type { Meta, StoryObj } from '@storybook/angular';
import { SearchInputComponent } from './search-input.component';

const meta: Meta<SearchInputComponent> = {
  component: SearchInputComponent,
  title: 'Search Input',
};
export default meta;
type Story = StoryObj<SearchInputComponent>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Search input',
  }
};
