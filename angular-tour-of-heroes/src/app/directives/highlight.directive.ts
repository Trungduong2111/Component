import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() defaultColor = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appHighlight || 'red');
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }
}
