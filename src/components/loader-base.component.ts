import { Component, Input, Inject } from '@angular/core';
import { ContentLoaderConfig } from '../models';
import { ConfigToken } from '../tokens';

@Component({
  selector: 'content-loader-base',
  template: ``
})
export class ContentLoaderBaseComponent {
  @Input() public visible: boolean = true;
  @Input() public style: Object = this.config.style;
  @Input() public type: string = this.config.type;
  @Input() public speed: number = this.config.speed;
  @Input() public width: number = this.config.width;
  @Input() public height: number = this.config.height;
  @Input() public primaryColor: string = this.config.primaryColor;
  @Input() public secondaryColor: string = this.config.secondaryColor;

  constructor(@Inject(ConfigToken) public config: ContentLoaderConfig) {}
}
