import { Component, Input } from '@angular/core';

@Component({
  selector: 'people-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  @Input() placeholder = '';
}
