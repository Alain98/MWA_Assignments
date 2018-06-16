import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <h1>
    An Id is required !!!
  </h1>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
