import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderConfig } from './models';
import { ConfigToken } from './tokens';
import { DEFAULT_CONFIG } from './constants';
import { LOADER_DIRECTIVES } from './directives';
import { LOADER_COMPONENTS } from './components';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    ...LOADER_COMPONENTS,
    ...LOADER_DIRECTIVES
  ],
  imports: [CommonModule],
  providers: [
    {
      provide: ConfigToken,
      useValue: DEFAULT_CONFIG
    }
  ],
  exports: [HelloWorldComponent, ...LOADER_COMPONENTS, ...LOADER_DIRECTIVES]
})
export class ContentLoaderModule {
  static configureHOC(config: ContentLoaderConfig): ModuleWithProviders {
    return {
      ngModule: ContentLoaderModule,
      providers: [
        {
          provide: ConfigToken,
          useValue: config
        }
      ]
    };
  }
}
