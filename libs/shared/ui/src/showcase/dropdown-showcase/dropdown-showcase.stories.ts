import { StoryObj, type Meta } from '@storybook/angular';
import { DropdownShowcaseComponent } from './dropdown-showcase.component';
import { within } from '@storybook/testing-library';

const meta: Meta<DropdownShowcaseComponent> = {
  component: DropdownShowcaseComponent,
  title: 'Dropdown',
  decorators: [],
};
export default meta;
type Story = StoryObj<DropdownShowcaseComponent>;

export const Default: Story = {};

export const Behavior: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdown = await canvas.findByTestId('dropdown-button');

    await dropdown.click();

    const option = await canvas.findAllByTestId('dropdown-option');

    await option[0].click();
  }
};

