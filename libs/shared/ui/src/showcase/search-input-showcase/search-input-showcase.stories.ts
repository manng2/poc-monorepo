import { StoryObj, type Meta } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { SearchInputShowcaseComponent } from './search-input-showcase.component';

const meta: Meta<SearchInputShowcaseComponent> = {
  component: SearchInputShowcaseComponent,
  title: 'Search Input',
  decorators: [],
};
export default meta;
type Story = StoryObj<SearchInputShowcaseComponent>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Search input'
  }
}

export const Behavior: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = await canvas.findByTestId('search-input');

    userEvent.type(input, 'Hello world', {
      delay: 100,
    });
  },
};
