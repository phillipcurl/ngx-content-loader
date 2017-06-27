import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentLoaderModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    ContentLoaderModule
    // ContentLoaderModule.configureHOC({
    //   primaryColor: 'red'
    // })
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
