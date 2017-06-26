import { Component } from '@angular/core';

@Component({
  selector: 'content-loader-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ngx-content-loader';
}
