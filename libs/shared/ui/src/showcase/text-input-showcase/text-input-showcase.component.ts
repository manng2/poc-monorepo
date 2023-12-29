import { Component, Input } from '@angular/core';
import { TextInputComponent } from '../../lib/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'people-text-input-showcase',
  standalone: true,
  imports: [TextInputComponent, FormsModule, NgIf],
  templateUrl: './text-input-showcase.component.html',
})
export class TextInputShowcaseComponent {
  @Input() placeholder = '';

  value = '';
}
