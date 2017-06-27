import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { ContentLoaderModule } from '../src';

describe('content-loader-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentLoaderModule]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      'Hello world from the ngx-content-loader module!'
    );
  });
});
