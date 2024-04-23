import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { IStaticMethods } from 'preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-quiz';

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }

}
