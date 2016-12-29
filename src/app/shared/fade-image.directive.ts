import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pa-fade-image]'
})
export class FadeImageDirective {

  constructor(private el: ElementRef) {
    const style = el.nativeElement.style;
    style.opacity = 0;
    style.transition = 'opacity 0.3s';

    el.nativeElement.onload = this.onImageLoad.bind(this);
  }

  onImageLoad() {
    this.el.nativeElement.style.opacity = 1;
  }

}
