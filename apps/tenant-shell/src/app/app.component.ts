import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TextInputComponent, SearchInputComponent } from '@people/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, TextInputComponent, SearchInputComponent],
  selector: 'people-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tenant-shell';
}
