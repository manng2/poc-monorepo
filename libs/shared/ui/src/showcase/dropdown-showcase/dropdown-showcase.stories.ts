import { StoryObj, type Meta } from '@storybook/angular';
import { DropdownShowcaseComponent } from './dropdown-showcase.component';
import { within } from '@storybook/testing-library';
import { wait } from '@people/shared-utils';

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

    await wait(.5);

    const dropdown = await canvas.findByTestId('dropdown-button');

    dropdown.click();

    await wait(1);

    const option = await canvas.findAllByTestId('dropdown-option');

    option[0].click();
  }
};

