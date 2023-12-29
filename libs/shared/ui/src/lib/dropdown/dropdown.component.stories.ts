import { StoryFn, moduleMetadata, type Meta } from '@storybook/angular';

import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OptionModel } from '@people/shared-models';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'Dropdown',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [DropdownComponent, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DropdownComponent),
          multi: true
        }
      ],
    })
  ]
};
export default meta;

const options: OptionModel[] = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
];

const Template = (): StoryFn => (args) => ({
  props: args
});

export const Default = Template();
Default.args = {
  options,
}

// export const Primary = Template.bind({});
// Primary.args = {

// }

