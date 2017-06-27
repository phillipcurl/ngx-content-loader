import { Component } from '@angular/core';
import { DEFAULT_CONFIG } from './../src';

@Component({
  selector: 'content-loader-demo-app',
  template: `
    <section class="cf">
      <article class="mb5">
        <h3>content-loader-media</h3>
        <content-loader-media></content-loader-media>
      </article>
      <article class="mb5">
        <h3>content-loader-code</h3>
        <content-loader-code height=100></content-loader-code>
      </article>
      <article class="mb5">
        <h3>content-loader-post</h3>
        <content-loader-post height=400></content-loader-post>
      </article>
    </section>

    <section class="cf mb4">
      <h2>Content loaders are dynamic and customizable. Try editing the values for the loader below.</h2>
      <div class="mb4">
        <div class="measure">
          <!-- <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
          <input [(ngModel)]="type" id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"> -->
          <div class="cf">
            <div class="fl w-100 w-33-ns pr1-ns">
              <label for="speed" class="f6 b db mb2">Speed <span class="normal black-60">(optional)</span></label>
              <input [(ngModel)]="speed" id="speed" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="number">
            </div>
            <div class="fl w-100 w-33-ns ph1-ns">
              <label for="width" class="f6 b db mb2">Width <span class="normal black-60">(optional)</span></label>
              <input [(ngModel)]="width" id="width" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="number">
            </div>
            <div class="fl w-100 w-33-ns pl1-ns">
              <label for="height" class="f6 b db mb2">Height <span class="normal black-60">(optional)</span></label>
              <input [(ngModel)]="height" id="height" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="number">
            </div>
          </div>
          <div class="cf">
            <div class="fl w-100 w-50-ns pr1-ns">
              <label for="primaryColor" class="f6 b db mb2">Primary Color <span class="normal black-60">(optional)</span></label>
              <input [(ngModel)]="primaryColor" id="primaryColor" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text">
            </div>
            <div class="fl w-100 w-50-ns pl1-ns">
              <label for="secondaryColor" class="f6 b db mb2">Secondary Color <span class="normal black-60">(optional)</span></label>
              <input [(ngModel)]="secondaryColor" id="secondaryColor" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text">
            </div>
          </div>
        </div>
      </div>
      <content-loader-media [(visible)]="visible"
                            [(style)]="style"
                            [(type)]="type"
                            [(speed)]="speed"
                            [(width)]="width"
                            [(height)]="height"
                            [(primaryColor)]="primaryColor"
                            [(secondaryColor)]="secondaryColor">
      </content-loader-media>
    </section>
  `
})
export class DemoComponent {
  public visible: boolean = true;
  public style: Object = DEFAULT_CONFIG.style;
  public type: string = DEFAULT_CONFIG.type;
  public speed: number = DEFAULT_CONFIG.speed;
  public width: number = DEFAULT_CONFIG.width;
  public height: number = DEFAULT_CONFIG.height;
  public primaryColor: string = DEFAULT_CONFIG.primaryColor;
  public secondaryColor: string = DEFAULT_CONFIG.secondaryColor;
}
