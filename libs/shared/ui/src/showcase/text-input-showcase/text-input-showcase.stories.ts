import { StoryObj, type Meta } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { TextInputShowcaseComponent } from './text-input-showcase.component';

const meta: Meta<TextInputShowcaseComponent> = {
  component: TextInputShowcaseComponent,
  title: 'Text Input',
  decorators: [],
};
export default meta;
type Story = StoryObj<TextInputShowcaseComponent>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Text input'
  }
}

export const Behavior: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = await canvas.findByTestId('text-input');

    userEvent.type(input, 'Hello world', {
      delay: 100,
    });
  },
};
