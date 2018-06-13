import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @Input() appMyvisibility: boolean;
  constructor(private e: ElementRef) {
  }
  ngOnInit() {
    if (this.appMyvisibility == false)
      this.e.nativeElement.style.display = 'none';
  }
}

