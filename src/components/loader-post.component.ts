import { Component, OnInit, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { ContentLoaderBaseComponent } from './loader-base.component';

@Component({
  selector: 'content-loader-post',
  template: `
    <content-loader-wrapper>
      <svg:circle cx="30" cy="30" r="30" />

      <svg:rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
      <svg:rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
      <svg:rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
    </content-loader-wrapper>
  `
})
export class ContentLoaderPostComponent extends ContentLoaderBaseComponent
  implements OnInit {
  ngOnInit(): any {
    console.log('loaded');
  }
}
