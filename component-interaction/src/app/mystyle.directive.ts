import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(elementRef:ElementRef) {
    elementRef.nativeElement.style.fontSize="40px";

  }

}
