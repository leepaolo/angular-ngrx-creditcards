import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardManagerComponent } from './card-manager/card-manager/card-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-card-manager></app-card-manager>

    <router-outlet />
  `,
  styles: [],
  imports: [RouterOutlet, CardManagerComponent],
})
export class AppComponent {
  title = 'NGRX-Tut-01';
}
