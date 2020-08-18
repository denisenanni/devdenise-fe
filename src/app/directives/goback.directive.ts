import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[goback]'
})
export class GobackDirective {

  constructor(private location: Location) { }

  @HostListener('click')
  onClick() {
      this.location.back();
  }

}
