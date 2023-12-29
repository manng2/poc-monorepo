import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IdModel } from '@people/shared-models';

@Component({
  selector: 'people-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ],
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements ControlValueAccessor {
  @Input() placeholder = '';

  value = '';

  onChange?: (value: string) => void;
  onTouch?: () => void;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: IdModel) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
