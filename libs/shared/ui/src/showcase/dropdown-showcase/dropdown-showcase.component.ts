import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionModel } from '@people/shared-models';
import { DropdownComponent } from '../../lib/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'people-dropdown-showcase',
  standalone: true,
  imports: [CommonModule, DropdownComponent, FormsModule],
  templateUrl: './dropdown-showcase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownShowcaseComponent {
  readonly options: OptionModel[] = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ];

  value = '';
}
