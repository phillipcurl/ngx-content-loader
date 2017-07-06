import { Component, Input, Inject } from '@angular/core';
import { SVGRectBaseComponent } from './rect-base.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[loaderLine]',
  template: `
    <svg:rect [attr.x]="x" [attr.y]="y" [attr.rx]="3" [attr.ry]="3" [attr.width]="width" [attr.height]="10" />
  `
})
export class SVGLineComponent extends SVGRectBaseComponent {
  constructor() {
    super();
  }
}
