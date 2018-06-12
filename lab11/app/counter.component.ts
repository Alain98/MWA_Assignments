import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
    <button (click)="increase()">+</button>
    {{counterValue}}
    <button (click)="decrease()">-</button>
    </p>
    <p>
    <input [value]="counter" (input)="counterValue=$event.target.value"/>
    </p>
  `,
  styles: [],
  outputs: ['counterChange']
})
export class CounterComponent implements OnInit {
  @Input('ComponentCounterValue') counterValue: number = 0;
  private counter = 0;
  counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
  }
  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    this.counter = this.counterValue;
    return false;
  }

  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    this.counter = this.counterValue;
    return false;
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

}
