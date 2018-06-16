import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a [routerLink]="['farms']">Famers Market</a> 
  <router-outlet></router-outlet>
  `,
  styles: []
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
