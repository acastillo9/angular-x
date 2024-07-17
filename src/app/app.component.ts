import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineComponent } from './views/timeline/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-x';

  ngOnInit(): void {
    // lo que escriban acá se ejecuta cuando el componente es inicializado
  }
}
