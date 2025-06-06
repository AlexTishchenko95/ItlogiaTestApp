import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[itlInput]'
})
export class ItlInputDirective implements OnInit {
  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this.applyStyles();
  }

  private applyStyles(): void {
    const styles = {
      'width': '330px',
      'height': '60px',
      'background-color': '#ffffff',
      'border': '1px solid #b99150',
      'padding': '0 15px',
      'box-sizing': 'border-box',
      'font-size': '16px',
      'outline': 'none',
      'transition': 'border-color 0.3s ease'
    };

    Object.entries(styles).forEach(([property, value]) => {
      this.renderer.setStyle(this.el.nativeElement, property, value);
    });

    this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', '#d4a762');
    });

    this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', '#b99150');
    });
  }

}
