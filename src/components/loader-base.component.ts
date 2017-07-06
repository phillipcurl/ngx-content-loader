import { Component, Input, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';
import { DEFAULT_CONFIG } from '../constants';

@Component({
  selector: 'content-loader-base',
  template: ``
})
export class ContentLoaderBaseComponent {
  @Input() visible: boolean = this.config.visible || DEFAULT_CONFIG.visible;
  @Input() style: Object = this.config.style || DEFAULT_CONFIG.style;
  @Input() type: string = this.config.type || DEFAULT_CONFIG.type;
  @Input() speed: number = this.config.speed || DEFAULT_CONFIG.speed;
  @Input() width: number = this.config.width || DEFAULT_CONFIG.width;
  @Input() height: number = this.config.height || DEFAULT_CONFIG.height;
  @Input()
  primaryColor: string = this.config.primaryColor ||
    DEFAULT_CONFIG.primaryColor;
  @Input()
  secondaryColor: string = this.config.secondaryColor ||
    DEFAULT_CONFIG.secondaryColor;

  constructor(@Inject(ConfigToken) public config: ContentLoaderConfig) {}
}
