import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
  <ul>
  <li *ngFor="let item of array1" appUpper [appMyvisibility]="true" appMycolor (colorChange)="updateColor($event)">{{item}}</li>
</ul>
  `,
  styles: []
})
export class Comp1Component implements OnInit {
  @Input() array1: string[];

  private color: string;
  constructor() {
    this.array1 = ['Alain', 'Protais', 'Mossebo', 'Kamdem'];
  }

  updateColor(color: string) {
    this.color = color;
  }

  ngOnInit() {
  }

}
