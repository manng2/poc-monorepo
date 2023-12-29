import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  WritableSignal,
  computed,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { IdModel, OptionModel } from '@people/shared-models';

@Component({
  selector: 'people-dropdown',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  private readonly eRef = inject(ElementRef);

  readonly isShown = signal(false);

  value: WritableSignal<IdModel> = signal('');
  label = computed(() => this.getLabel(this.value()));

  onChange?: (value: IdModel) => void;
  onTouch?: () => void;

  @Input() options: OptionModel[] = [];

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.isShown()) {
      return;
    }

    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isShown.set(false);
    }
  }

  writeValue(value: IdModel): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: IdModel) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  toggle(): void {
    this.isShown.update((it) => !it);
  }

  selectOption(v: IdModel): void {
    this.value.set(v);
    this.onChange!(v);

    this.isShown.set(false);
  }

  private getLabel(value: IdModel): string {
    return this.options.find((it) => it.value === value)?.label || '';
  }
}
