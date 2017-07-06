import { Component, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { ContentLoaderBaseComponent } from './loader-base.component';

@Component({
  selector: 'content-loader-code',
  template: `
    <content-loader-wrapper [width]="width"
                            [height]="height"
                            [style]="style"
                            [primaryColor]="primaryColor"
                            [secondaryColor]="secondaryColor"
                            [speed]="speed">
      <svg:rect x="0" y="0" width="70" contentLoaderLine />
      <svg:rect x="80" y="0" width="100" contentLoaderLine />
      <svg:rect x="190" y="0" width="10" contentLoaderLine />

      <svg:rect x="15" y="20" width="130" contentLoaderLine />
      <svg:rect x="155" y="20" width="130" contentLoaderLine />

      <svg:rect x="15" y="40" width="90" contentLoaderLine />
      <svg:rect x="115" y="40" width="60" contentLoaderLine />
      <svg:rect x="185" y="40" width="60" contentLoaderLine />

      <svg:rect x="15" y="60" width="130" contentLoaderLine />
      <svg:rect x="155" y="60" width="130" contentLoaderLine />

      <svg:rect x="0" y="80" width="30" contentLoaderLine />
    </content-loader-wrapper>
  `
})
export class ContentLoaderCodeComponent extends ContentLoaderBaseComponent {
  constructor(@Inject(ConfigToken) public config: ContentLoaderConfig) {
    super(config);
    this.height = 100;
  }
}
