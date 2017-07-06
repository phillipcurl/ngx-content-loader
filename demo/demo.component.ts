import { Component } from '@angular/core';
import { DEFAULT_CONFIG } from './../src';

@Component({
  selector: 'content-loader-demo-app',
  template: `
    <article class="mb5">
      <h3 class="f4 f3-ns">Media Object</h3>
      <pre class="bg-light-gray br0 pa3 bl bw3"><code>&#60;content-loader-media&#62;&#60;&#47;content-loader-media&#62;</code></pre>
      <content-loader-media [style]="{'margin-top': '20px'}"></content-loader-media>
    </article>
    <article class="mb5">
      <h3 class="f4 f3-ns">Code Block</h3>
      <pre class="bg-light-gray br0 pa3 bl bw3"><code>&#60;content-loader-code&#62;&#60;&#47;content-loader-code&#62;</code></pre>
      <content-loader-code [style]="{'margin-top': '20px'}"></content-loader-code>
    </article>
    <article class="mb5">
      <h3 class="f4 f3-ns">Instagram-style Post</h3>
      <pre class="bg-light-gray br0 pa3 bl bw3"><code>&#60;content-loader-post&#62;&#60;&#47;content-loader-post&#62;</code></pre>
      <content-loader-post [style]="{'margin-top': '20px'}"></content-loader-post>
    </article>

    <article class="cf">
      <h4 class="f4 f3-ns">
        Content loaders are dynamic and customizable. Try editing the color values for the loader below to see that in action.
      </h4>
      <div class="mb4">
        <div class="measure">
          <!-- <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
          <input [(ngModel)]="type" id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"> -->
          <div class="cf pr3-s">
            <div class="fl w-100 w-50-ns pr3-ns">
              <label for="primaryColor" class="f6 b db mb2">Primary Color</label>
              <input [(ngModel)]="primaryColor" id="primaryColor" class="input-reset ba b--black-20 mb2 pa2 db w-100 bg-white" type="color">
            </div>
            <div class="fr w-100 w-50-ns pl3-ns">
              <label for="secondaryColor" class="f6 b db mb2">Secondary Color</label>
              <input [(ngModel)]="secondaryColor"
                     id="secondaryColor"
                     class="input-reset ba b--black-20 mb2 pa2 db w-100 bg-white"
                     type="color">
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
    </article>
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
