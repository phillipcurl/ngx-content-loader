import { SVG_COMPONENTS } from './svg';

import { ContentLoaderBaseComponent } from './loader-base.component';
import { ContentLoaderWrapperComponent } from './loader-wrapper.component';
import { ContentLoaderMediaComponent } from './loader-media.component';
import { ContentLoaderCodeComponent } from './loader-code.component';
import { ContentLoaderPostComponent } from './loader-post.component';

export const LOADER_COMPONENTS: any = [
  ...SVG_COMPONENTS,
  ContentLoaderBaseComponent,
  ContentLoaderWrapperComponent,
  ContentLoaderMediaComponent,
  ContentLoaderCodeComponent,
  ContentLoaderPostComponent
];

export { ContentLoaderBaseComponent } from './loader-base.component';
export { ContentLoaderWrapperComponent } from './loader-wrapper.component';
export { ContentLoaderMediaComponent } from './loader-media.component';
export { ContentLoaderCodeComponent } from './loader-code.component';
export { ContentLoaderPostComponent } from './loader-post.component';
