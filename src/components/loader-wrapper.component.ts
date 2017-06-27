import { Component, OnInit, Input, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { ContentLoaderBaseComponent } from './loader-base.component';

@Component({
  selector: 'content-loader-wrapper',
  template: `
    <svg [attr.viewBox]="'0 0 ' + width + ' ' + height" version="1.1" [attr.style]="style.toString()" preserveAspectRatio="xMidYMid meet">
        <svg:rect [attr.fill]="'url(#' + idGradient + ')'"
                  [attr.clip-path]="'url(#' + idClip + ')'"
                  x="0" y="0"
                  [attr.width]="width" [attr.height]="height">
        </svg:rect>

        <defs>
            <clipPath id="{{ idClip }}">
                <ng-content></ng-content>
            </clipPath>

            <linearGradient id="{{ idGradient }}">
                <stop offset="0%" [attr.stop-color]="primaryColor">
                    <animate attributeName="offset" values="-2; 1" [attr.dur]="speed + 's'" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" [attr.stop-color]="secondaryColor">
                    <animate attributeName="offset" values="-1.5; 1.5" [attr.dur]="speed + 's'" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" [attr.stop-color]="primaryColor">
                    <animate attributeName="offset" values="-1; 2" [attr.dur]="speed + 's'" repeatCount="indefinite" />
                </stop>
            </linearGradient>
        </defs>
    </svg>
  `
})
export class ContentLoaderWrapperComponent extends ContentLoaderBaseComponent {}
