import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BevarageCardComponent } from "./cards.component/cards.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('april-fools-app');
}
