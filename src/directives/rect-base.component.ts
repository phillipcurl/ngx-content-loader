import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svg-rect',
  template: ''
})
export class SVGRectBaseComponent {
  @Input() x: number;
  @Input() y: number;
  @Input() rx: number;
  @Input() ry: number;
  @Input() width: number;
  @Input() height: number;

  constructor() {
    //
  }
}
