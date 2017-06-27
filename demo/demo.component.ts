import { Component } from '@angular/core';

@Component({
  selector: 'content-loader-demo-app',
  template: `
    <section>
      <article class="mb5 w-100 w-60-ns">
        <h2>content-loader-media</h2>
        <content-loader-media></content-loader-media>
      </article>
      <article class="mb5 w-100 w-60-ns">
        <h2>content-loader-code</h2>
        <content-loader-code primaryColor="'red'"></content-loader-code>
      </article>
      <article class="mb5 w-100 w-60-ns">
        <h2>content-loader-post</h2>
        <content-loader-post></content-loader-post>
      </article>
    </section>
  `
})
export class DemoComponent {}
