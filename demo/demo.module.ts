import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContentLoaderModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ContentLoaderModule
    // ContentLoaderModule.configureHOC({
    //   primaryColor: 'red'
    // })
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
