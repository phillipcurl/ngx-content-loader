import { Component, OnInit, Inject } from '@angular/core';
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
      <svg:rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <svg:rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <svg:rect x="190" y="0" rx="3" ry="3" width="10" height="10" />

      <svg:rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <svg:rect x="155" y="20" rx="3" ry="3" width="130" height="10" />

      <svg:rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <svg:rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <svg:rect x="185" y="40" rx="3" ry="3" width="60" height="10" />

      <svg:rect x="15" y="60" rx="3" ry="3" width="130" height="10" />
      <svg:rect x="155" y="60" rx="3" ry="3" width="130" height="10" />

      <svg:rect x="0" y="80" rx="3" ry="3" width="30" height="10" />
    </content-loader-wrapper>
  `
})
export class ContentLoaderCodeComponent extends ContentLoaderBaseComponent {}
