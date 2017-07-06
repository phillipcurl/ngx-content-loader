import {
  Component,
  Directive,
  OnInit,
  NgModule,
  ElementRef,
  Renderer,
  ViewChild
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[contentLoaderLine]'
})
export class SVGLineDirective implements OnInit {
  constructor(private _elRef: ElementRef, private _renderer: Renderer) {
    console.log('!');
  }

  ngOnInit(): any {
    this._renderer.setElementAttribute(this._elRef.nativeElement, 'rx', '3');

    this._renderer.setElementAttribute(this._elRef.nativeElement, 'ry', '3');

    this._renderer.setElementAttribute(
      this._elRef.nativeElement,
      'height',
      '10'
    );
  }
}

// import { Component, Input, Inject } from '@angular/core';
// import { SVGRectBaseComponent } from './rect-base.component';

// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: '[loaderLine]',
//   template: `
//     <svg:rect [attr.x]="x" [attr.y]="y" [attr.rx]="3" [attr.ry]="3" [attr.width]="width" [attr.height]="10" />
//   `
// })
// export class SVGLineComponent extends SVGRectBaseComponent {
//   constructor() {
//     super();
//   }
// }
