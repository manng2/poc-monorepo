import { Component, Input } from '@angular/core';
import { SearchInputComponent } from '../../lib/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'people-search-input-showcase',
  standalone: true,
  imports: [SearchInputComponent, FormsModule, NgIf],
  templateUrl: './search-input-showcase.component.html',
})
export class SearchInputShowcaseComponent {
  @Input() placeholder = '';

  value = '';
}
