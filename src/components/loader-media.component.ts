import { Component, OnInit, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { ContentLoaderBaseComponent } from './loader-base.component';

@Component({
  selector: 'content-loader-media',
  template: `
    <content-loader-wrapper [width]="width"
                            [height]="height"
                            [style]="style"
                            [primaryColor]="primaryColor"
                            [secondaryColor]="secondaryColor"
                            [speed]="speed">
      <svg:rect x="0" y="0" rx="5" ry="5" width="70" height="70"></svg:rect>

      <svg:rect x="80" y="17" rx="4" ry="4" width="300" height="13"></svg:rect>
      <svg:rect x="80" y="40" rx="3" ry="3" width="250" height="10"></svg:rect>

      <svg:rect x="0" y="80" rx="3" ry="3" width="350" height="10"></svg:rect>
      <svg:rect x="0" y="100" rx="3" ry="3" width="400" height="10"></svg:rect>
      <svg:rect x="0" y="120" rx="3" ry="3" width="360" height="10"></svg:rect>
    </content-loader-wrapper>
  `
})
export class ContentLoaderMediaComponent extends ContentLoaderBaseComponent {}
