import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentLoaderModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ContentLoaderModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}