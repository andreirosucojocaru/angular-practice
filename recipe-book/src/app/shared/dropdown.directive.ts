import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  /*@HostBinding('class.open')*/ state: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onDropdownClicked() {
    this.state = !this.state;
    if (this.state === true) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }


}
