import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class Hover {
  @Input() appHover: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.appHover);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('');
  }
  
  private highLight(color: string) {
    if (color==''){
      this.el.nativeElement.style.border = 'transparent';
    } else{
    this.el.nativeElement.style.border = `2px solid ${color}`;
    }}
}
