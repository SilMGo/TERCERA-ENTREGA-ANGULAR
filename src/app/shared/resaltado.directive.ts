import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() set appResaltado(role: string) {

    if (role === 'ADMIN') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');

    } else if (role === 'USER') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}


