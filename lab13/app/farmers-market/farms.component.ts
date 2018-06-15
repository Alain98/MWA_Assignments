import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
//import { RouterModule, Routes, Router } from '@angular/router';



@Component({
  selector: 'app-farms',
  template: `
  <ul>
    <li *ngFor="let farm of farms">
        <a [routerLink]="['','farm-details', farm['_id']]">
            {{farm['Farm']}}
        </a>
    </li>
  </ul>
  <router-outlet></router-outlet>
`,
  styles: []
})

export class FarmsComponent implements OnInit {

  private farms: object;

  constructor(private db: DbService) {
    this.farms = db.getData();
  }

  ngOnInit() {
  }

}
