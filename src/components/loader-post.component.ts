import { Component, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { ContentLoaderBaseComponent } from './loader-base.component';

@Component({
  selector: 'content-loader-post',
  template: `
    <content-loader-wrapper [width]="width"
                            [height]="height"
                            [style]="style"
                            [primaryColor]="primaryColor"
                            [secondaryColor]="secondaryColor"
                            [speed]="speed">
      <svg:circle cx="30" cy="30" r="30" />

      <svg:rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
      <svg:rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
      <svg:rect x="0" y="70" rx="5" ry="5" [attr.width]="width" [attr.height]="height" />
    </content-loader-wrapper>
  `
})
export class ContentLoaderPostComponent extends ContentLoaderBaseComponent {
  constructor(@Inject(ConfigToken) public config: ContentLoaderConfig) {
    super(config);
    this.height = 300;
  }
}
