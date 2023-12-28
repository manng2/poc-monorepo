import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TextInputComponent } from '@people/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, TextInputComponent],
  selector: 'people-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tenant-mfe-perform';
}
