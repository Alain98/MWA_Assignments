import { Directive, OnInit, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective implements OnInit {
  private colors: string[];
  @Output() private colorChange: EventEmitter<string>;
  @HostBinding('style.color') activeColor = 'Black';

  @HostListener('click') changeColor() {
    this.activeColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.colorChange.emit(this.activeColor);
  }

  constructor() {
    this.colors = ['Purple', 'Blue', 'Orange', 'White', 'Pink'];
    this.colorChange = new EventEmitter();
  }

  ngOnInit() {
    this.colorChange.emit(this.activeColor);
  }

}
