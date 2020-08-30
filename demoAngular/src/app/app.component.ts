import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //document.querySelector('app-root'); <app-root></app-root>
  // templateUrl: './app.component.html',
  template: `
    <h1>welcome app</h1>
    <app-hello></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular';
}
